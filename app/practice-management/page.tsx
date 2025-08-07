import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Calendar, CreditCard, BarChart3, Workflow, Users, Clock, CheckCircle, Zap, FileText, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Practice Management Solutions - Simpl Healthcare',
  description: 'Streamline your practice operations with integrated scheduling, billing, reporting, and workflow automation. All-in-one practice management from one centralized portal.',
}

export default function PracticeManagement() {
  const heroStats = [
    { number: '40%', label: 'Admin Time Saved' },
    { number: '25%', label: 'More Appointments' },
    { number: '98%', label: 'Billing Accuracy' }
  ]

  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-simpl-green" />,
      title: "Smart Scheduling",
      subtitle: "Intelligent Appointment Management",
      description: "Leverage the industry's strongest foundation for booking sessions and automating follow-ups as you scale your practice. Advanced scheduling with conflict detection and automated reminders."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-simpl-green" />,
      title: "Integrated Billing",
      subtitle: "Streamlined Revenue Cycle",
      description: "Billing is complex and always evolving. Simpl ensures that all methods of billing are supported and up to standard. Create and submit insurance claims, track statuses, and collect patient responsibilities."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-simpl-green" />,
      title: "Advanced Reporting",
      subtitle: "Data-Driven Insights",
      description: "View patient population data, business forecasting, and usage statistics to help you dial in your operations. Make informed decisions with comprehensive analytics."
    },
    {
      icon: <FileText className="w-12 h-12 text-simpl-green" />,
      title: "Insurance Management",
      subtitle: "Claims & Verification",
      description: "Create and submit insurance claims, track statuses, and collect patient owed responsibilities, all in one place. Verify eligibility and benefits in real-time."
    },
    {
      icon: <Workflow className="w-12 h-12 text-simpl-green" />,
      title: "Workflow Automation",
      subtitle: "Focus on Patient Care",
      description: "Automate repetitive tasks and streamline your practice operations. Focus your time and effort on delivering quality care while we handle the administrative work."
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Multi-Provider Support",
      subtitle: "Team Collaboration",
      description: "Share resources, collaborate across patients, and set custom permissions around core business needs. Streamline operations for your entire practice team."
    }
  ]

  const workflows = [
    {
      title: "Patient Registration",
      description: "Automated intake forms and onboarding workflows that collect patient information and flow directly into your EHR."
    },
    {
      title: "Appointment Reminders",
      description: "Reduce no-shows with automated SMS, email, and phone call reminders sent at customizable intervals."
    },
    {
      title: "Claims Processing",
      description: "Automated claim generation, submission, and follow-up to maximize revenue and reduce billing overhead."
    },
    {
      title: "Follow-up Care",
      description: "Automated care plan assignments and patient communications to improve outcomes and engagement."
    }
  ]

  return (
    <PageTemplate
      title="Practice Management"
      subtitle="🏥 All-in-One Operations"
      description="Operate your practice efficiently from one centralized portal. Easily manage appointments, automate day-to-day functions, and focus on what matters most - patient care."
      heroImage="/practice-management-hero.png"
      heroImageAlt="Practice Management Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Unified Back Office Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              A Single, Integrated Back Office
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope leading-relaxed">
              Streamline your administrative work with our comprehensive practice management solution. 
              From scheduling to billing, everything you need to run your practice efficiently is in one place.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Settings className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Centralized Operations</h3>
                  <p className="text-lg text-simpl-dark-grey">Manage all aspects of your practice from a single, unified dashboard. No more switching between systems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Automated Workflows</h3>
                  <p className="text-lg text-simpl-dark-grey">Reduce manual tasks with intelligent automation that learns your practice patterns and preferences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <BarChart3 className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Real-time Analytics</h3>
                  <p className="text-lg text-simpl-dark-grey">Get instant insights into your practice performance with comprehensive reporting and analytics.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/practice-management-digital.png"
                  alt="Practice Management Dashboard"
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
              Complete Practice Management Features
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Everything you need to manage your practice efficiently, from patient scheduling to revenue optimization.
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

      {/* Workflow Automation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                Intelligent Workflow Automation
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Automate repetitive tasks and streamline your operations so you can focus on delivering exceptional patient care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">{workflow.title}</h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {workflow.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
                Advanced Scheduling System
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Our scheduling system is built for the complexities of modern healthcare practices. 
                Handle multiple providers, locations, and appointment types with ease.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Smart Conflict Detection</h3>
                    <p className="text-lg text-simpl-dark-grey">Automatically detect and prevent scheduling conflicts across providers and resources.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Online Booking</h3>
                    <p className="text-lg text-simpl-dark-grey">Allow patients to book appointments online with real-time availability and automated confirmations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Automated Reminders</h3>
                    <p className="text-lg text-simpl-dark-grey">Reduce no-shows with SMS, email, and phone call reminders sent automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/scheduling-interface.png"
                  alt="Advanced Scheduling Interface"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Management */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Comprehensive Financial Management
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Optimize your revenue cycle with integrated billing, claims management, and financial reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Revenue Optimization</h3>
              <p className="text-lg text-simpl-dark-grey">
                Maximize collections with automated billing processes, claims tracking, and denial management.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Financial Reporting</h3>
              <p className="text-lg text-simpl-dark-grey">
                Get detailed insights into your practice's financial performance with comprehensive reporting tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Time Savings</h3>
              <p className="text-lg text-simpl-dark-grey">
                Reduce administrative overhead by 40% with automated workflows and intelligent processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
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
                Fully integrated with our Cloud EHR for seamless patient data flow and documentation.
              </p>
              <a href="/cloud-ehr" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Patient Engagement</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Connect with patients through secure messaging, online portals, and automated communications.
              </p>
              <a href="/patient-engagement" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Telehealth</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Integrate virtual visits seamlessly with your practice management workflows.
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
              Ready to Streamline Your Practice?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              See how our practice management solution can reduce administrative burden and improve your bottom line.
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