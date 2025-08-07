import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import SupportChat from '../../components/SupportChat'

export const metadata: Metadata = {
  title: 'Support & Training – Simpl Healthcare',
  description: 'Training documentation, getting started guides, and an AI support assistant to help you find the right resources quickly.'
}

export default function SupportPage() {
  return (
    <PageTemplate
      title="Support & Training"
      subtitle="Docs, Links, and AI Assistance"
      description="Find onboarding materials, integration guidance, and FAQs. Chat with our AI assistant for quick answers and direct links."
      heroImage="/care-graphic.svg"
      heroImageAlt="Support and training resources"
    >
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-simpl-black font-manrope mb-3">Key Resources</h2>
                <p className="text-simpl-dark-grey text-lg font-manrope">Start with these commonly used training and onboarding links.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <a href="https://api-docs.simplhealthcare.com/docs/getting-started#/" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-simpl-black">Getting Started</h3>
                  <p className="text-simpl-dark-grey mt-2">Onboarding steps, setup, and first-use checklist.</p>
                </a>
                <a href="https://api-docs.simplhealthcare.com/docs/getting-started#/" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-simpl-black">Platforms & Services</h3>
                  <p className="text-simpl-dark-grey mt-2">Overview of EHR, Practice Management, Telehealth, and more.</p>
                </a>
                <a href="https://api-docs.simplhealthcare.com/docs/getting-started#/" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-simpl-black">Web Services Overview</h3>
                  <p className="text-simpl-dark-grey mt-2">Service capabilities and integration paths.</p>
                </a>
                <a href="https://api-docs.simplhealthcare.com/docs/getting-started#/" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-simpl-black">Start Integration</h3>
                  <p className="text-simpl-dark-grey mt-2">Developer setup and integration steps.</p>
                </a>
                <a href="https://api-docs.simplhealthcare.com/docs/getting-started#/" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-simpl-black">Glossary</h3>
                  <p className="text-simpl-dark-grey mt-2">Key terms across the Simpl ecosystem.</p>
                </a>
                <a href="https://api-docs.simplhealthcare.com/docs/getting-started#/" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-simpl-black">FAQ</h3>
                  <p className="text-simpl-dark-grey mt-2">Common questions and quick resolutions.</p>
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl shadow-lg border p-6">
                <h2 className="text-2xl font-bold text-simpl-black font-manrope mb-4">AI Support Assistant</h2>
                <p className="text-simpl-dark-grey mb-4">Ask a question about onboarding, platform capabilities, or integrations. The assistant will provide direct answers and link you to the right documentation.</p>
                <SupportChat />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}


