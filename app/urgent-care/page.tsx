import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Clock, Zap, Activity, Users, CheckCircle, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urgent Care EHR Solutions - Simpl Healthcare',
  description: 'Fast, efficient EHR solutions for urgent care centers. Streamline high-volume patient flow with rapid documentation, integrated billing, and real-time reporting.',
  keywords: 'urgent care EHR, walk-in clinic software, fast patient documentation, urgent care practice management, high-volume patient flow',
}

export default function UrgentCare() {
  const heroStats = [
    { number: '8min', label: 'Average Visit Time' },
    { number: '50%', label: 'Faster Throughput' },
    { number: '96%', label: 'Patient Satisfaction' }
  ]

  return (
    <PageTemplate
      title="Urgent Care"
      subtitle="⚡ Fast & Efficient Care"
      description="High-performance EHR solutions designed for urgent care centers. Optimize patient flow, reduce wait times, and improve efficiency with rapid documentation tools, integrated billing, and real-time analytics."
      heroImage="/urgent-care-dashboard.png"
      heroImageAlt="Urgent Care EHR Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Built for High-Volume, Fast-Paced Care
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Our platform is optimized for urgent care environments where speed, efficiency, and accuracy are critical for patient satisfaction and operational success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Rapid Documentation</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Quick-entry templates and voice-to-text capabilities that reduce documentation time by 60% while maintaining clinical accuracy.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Zap className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Patient Flow Optimization</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Real-time tracking and queue management tools that minimize wait times and maximize patient throughput.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Activity className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Integrated Billing</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Seamless charge capture and billing integration that ensures no revenue is lost in fast-paced environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Efficiency */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Streamlined Urgent Care Workflows
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Every feature designed to support the unique demands of urgent care medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Quick Check-In</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Streamlined registration process with digital forms and insurance verification.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Digital patient registration
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Real-time insurance verification
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Automatic copay collection
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Smart Templates</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Condition-specific templates that auto-populate based on chief complaint.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Symptom-driven workflows
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Clinical decision support
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Automated coding suggestions
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Real-Time Analytics</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Live dashboards for monitoring patient flow, wait times, and provider efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Wait time monitoring
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Provider productivity metrics
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Revenue cycle tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
                Operational Excellence in Every Visit
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Transform your urgent care operations with technology designed to handle high patient volumes while maintaining quality care and provider satisfaction.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Multi-Provider Efficiency</h3>
                    <p className="text-lg text-simpl-dark-grey">Coordinate care across multiple providers with shared patient queues and handoff tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Lab & Imaging Integration</h3>
                    <p className="text-lg text-simpl-dark-grey">Seamless ordering and result management for point-of-care testing and external services.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Quality Metrics Tracking</h3>
                    <p className="text-lg text-simpl-dark-grey">Monitor patient satisfaction, clinical outcomes, and operational efficiency in real-time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/urgent-care-workflow.png"
                  alt="Urgent Care Workflow Dashboard"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
              {/* Floating Metric Cards */}
              <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">8min</div>
                <div className="text-sm">Avg Visit Time</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm">Faster Flow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Location Support */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
            Scale Across Multiple Locations
          </h2>
          <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope mb-12">
            Manage multiple urgent care locations with centralized oversight and location-specific customization.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users className="w-8 h-8 text-simpl-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-simpl-black mb-2">Centralized Management</h3>
              <p className="text-sm text-simpl-dark-grey">Unified oversight across all locations</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <TrendingUp className="w-8 h-8 text-simpl-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-simpl-black mb-2">Cross-Location Analytics</h3>
              <p className="text-sm text-simpl-dark-grey">Compare performance metrics across sites</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Activity className="w-8 h-8 text-simpl-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-simpl-black mb-2">Standardized Workflows</h3>
              <p className="text-sm text-simpl-dark-grey">Consistent care protocols everywhere</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Clock className="w-8 h-8 text-simpl-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-simpl-black mb-2">Resource Optimization</h3>
              <p className="text-sm text-simpl-dark-grey">Smart staffing and inventory management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Seamless Integration Ecosystem
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Connect with the tools and services that power your urgent care operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-simpl-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-2">Lab Systems</h3>
              <p className="text-simpl-dark-grey">Direct integration with major lab networks</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-simpl-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-2">Imaging Centers</h3>
              <p className="text-simpl-dark-grey">Seamless radiology ordering and results</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-simpl-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-2">Pharmacy Networks</h3>
              <p className="text-simpl-dark-grey">Electronic prescribing and medication management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Accelerate Your Urgent Care Operations
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join urgent care centers nationwide that have improved patient throughput, provider satisfaction, and operational efficiency with our purpose-built EHR solution.
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