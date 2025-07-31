import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Network, Database, Share2, Zap, Clock, Shield, CheckCircle, FileText, Activity, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Healthcare Interoperability Solutions - Simpl Healthcare',
  description: 'Improve workflow efficiency with quick access to extensive medical records from 90% of hospitals and clinics in the U.S. Seamless data exchange and integration.',
}

export default function Interoperability() {
  const heroStats = [
    { number: '90%', label: 'U.S. Hospitals Connected' },
    { number: '<10min', label: 'Data Retrieval Time' },
    { number: '100%', label: 'FHIR Compliant' }
  ]

  const features = [
    {
      icon: <Network className="w-12 h-12 text-simpl-green" />,
      title: "Comprehensive Network",
      subtitle: "90% U.S. Hospital Coverage",
      description: "Access patient information from the vast majority of hospitals and clinics across the United States. Our extensive network ensures you have the data you need when you need it."
    },
    {
      icon: <Clock className="w-12 h-12 text-simpl-green" />,
      title: "Rapid Data Retrieval",
      subtitle: "Under 10 Minutes Access",
      description: "Retrieve comprehensive patient information in less than 10 minutes. Quick access to medical histories, lab results, medications, and more from external providers."
    },
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "Structured Data",
      subtitle: "Organized & Standardized",
      description: "All external data is automatically organized into standardized sections: Medical History, Lab Results, Medications, Allergies, Vaccines, and Vitals for easy review."
    },
    {
      icon: <Share2 className="w-12 h-12 text-simpl-green" />,
      title: "Seamless Exchange",
      subtitle: "Bidirectional Sharing",
      description: "Not only receive data from other providers but also share your patient information securely when authorized, ensuring continuity of care across the healthcare ecosystem."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "Security & Compliance",
      subtitle: "HIPAA & FHIR Standards",
      description: "All data exchanges are fully compliant with HIPAA regulations and FHIR standards, ensuring patient privacy and data security at every step."
    },
    {
      icon: <Zap className="w-12 h-12 text-simpl-green" />,
      title: "Real-time Updates",
      subtitle: "Live Data Synchronization",
      description: "Stay current with real-time updates from connected healthcare providers. Receive notifications of new test results, medication changes, and care updates."
    }
  ]

  const benefits = [
    {
      title: "Improved Care Coordination",
      description: "Make better clinical decisions with complete patient history from all healthcare touchpoints."
    },
    {
      title: "Reduced Duplicate Testing",
      description: "Avoid unnecessary tests and procedures by accessing existing results from other providers."
    },
    {
      title: "Enhanced Patient Safety",
      description: "Prevent adverse drug interactions and allergic reactions with comprehensive medication histories."
    },
    {
      title: "Time Savings",
      description: "Eliminate time spent calling other offices or waiting for faxed records to arrive."
    }
  ]

  return (
    <PageTemplate
      title="Interoperability"
      subtitle="🔗 Connected Healthcare"
      description="Improve workflow efficiency with quick access to extensive medical records from 90% of hospitals and clinics in the U.S. Experience seamless data exchange and integration."
      heroImage="/interoperability-network.png"
      heroImageAlt="Healthcare Interoperability Network"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Network Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Powering Connected Healthcare
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope leading-relaxed">
              Simpl Interoperability breaks down data silos in healthcare, creating a seamless network where 
              patient information flows securely between providers, improving care quality and reducing administrative burden.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Network className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Extensive Provider Network</h3>
                  <p className="text-lg text-simpl-dark-grey">Connected to 90% of U.S. hospitals and health systems, ensuring comprehensive data access.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">FHIR-Compliant</h3>
                  <p className="text-lg text-simpl-dark-grey">Built on HL7 FHIR standards for secure, standardized healthcare data exchange.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Instant Integration</h3>
                  <p className="text-lg text-simpl-dark-grey">Seamlessly integrated into your EHR workflow with no additional training required.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/interoperability-dashboard.png"
                  alt="Interoperability Dashboard"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Comprehensive Interoperability Features
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Everything you need for seamless healthcare data exchange and patient care coordination.
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

      {/* Data Flow Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                How Data Flows Seamlessly
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Understanding how patient data moves securely and efficiently through our interoperability network.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Query Request</h3>
                <p className="text-white/90">Search for patient data across connected networks with a simple patient identifier.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Network Search</h3>
                <p className="text-white/90">Our system searches across 90% of U.S. hospitals and clinics for matching patient records.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Data Compilation</h3>
                <p className="text-white/90">Found records are compiled, standardized, and organized into meaningful sections.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">4. EHR Integration</h3>
                <p className="text-white/90">Data is seamlessly integrated into your EHR for immediate clinical use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
                Clinical Benefits & Outcomes
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Interoperability isn't just about technology—it's about improving patient outcomes 
                and enhancing the provider experience through better access to information.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-simpl-black mb-2">{benefit.title}</h3>
                      <p className="text-lg text-simpl-dark-grey">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/patient-data-flow.png"
                  alt="Patient Data Flow Diagram"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Built on Industry Standards
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Our interoperability solution adheres to the highest industry standards for security, privacy, and data exchange.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">HIPAA Compliant</h3>
              <p className="text-lg text-simpl-dark-grey">
                Full compliance with HIPAA regulations ensuring patient privacy and data security.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">HL7 FHIR</h3>
              <p className="text-lg text-simpl-dark-grey">
                Built on HL7 FHIR R4 standards for modern, interoperable healthcare data exchange.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">21st Century Cures</h3>
              <p className="text-lg text-simpl-dark-grey">
                Compliant with 21st Century Cures Act requirements for information blocking prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Seamlessly Integrated with Simpl Platform
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Cloud EHR</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                External patient data automatically flows into your EHR, creating comprehensive patient records.
              </p>
              <a href="/cloud-ehr" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Practice Management</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Integrated workflows ensure external data informs scheduling, billing, and care coordination decisions.
              </p>
              <a href="/practice-management" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Telehealth</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Access complete patient histories during virtual visits with real-time interoperability data.
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
              Connect Your Practice Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Experience the power of true healthcare interoperability. Access patient data from 90% of U.S. hospitals in minutes.
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