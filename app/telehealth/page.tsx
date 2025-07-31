import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Video, Monitor, Shield, Smartphone, Calendar, FileText, Users, Zap, CheckCircle, Clock, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Telehealth Solutions - Simpl Healthcare',
  description: 'Conduct seamless virtual visits with fully integrated EHR and AI features. HIPAA-compliant video sessions with scheduling, charting, and billing integration.',
}

export default function Telehealth() {
  const heroStats = [
    { number: '100%', label: 'HIPAA Compliant' },
    { number: '50%', label: 'More Appointments' },
    { number: '98%', label: 'Patient Satisfaction' }
  ]

  const features = [
    {
      icon: <Video className="w-12 h-12 text-simpl-green" />,
      title: "HD Video Calls",
      subtitle: "Crystal Clear Communication",
      description: "High-definition video and audio quality ensures clear communication between providers and patients, creating an experience that rivals in-person visits."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "HIPAA Compliance",
      subtitle: "Secure & Private",
      description: "End-to-end encryption and full HIPAA compliance ensure that all patient communications and data remain secure and confidential."
    },
    {
      icon: <Calendar className="w-12 h-12 text-simpl-green" />,
      title: "Integrated Scheduling",
      subtitle: "Seamless Booking",
      description: "Patients can book telehealth appointments directly through your patient portal, with automatic calendar integration and reminder notifications."
    },
    {
      icon: <FileText className="w-12 h-12 text-simpl-green" />,
      title: "EHR Integration",
      subtitle: "Complete Documentation",
      description: "Document visits directly in the EHR during the call. All patient data, notes, and prescriptions are automatically synchronized and stored."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-simpl-green" />,
      title: "Multi-Device Support",
      subtitle: "Any Device, Anywhere",
      description: "Accessible from desktop, tablet, or mobile devices. No downloads required - join calls directly from any web browser."
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Group Sessions",
      subtitle: "Webinars & Classes",
      description: "Host group sessions, webinars, and educational classes with multiple participants. Perfect for patient education and group therapy."
    }
  ]

  return (
    <PageTemplate
      title="Telehealth"
      subtitle="📱 Virtual Care Platform"
      description="Conduct seamless virtual visits with fully integrated EHR and AI features. HIPAA-compliant video sessions with complete scheduling, charting, and billing integration."
      heroImage="/telehealth-platform.png"
      heroImageAlt="Telehealth Platform Interface"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Platform Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Complete Virtual Care Solution
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope leading-relaxed">
              Our telehealth platform seamlessly integrates with your EHR, practice management, and patient engagement tools. 
              Deliver high-quality virtual care without compromising your workflow or patient experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Monitor className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Browser-Based Platform</h3>
                  <p className="text-lg text-simpl-dark-grey">No downloads or installations required. Access from any device with a web browser.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Instant Integration</h3>
                  <p className="text-lg text-simpl-dark-grey">Fully integrated with your EHR and practice management system for seamless workflow.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Patient-Centered</h3>
                  <p className="text-lg text-simpl-dark-grey">Designed for exceptional patient experience with intuitive interfaces and reliable connections.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/telehealth-interface.png"
                  alt="Telehealth Video Interface"
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
              Comprehensive Telehealth Features
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Everything you need for effective virtual care delivery, from individual consultations to group sessions and webinars.
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

      {/* Workflow Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                Seamless Workflow Integration
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Telehealth that works with your existing practice workflow, not against it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Book Online</h3>
                <p className="text-white/90">Patients schedule telehealth visits through your patient portal.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Connect Instantly</h3>
                <p className="text-white/90">One-click join from any device with automatic audio/video testing.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Document Live</h3>
                <p className="text-white/90">Chart directly in your EHR during the video call.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Auto Billing</h3>
                <p className="text-white/90">Telehealth visits automatically generate appropriate billing codes.</p>
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
                Transform Your Practice with Virtual Care
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Expand your reach, improve patient access, and increase practice efficiency with our 
                comprehensive telehealth solution.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Expand Patient Access</h3>
                    <p className="text-lg text-simpl-dark-grey">Serve patients regardless of location, mobility, or transportation barriers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Increase Appointment Capacity</h3>
                    <p className="text-lg text-simpl-dark-grey">See more patients per day by eliminating travel time between visits.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Reduce No-Shows</h3>
                    <p className="text-lg text-simpl-dark-grey">Virtual appointments have significantly lower no-show rates than in-person visits.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Improve Patient Satisfaction</h3>
                    <p className="text-lg text-simpl-dark-grey">Convenient, flexible care options that fit patients' busy schedules.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/telehealth-benefits.png"
                  alt="Telehealth Benefits"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Fully Integrated with Simpl Platform
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Cloud EHR</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Access complete patient records during video calls. Document visits directly in the EHR with AI-powered note taking.
              </p>
              <a href="/cloud-ehr" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Practice Management</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Seamless scheduling, billing, and claims processing for telehealth visits with automated coding and documentation.
              </p>
              <a href="/practice-management" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Patient Engagement</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Patient portal integration allows easy booking, pre-visit forms, and post-visit follow-up communications.
              </p>
              <a href="/patient-engagement" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Ready to Launch Virtual Care?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Start delivering exceptional virtual care experiences that patients love and providers trust.
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