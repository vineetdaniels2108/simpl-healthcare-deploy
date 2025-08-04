import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { 
  Brain, 
  Activity, 
  Shield, 
  Zap, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3,
  Stethoscope,
  Video,
  Network,
  CheckCircle,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Features - Simpl Healthcare Platform',
  description: 'Comprehensive overview of all Simpl Healthcare features including AI-powered EHR, practice management, interoperability, and telehealth solutions.',
  keywords: 'EHR features, practice management, AI healthcare, interoperability, telehealth, medical software'
}

export default function SimplFeatures() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-simpl-black to-simpl-dark-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-simpl-green/15 to-simpl-green/10 border-2 border-simpl-green/30 rounded-full mb-6 shadow-lg shadow-simpl-green/20">
              <span className="text-simpl-green font-bold text-lg">🚀 Complete Feature Overview</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-manrope">
              <span className="text-simpl-green">Simpl</span> Healthcare Platform
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-manrope">
              Five powerful modules, endless possibilities. Discover how Simpl's integrated platform transforms every aspect of healthcare delivery.
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-simpl-green mb-2">5</div>
                <div className="text-sm text-white/70">Core Modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-simpl-green mb-2">50+</div>
                <div className="text-sm text-white/70">AI Features</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-simpl-green mb-2">200+</div>
                <div className="text-sm text-white/70">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-simpl-green mb-2">99.9%</div>
                <div className="text-sm text-white/70">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Powerful Modules */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Five Powerful Modules
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              Each module is designed to work seamlessly together, creating a unified healthcare experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Cloud EHR */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-simpl-green/10 rounded-lg mr-4">
                  <FileText className="w-8 h-8 text-simpl-green" />
                </div>
                <h3 className="text-2xl font-bold text-simpl-black font-manrope">Cloud EHR</h3>
              </div>
              <p className="text-simpl-dark-grey mb-6 leading-relaxed">
                Complete electronic health records solution with AI-powered charting, smart templates, and real-time clinical decision support.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  AI-powered documentation
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Smart coding assistance
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Real-time clinical alerts
                </div>
              </div>
              <Link 
                href="/cloud-ehr" 
                className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors"
              >
                Explore Cloud EHR →
              </Link>
            </div>

            {/* Practice Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-simpl-green/10 rounded-lg mr-4">
                  <BarChart3 className="w-8 h-8 text-simpl-green" />
                </div>
                <h3 className="text-2xl font-bold text-simpl-black font-manrope">Practice Management</h3>
              </div>
              <p className="text-simpl-dark-grey mb-6 leading-relaxed">
                Streamline operations with integrated scheduling, billing, revenue cycle management, and advanced analytics.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Automated billing workflows
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Revenue optimization
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Performance analytics
                </div>
              </div>
              <Link 
                href="/practice-management" 
                className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors"
              >
                Explore Practice Management →
              </Link>
            </div>

            {/* Smart Charting */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-simpl-green/10 rounded-lg mr-4">
                  <Brain className="w-8 h-8 text-simpl-green" />
                </div>
                <h3 className="text-2xl font-bold text-simpl-black font-manrope">Smart Charting</h3>
              </div>
              <p className="text-simpl-dark-grey mb-6 leading-relaxed">
                AI-driven documentation that learns from your patterns, suggests diagnoses, and ensures compliance with every note.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Voice-to-text capabilities
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Template intelligence
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Compliance verification
                </div>
              </div>
              <Link 
                href="/charting" 
                className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors"
              >
                Explore Smart Charting →
              </Link>
            </div>

            {/* Interoperability */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-simpl-green/10 rounded-lg mr-4">
                  <Network className="w-8 h-8 text-simpl-green" />
                </div>
                <h3 className="text-2xl font-bold text-simpl-black font-manrope">Interoperability</h3>
              </div>
              <p className="text-simpl-dark-grey mb-6 leading-relaxed">
                Seamless data exchange with 90% of US hospitals and clinics through advanced FHIR integration and real-time connectivity.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  FHIR R4 compliance
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Real-time data sync
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Multi-system integration
                </div>
              </div>
              <Link 
                href="/interoperability" 
                className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors"
              >
                Explore Interoperability →
              </Link>
            </div>

            {/* Telehealth */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-simpl-green/10 rounded-lg mr-4">
                  <Video className="w-8 h-8 text-simpl-green" />
                </div>
                <h3 className="text-2xl font-bold text-simpl-black font-manrope">Telehealth</h3>
              </div>
              <p className="text-simpl-dark-grey mb-6 leading-relaxed">
                Fully integrated virtual care platform with EHR synchronization, AI assistance, and comprehensive patient engagement tools.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  HD video consultations
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  EHR integration
                </div>
                <div className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Patient portal access
                </div>
              </div>
              <Link 
                href="/telehealth" 
                className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors"
              >
                Explore Telehealth →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Intelligence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              AI-Powered Intelligence
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              Advanced artificial intelligence features that learn, adapt, and optimize your healthcare delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">AI Notes</h3>
              <p className="text-sm text-simpl-dark-grey">Auto-complete documentation with contextual suggestions</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">AI Facial Recognition</h3>
              <p className="text-sm text-simpl-dark-grey">Secure patient identification and workflow optimization</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">AI Billing Codes</h3>
              <p className="text-sm text-simpl-dark-grey">Automated ICD-10 and CPT code suggestions</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">AI Compliance</h3>
              <p className="text-sm text-simpl-dark-grey">Real-time regulatory compliance monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Integrations */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Seamless Integrations
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              Connect with the tools and systems you already use.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-simpl-black mb-4 font-manrope">Major EMRs</h3>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>Epic</li>
                <li>Cerner (Oracle Health)</li>
                <li>AllScripts</li>
                <li>Athenahealth</li>
                <li>eClinicalWorks</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-simpl-black mb-4 font-manrope">Labs & Imaging</h3>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>LabCorp</li>
                <li>Quest Diagnostics</li>
                <li>PACS Integration</li>
                <li>Radiology Networks</li>
                <li>Pathology Systems</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-simpl-black mb-4 font-manrope">Pharmacies</h3>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>CVS Pharmacy</li>
                <li>Walgreens</li>
                <li>Rite Aid</li>
                <li>Independent Pharmacies</li>
                <li>Specialty Pharmacies</li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-simpl-black mb-4 font-manrope">Payment Systems</h3>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>Square</li>
                <li>Stripe</li>
                <li>PayPal</li>
                <li>Insurance Networks</li>
                <li>Clearinghouses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Measurable Results
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              Real improvements you can track and report.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-3xl font-bold text-simpl-green mb-2">75%</div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">Time Savings</h3>
              <p className="text-sm text-simpl-dark-grey">Reduce documentation time with AI assistance</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-3xl font-bold text-simpl-green mb-2">40%</div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">Revenue Increase</h3>
              <p className="text-sm text-simpl-dark-grey">Optimize billing and reduce claim denials</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-3xl font-bold text-simpl-green mb-2">95%</div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">Patient Satisfaction</h3>
              <p className="text-sm text-simpl-dark-grey">Improve care quality and patient experience</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-3xl font-bold text-simpl-green mb-2">100%</div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">Compliance Rate</h3>
              <p className="text-sm text-simpl-dark-grey">Maintain perfect regulatory compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-simpl-green to-simpl-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-manrope">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 font-manrope">
            See how Simpl's integrated platform can streamline your operations, improve patient care, and boost your bottom line.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-white text-simpl-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors font-manrope"
            >
              Schedule Your Demo
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-manrope"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 