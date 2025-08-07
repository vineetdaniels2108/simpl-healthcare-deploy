'use client'

import { useMemo, useRef, useState } from 'react'
import knowledgeBase from '../lib/support/knowledge'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  links?: Array<{ title: string; url: string }>
}

function scoreEntry(query: string, text: string, tags: string[]): number {
  const q = query.toLowerCase()
  const t = text.toLowerCase()
  let score = 0
  // naive scoring: term frequency + tag matches
  q.split(/\s+/).forEach((term) => {
    if (!term) return
    const occurrences = t.split(term).length - 1
    score += occurrences
  })
  const tagMatches = tags.reduce((acc, tag) => (q.includes(tag.toLowerCase()) ? acc + 2 : acc), 0)
  return score + tagMatches
}

function normalizeQuery(input: string): string {
  return input
    .toLowerCase()
    .replace(/tele[-\s]?health/g, 'telehealth')
    .replace(/book(\s+)?an(\s+)?appointment|schedule(\s+)?an(\s+)?appointment/g, 'book appointment')
    .replace(/start(\s+)?a(\s+)?telehealth(\s+)?(visit|session)?/g, 'start telehealth')
}

export default function SupportChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Hi! I can help you with onboarding, training, and integrations. Ask me a question like "How do I get started?", "How do I start a telehealth visit?", or "How can I book an appointment?"',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)
  
  const quickIntents = useMemo(
    () => [
      'How do I get started?',
      'How can I book an appointment?',
      'How do I start a telehealth visit?',
      'Where is the Web Services Overview?',
    ],
    []
  )

  function cleanAnswerText(input: string): string {
    if (!input) return ''
    let txt = input
    // Strip fenced code blocks
    txt = txt.replace(/```[\s\S]*?```/g, ' ')
    // Heuristic: remove large JSON-looking sections
    if (txt.includes('{') && txt.includes('}') && /"\w+"\s*:\s*/.test(txt)) {
      const start = txt.indexOf('{')
      const end = txt.lastIndexOf('}')
      if (end > start) txt = (txt.slice(0, start) + ' ' + txt.slice(end + 1)).trim()
    }
    // Normalize whitespace
    txt = txt.replace(/\r/g, '').replace(/\t/g, '  ').replace(/\n{3,}/g, '\n\n')
    return txt.trim()
  }

  function renderMessageContent(text: string) {
    const lines = text.split(/\n/).map((l) => l.trim()).filter(Boolean)
    const isNumbered = lines.some((l) => /^\d+[\.)]/.test(l))
    const isBulleted = lines.some((l) => /^[-*]\s+/.test(l))
    if (isNumbered) {
      return (
        <ol className="list-decimal pl-6 space-y-1">
          {lines.map((l, idx) => (
            /^\d+[\.)]/.test(l) ? (
              <li key={idx}>{l.replace(/^\d+[\.)]\s*/, '')}</li>
            ) : (
              <li key={idx} className="list-none">{l}</li>
            )
          ))}
        </ol>
      )
    }
    if (isBulleted) {
      return (
        <ul className="list-disc pl-6 space-y-1">
          {lines.map((l, idx) => (
            /^[-*]\s+/.test(l) ? (
              <li key={idx}>{l.replace(/^[-*]\s+/, '')}</li>
            ) : (
              <li key={idx} className="list-none">{l}</li>
            )
          ))}
        </ul>
      )
    }
    return <div className="whitespace-pre-line">{text}</div>
  }

  const handleAsk = async () => {
    const query = normalizeQuery(input.trim())
    if (!query) return
    const userMsg: ChatMessage = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      const resp = await fetch('/api/support/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: query }),
      })
      const data = await resp.json()
      const links = Array.isArray(data?.links) ? data.links : []
      const cleaned = cleanAnswerText(data?.answer || '') || 'Sorry, no answer.'
      const assistantMsg: ChatMessage = { role: 'assistant', content: cleaned, links }
      setMessages((prev) => [...prev, assistantMsg])
    } catch (e) {
      const assistantMsg: ChatMessage = { role: 'assistant', content: 'There was an error answering your question. Please try again.' }
      setMessages((prev) => [...prev, assistantMsg])
    } finally {
      setIsLoading(false)
    }

    // scroll to bottom
    setTimeout(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
    }, 0)
  }

  return (
    <div className="flex flex-col h-[560px]">
      <div ref={listRef} className="flex-1 overflow-auto rounded-xl border bg-white p-4 space-y-4">
        {messages.map((m, idx) => (
          <div key={idx}>
            <div
              className={
                m.role === 'assistant'
                  ? 'bg-simpl-grey text-simpl-black rounded-lg p-3'
                  : 'bg-simpl-green/10 text-simpl-black rounded-lg p-3'
              }
            >
              {renderMessageContent(m.content)}
            </div>
            {m.role === 'assistant' && m.links && m.links.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {m.links.map((l, i) => (
                  <a
                    key={`${l.url}-${i}`}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors text-sm"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    {l.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-3 text-simpl-dark-grey">
            <span className="inline-block w-2 h-2 rounded-full bg-simpl-green animate-pulse"></span>
            Generating steps...
          </div>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {quickIntents.map((q) => (
          <button
            key={q}
            onClick={() => {
              setInput(q)
              // Immediately send the query without requiring Enter
              setTimeout(() => handleAsk(), 0)
            }}
            className="px-3 py-2 rounded-full border text-sm bg-white hover:bg-simpl-grey"
          >
            {q}
          </button>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isLoading) handleAsk()
          }}
          placeholder="Ask a question..."
          className="flex-1 rounded-lg border px-3 py-3 focus:outline-none focus:ring-2 focus:ring-simpl-green"
        />
        <button
          onClick={handleAsk}
          disabled={isLoading}
          className="bg-simpl-green hover:bg-simpl-dark-green disabled:opacity-60 text-white px-5 py-3 rounded-lg font-semibold"
        >
          Ask
        </button>
      </div>
    </div>
  )
}


