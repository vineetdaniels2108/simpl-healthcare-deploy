import { NextResponse } from 'next/server'
import knowledgeBase from '../../../../lib/support/knowledge'

function normalizeQuery(input: string): string {
  return input
    .toLowerCase()
    .replace(/tele[-\s]?health/g, 'telehealth')
    .replace(/book(\s+)?an(\s+)?appointment|schedule(\s+)?an(\s+)?appointment/g, 'book appointment')
    .replace(/start(\s+)?a(\s+)?telehealth(\s+)?(visit|session)?/g, 'start telehealth')
}

function scoreEntry(query: string, text: string, tags: string[] = []): number {
  const q = query.toLowerCase()
  const t = text.toLowerCase()
  let score = 0
  q.split(/\s+/).forEach((term) => {
    if (!term) return
    const occurrences = t.split(term).length - 1
    score += occurrences
  })
  const tagMatches = tags.reduce((acc, tag) => (q.includes(tag.toLowerCase()) ? acc + 2 : acc), 0)
  return score + tagMatches
}

function buildFallbackSteps(query: string, top: typeof knowledgeBase[number] | undefined, ranked: Array<{ entry: typeof knowledgeBase[number]; score: number }>) {
  const links = ranked.filter((r) => r.score > 0).slice(0, 5).map((r) => ({ title: r.entry.title, url: r.entry.url }))

  // Opinionated, explicit step guides for common intents
  if (query.includes('book appointment')) {
    return {
      answer:
        'Here’s how to book an appointment:\n\n1) Go to Scheduling in the left navigation.\n2) Select a provider and clinic location.\n3) Pick an available time slot.\n4) Enter patient details (or search an existing patient).\n5) Confirm appointment and send confirmation to the patient.\n\nFor full details, see the Getting Started guide.' ,
      links,
    }
  }
  if (query.includes('start telehealth')) {
    return {
      answer:
        'Here’s how to start a telehealth visit:\n\n1) Ensure telehealth is enabled for your org.\n2) Create or open the patient’s appointment.\n3) Choose Telehealth as the visit type and confirm the time.\n4) Send the secure join link to the patient.\n5) At the scheduled time, click “Start Telehealth” to launch the session.\n\nFor full details, see the Getting Started guide.' ,
      links,
    }
  }

  const fallback = top
    ? `Here’s what I found related to your question: ${top.title}. Open the guide for step-by-step instructions.`
    : 'I could not find an exact match. Try asking about “Getting Started”, “Telehealth”, or “Scheduling”.'
  return { answer: fallback, links }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const original = (body?.question || '').toString()
    const question = normalizeQuery(original)
    if (!question) {
      return NextResponse.json({ answer: 'Please provide a question.' }, { status: 400 })
    }

    const ranked = knowledgeBase
      .map((entry) => ({ entry, score: scoreEntry(question, `${entry.title} ${entry.content}`, entry.tags) }))
      .sort((a, b) => b.score - a.score)

    const top = ranked[0]?.entry

    // Intent mapping → ensures correct links for key topics
    function detectIntent(q: string) {
      if (/bulk\s+upload|upload\s+patients?|csv|roster/.test(q)) return ['patient-bulk-upload']
      if (/add\s+(a\s+)?patient(?!s)/.test(q)) return ['patient-single-add']
      if (/template|forms?\s+template|create\s+note\s+template/.test(q)) return ['template-create', 'create-templates-notes']
      if (/(create|sign)\s+note|my\s+notes|hpi/.test(q)) return ['note-create-sign', 'notes-management']
      if (/(appointment|schedule|service|book)/.test(q)) return ['appointments-booking', 'appointments-services']
      if (/telehealth|virtual\s+visit/.test(q)) return ['appointments-telehealth', 'appointments-services']
      if (/rx|prescription/.test(q)) return ['rx-create', 'rx-labs']
      if (/labs?|lab\s+order/.test(q)) return ['labs-order', 'rx-labs']
      if (/invoice/.test(q)) return ['billing-create-invoice', 'billing-invoicing']
      if (/payment/.test(q)) return ['billing-payments', 'billing-invoicing']
      if (/claims|coding/.test(q)) return ['billing-claims', 'billing-invoicing']
      if (/getting\s+started|activate|login|roles?/.test(q)) return ['getting-started']
      return []
    }
    const intentIds = detectIntent(question)

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY
    if (!OPENAI_API_KEY) {
      const fb = buildFallbackSteps(question, top, ranked)
      if (intentIds.length > 0) {
        const intentLinks = knowledgeBase
          .filter((e) => intentIds.includes(e.id))
          .map((e) => ({ title: e.title, url: e.url }))
        return NextResponse.json({ answer: fb.answer, links: intentLinks })
      }
      return NextResponse.json(fb)
    }

    const context = ranked
      .slice(0, 5)
      .map((r, idx) => `${idx + 1}. ${r.entry.title}: ${r.entry.content}\nURL: ${r.entry.url}`)
      .join('\n\n')

    // Enrich context with excerpts fetched from top-matching documentation URLs
    async function fetchExcerpt(url: string): Promise<string> {
      try {
        const res = await fetch(url, { method: 'GET' })
        const html = await res.text()
        const imgAlts = Array.from(html.matchAll(/<img[^>]*alt="([^"]+)"[^>]*>/gi)).map((m) => m[1]).slice(0, 5)
        const text = html
          .replace(/<script[\s\S]*?<\/script>/gi, ' ')
          .replace(/<style[\s\S]*?<\/style>/gi, ' ')
          .replace(/<[^>]+>/g, ' ')
          .replace(/&nbsp;/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .slice(0, 4000)
        const imagesNote = imgAlts.length > 0 ? `\nScreenshots (alt text): ${imgAlts.join(' | ')}` : ''
        return `Source: ${url}\nExcerpt: ${text}${imagesNote}`
      } catch {
        return `Source: ${url}\nExcerpt: (unavailable)`
      }
    }

    const topUrls = Array.from(new Set(ranked.slice(0, 5).map((r) => r.entry.url))).slice(0, 5)
    const fetched = await Promise.all(topUrls.map((u) => fetchExcerpt(u)))
    const richContext = `${context}\n\n---\nAdditional Excerpts:\n${fetched.join('\n\n')}`

    const prompt = `You are a support assistant for Simpl Healthcare. Provide clear, numbered, step-by-step instructions based on the provided documentation context. If unsure, say so and suggest the closest section.\n\nStrict formatting rules:\n- Do NOT output JSON or code blocks.\n- Do NOT include a links section in your answer (the system will attach link chips separately).\n- Use concise numbered steps and short sentences.\n- When helpful, reference screenshots by their alt text from the context (e.g., \"See screenshot: ...\").\n\nQuestion: ${original}\n\nContext:\n${richContext}`

    const resp = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        input: `System: You are a concise, step-by-step support assistant for Simpl Healthcare.\n\nUser: ${prompt}`,
        temperature: 0.2
      }),
    })

    if (!resp.ok) {
      const fb = buildFallbackSteps(question, top, ranked)
      return NextResponse.json(fb, { status: 200 })
    }
    const data = await resp.json()
    let answer = (
      data?.output_text ||
      (Array.isArray(data?.output) && data.output[0]?.content?.[0]?.text) ||
      ''
    ).toString().trim()
    // Clean up: strip JSON/code fences and any inline links section
    answer = answer
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/\n+relevant links:([\s\S]*)$/i, '')
      .replace(/\r/g, '')
      .trim()
    if (answer.includes('{') && answer.includes('}') && /"\w+"\s*:\s*/.test(answer)) {
      const s = answer.indexOf('{')
      const e = answer.lastIndexOf('}')
      if (e > s) answer = (answer.slice(0, s) + ' ' + answer.slice(e + 1)).trim()
    }

    // Build links: prefer intent-based; else filter to known docs
    let links: Array<{ title: string; url: string }>
    if (intentIds.length > 0) {
      links = knowledgeBase
        .filter((e) => intentIds.includes(e.id))
        .map((e) => ({ title: e.title, url: e.url }))
    } else {
      const allowedIds = new Set([
        'getting-started',
        'patient-management',
        'create-templates-notes',
        'notes-management',
        'appointments-services',
        'rx-labs',
        'billing-invoicing',
      ])
      links = ranked
        .map((r) => r.entry)
        .filter((e) => allowedIds.has(e.id))
        .slice(0, 5)
        .map((e) => ({ title: e.title, url: e.url }))
    }

    return NextResponse.json({ answer: answer || 'Unable to generate an answer right now.', links })
  } catch (err) {
    return NextResponse.json({ answer: 'An error occurred. Please try again.' }, { status: 500 })
  }
}


