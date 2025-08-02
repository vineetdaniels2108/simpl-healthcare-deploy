import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Cloud, FileText, Search, Brain, Stethoscope, Clock, Shield, Zap, CheckCircle, Play, Database, Activity, Heart, CreditCard, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud EHR Made Simpl - Simpl Healthcare',
  description: 'Effortlessly manage and organize your practice with our web-based electronic health record platform. Complete medical histories, AI note taking, unlimited templates, and more.',
}

export default function CloudEHR() {
  const heroStats = [
    { number: '90%', label: 'U.S. Hospitals Connected' },
    { number: '<10min', label: 'Patient Data Retrieval' },
    { number: '100%', label: 'Cloud-Based Access' }
  ]

  const features = [
    {
      icon: <Search className="w-12 h-12 text-simpl-green" />,
      title: "Accessible Patient Data",
      subtitle: "Get In-Depth Medical Records",
      description: "Powered by Simpl Interoperability, retrieve patient information in less than 10 minutes, neatly organized and pulled from 90% of U.S. hospitals and clinics."
    },
    {
      icon: <FileText className="w-12 h-12 text-simpl-green" />,
      title: "Organized Medical Records",
      subtitle: "Easily Review Patient Data",
      description: "Get back hours of sorting through countless medical records with neatly organized sections like Medical History, Lab Results, Medications, Allergies, Vaccines, Vitals."
    },
    {
      icon: <Brain className="w-12 h-12 text-simpl-green" />,
      title: "Summarized Patient History",
      subtitle: "Save Time with Medical Summary",
      description: "Reduce administrative time reviewing patient documentation and quickly catch up on your patient's history with auto-generated medical summary."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-simpl-green" />,
      title: "History & Physical Notes",
      subtitle: "Streamline Documentation",
      description: "Let Simpl auto-generate patient notes from extensive medical records, saving valuable time from having to review them manually."
    },
    {
      icon: <Activity className="w-12 h-12 text-simpl-green" />,
      title: "Simpl Charting",
      subtitle: "Effortlessly Capture Data",
      description: "Add medications, allergies, documentation, vitals, vaccines and more, directly within the patient notes and without leaving your screen."
    },
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "Unlimited Templates",
      subtitle: "Expedite Charting",
      description: "Make documentation easier and ensure consistency with customizable notes templates for any specialty or use case."
    }
  ]

  const aiFeatures = [
    {
      icon: <FileText className="w-8 h-8 text-simpl-green" />,
      title: "AI Notes",
      description: "Notes written with the help of AI to ensure compliance with CMS and Auditor guidelines. Known to increase reimbursement and reduce denials."
    },
    {
      icon: <Heart className="w-8 h-8 text-simpl-green" />,
      title: "AI Facial",
      description: "AI facial scan to measure vitals easily including HR, BR, HbA1c, Hb and Blood Pressure without additional equipment."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-simpl-green" />,
      title: "AI Billing Codes",
      description: "Use AI to suggest recommended ICD codes and add them to your note easily, reducing coding errors and improving accuracy."
    },
    {
      icon: <Shield className="w-8 h-8 text-simpl-green" />,
      title: "AI Compliance",
      description: "Have a compliance score generated for your note once completed. If notes are not compliant then easily edit your notes."
    },
    {
      icon: <Calendar className="w-8 h-8 text-simpl-green" />,
      title: "AI Scheduling",
      description: "AI scheduling to autofill appointments and make appointments more streamlined, reducing administrative overhead."
    }
  ]

  return (
    <PageTemplate
      title="Cloud EHR Made Simpl"
      subtitle="☁️ AI-Powered EHR Platform"
      description="Effortlessly manage and organize your practice with our web-based electronic health record platform. Experience simplicity with complete medical histories, AI note taking, unlimited templates, and more."
      heroImage="/vwcfva.png"
      heroImageAlt="Cloud EHR Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Unified Portal Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              One Unified Portal, Multiple EHR Tools for Efficiency
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope leading-relaxed">
              Simpl makes running your practice less daunting. Your checklist of tasks just got easier with EHR features, 
              enriched by AI-powered technology. Securely record, view, collect and store patient information. Simpl integration 
              means that you can even schedule and initiate registration directly from the portal. All you need is a browser, 
              username and password. No need to use different systems or spend extensive time learning to use Simpl.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Cloud className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">100% Cloud-Based</h3>
                  <p className="text-lg text-simpl-dark-grey">Access your EHR from anywhere with just a browser, username, and password. No installations required.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Secure & Compliant</h3>
                  <p className="text-lg text-simpl-dark-grey">Bank-level security with HIPAA compliance built-in. Your patient data is always protected.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">AI-Powered Efficiency</h3>
                  <p className="text-lg text-simpl-dark-grey">Reduce documentation time by 40% with AI-powered note taking and automated coding.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/sadasad.png"
                  alt="Unified EHR Portal"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud EHR Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Cloud EHR Features
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Comprehensive EHR tools designed to streamline your workflow and improve patient care quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-2 font-manrope">{feature.title}</h3>
                <h4 className="text-lg font-semibold text-simpl-green mb-4">{feature.subtitle}</h4>
                <p className="text-lg text-simpl-dark-grey font-manrope leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                AI-Powered Intelligence
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Let artificial intelligence handle the routine tasks so you can focus on what matters most - patient care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiFeatures.slice(0, 3).map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-base text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
              {aiFeatures.slice(3).map((feature, index) => (
                <div key={index + 3} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-base text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Charting Section */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Smart Charting
            </h2>
            <p className="text-2xl text-simpl-green font-bold mb-4 font-manrope">
              Simpl Healthcare Platform Powers Transformative Solutions
            </p>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope leading-relaxed">
              Experience intelligent charting that adapts to your workflow, reduces documentation time, 
              and ensures comprehensive patient records with every interaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-simpl-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-simpl-black mb-3 font-manrope">Intelligent Documentation</h3>
                  <p className="text-lg text-simpl-dark-grey leading-relaxed">
                    Smart templates that auto-populate based on patient history and condition, reducing repetitive data entry by up to 80%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-simpl-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-simpl-black mb-3 font-manrope">Real-Time Suggestions</h3>
                  <p className="text-lg text-simpl-dark-grey leading-relaxed">
                    Context-aware recommendations for diagnoses, treatments, and billing codes as you chart, ensuring accuracy and completeness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-simpl-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-simpl-black mb-3 font-manrope">Compliance Assurance</h3>
                  <p className="text-lg text-simpl-dark-grey leading-relaxed">
                    Built-in compliance checks ensure all documentation meets CMS requirements and audit standards automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/5 to-simpl-blue/5 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-simpl-black">Patient Chart - John Smith</h4>
                      <span className="px-3 py-1 bg-simpl-green/10 text-simpl-green rounded-full text-sm font-semibold">
                        Auto-completing...
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-simpl-green" />
                        <span className="text-simpl-dark-grey">Chief Complaint: Hypertension follow-up</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-simpl-green" />
                        <span className="text-simpl-dark-grey">Vitals: BP 140/90, HR 72, auto-populated</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-simpl-green" />
                        <span className="text-simpl-dark-grey">Assessment: I10 (Essential hypertension) - suggested</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-simpl-grey">
                      <p className="text-sm text-simpl-dark-grey">
                        <strong>AI Suggestion:</strong> Consider medication adherence review based on patient history
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <div className="relative">
                  <img
                    src="/demo-preview.png"
                    alt="Watch Cloud EHR Demo"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                    <button className="bg-simpl-green hover:bg-simpl-dark-green text-white rounded-full p-6 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                      <Play className="w-12 h-12 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
                Watch a Demo
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                See Cloud EHR in action. Discover how our platform can transform your practice workflow 
                and improve patient outcomes with real-world demonstrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/book-demo"
                  className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block text-center"
                >
                  Schedule Live Demo
                </a>
                <button className="border-2 border-simpl-green hover:bg-simpl-green hover:text-white text-simpl-green px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Unlock the Benefits
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Designed for efficiency and optimization, Simpl EHR solution covers your practice needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Increase Productivity</h3>
              <p className="text-lg text-simpl-dark-grey">
                Increase productivity through AI-driven note taking and easy charting right from the same screen. 
                Minimize paperwork and free up time for patient care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Informed Decisions</h3>
              <p className="text-lg text-simpl-dark-grey">
                Conveniently access patient records and health summaries for informed clinical decisions 
                with comprehensive data at your fingertips.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Maximize Revenue</h3>
              <p className="text-lg text-simpl-dark-grey">
                Maximize revenue with EHR features like automated coding for accurate billing 
                and streamlined claims submission processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Simpl Healthcare Platform Powers Transformative Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Practice Management</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Operate your practice efficiently, from one centralized portal. Easily manage appointments 
                and automate day-to-day functions to save time and focus on patient care.
              </p>
              <a href="/practice-management" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Interoperability</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Improve workflow efficiency with quick access to extensive medical records 
                from 90% of hospitals and clinics in the U.S.
              </p>
              <a href="/interoperability" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Telehealth</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Conduct seamless virtual visits with fully integrated EHR and AI features 
                within the Simpl Telehealth platform.
              </p>
              <a href="/telehealth" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Schedule Your Demo
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Ready to experience the power of Cloud EHR? See how Simpl Healthcare can transform your practice.
            </p>
            <a
              href="/book-demo"
              className="bg-white hover:bg-gray-100 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 