import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Heart, Brain, Activity, Pill, CheckCircle, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Internal Medicine EHR Solutions - Simpl Healthcare',
  description: 'Advanced EHR solutions for internal medicine practices. Manage complex adult patients with integrated clinical decision support and comprehensive documentation.',
  keywords: 'internal medicine EHR, adult care software, chronic disease management, clinical decision support, internal medicine practice management',
}

export default function InternalMedicine() {
  const heroStats = [
    { number: '40%', label: 'Faster Diagnoses' },
    { number: '30%', label: 'Better Outcomes' },
    { number: '95%', label: 'Provider Satisfaction' }
  ]

  return (
    <PageTemplate
      title="Internal Medicine"
      subtitle="🩺 Advanced Adult Care"
      description="Sophisticated EHR solutions designed for internal medicine practices. Manage complex adult patients with advanced clinical decision support, comprehensive chronic disease management, and integrated diagnostic tools."
      heroImage="/internal-medicine-dashboard.png"
      heroImageAlt="Internal Medicine EHR Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Built for Complex Adult Medicine
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Our platform provides sophisticated tools for internal medicine physicians to manage complex adult patients with multiple comorbidities and intricate treatment plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Chronic Disease Management</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Advanced tools for managing diabetes, hypertension, COPD, and other chronic conditions with evidence-based protocols.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Brain className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Clinical Decision Support</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                AI-powered diagnostic assistance and treatment recommendations based on latest clinical guidelines and research.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Activity className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Risk Stratification</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Automated risk assessment tools to identify high-risk patients and prioritize interventions for better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Advanced Tools for Internal Medicine
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Comprehensive features designed to support the complexity of internal medicine practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Pill className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Medication Management</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Advanced drug interaction checking, dosing calculators, and medication reconciliation tools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Drug interaction alerts
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Renal dosing adjustments
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Allergy checking
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Population Health</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Track patient populations and manage quality measures for value-based care contracts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Quality measure tracking
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Risk adjustment coding
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Care gap identification
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Activity className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Preventive Care</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Automated reminders for screenings, immunizations, and preventive services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Cancer screening alerts
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Immunization tracking
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Wellness visit planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
                Seamless Workflow Integration
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Our platform integrates seamlessly with your existing workflow, enhancing efficiency without disrupting your practice patterns.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Smart Templates</h3>
                    <p className="text-lg text-simpl-dark-grey">Condition-specific documentation templates that adapt to your diagnostic patterns.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Lab Integration</h3>
                    <p className="text-lg text-simpl-dark-grey">Direct integration with major labs for seamless ordering and result review.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Specialist Coordination</h3>
                    <p className="text-lg text-simpl-dark-grey">Streamlined referral management and communication with specialists.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/internal-medicine-workflow.png"
                  alt="Internal Medicine Workflow Integration"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
              {/* Floating Metric Cards */}
              <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm">Faster Diagnoses</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">30%</div>
                <div className="text-sm">Better Outcomes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Elevate Your Internal Medicine Practice
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join leading internal medicine physicians who have transformed their practice with advanced EHR technology and clinical decision support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-demo"
                className="bg-white hover:bg-gray-100 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
              >
                Schedule a Demo
              </a>
              <a
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 