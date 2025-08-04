'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState('core')

  const featureCategories = {
    core: {
      title: 'Core EHR Features',
      description: 'Essential tools every practice needs',
      features: [
        { name: 'Complete Medical Records', description: 'Comprehensive patient documentation and history tracking' },
        { name: 'History & Physical Notes', description: 'Structured clinical documentation templates' },
        { name: 'Summarized Patient History', description: 'AI-powered patient summary generation' },
        { name: 'Scheduling & Calendar', description: 'Advanced appointment management system' },
        { name: 'Notes Templates', description: 'Unlimited customizable clinical templates' },
        { name: 'Charting', description: 'Intuitive clinical charting and documentation' },
        { name: 'Patient Portal Access', description: 'Secure patient communication platform' },
        { name: 'Insurance Verification', description: 'Automated eligibility and benefits verification' }
      ]
    },
    ai: {
      title: 'AI-Powered Tools',
      description: 'Cutting-edge artificial intelligence features',
      features: [
        { name: 'AI Virtual Vitals', description: 'Revolutionary contactless vital sign monitoring' },
        { name: 'AI Scribe', description: 'Automated clinical note generation from conversations' },
        { name: 'AI Billing Codes', description: 'Intelligent ICD-10 and CPT code suggestions' },
        { name: 'Predictive Analytics', description: 'AI-driven patient outcome predictions' },
        { name: 'Clinical Decision Support', description: 'Evidence-based treatment recommendations' },
        { name: 'Voice Recognition', description: 'Hands-free documentation and navigation' },
        { name: 'Smart Alerts', description: 'Proactive patient safety and care reminders' },
        { name: 'Document Analysis', description: 'AI-powered extraction from external documents' }
      ]
    },
    clinical: {
      title: 'Clinical Operations',
      description: 'Advanced clinical workflow management',
      features: [
        { name: 'Rx Orders', description: 'Electronic prescribing with drug interaction checking' },
        { name: 'Lab Orders', description: 'Integrated laboratory ordering and result management' },
        { name: 'Virtual Visits', description: 'Built-in telehealth and video consultations' },
        { name: 'Care Coordination', description: 'Multi-provider collaboration tools' },
        { name: 'Quality Measures', description: 'Automated quality reporting and MIPS tracking' },
        { name: 'Population Health', description: 'Patient cohort management and analytics' },
        { name: 'Chronic Care Management', description: 'Specialized tools for chronic condition monitoring' },
        { name: 'Immunization Tracking', description: 'Vaccine management and registry reporting' }
      ]
    },
    business: {
      title: 'Practice Management',
      description: 'Business operations and revenue optimization',
      features: [
        { name: 'Revenue Cycle Management', description: 'End-to-end billing and collections workflow' },
        { name: 'Appointment Reminders', description: 'Automated SMS, email, and phone reminders' },
        { name: 'Reporting & Analytics', description: 'Comprehensive practice performance insights' },
        { name: 'Multi-Location Support', description: 'Centralized management for multiple offices' },
        { name: 'Staff Management', description: 'User roles, permissions, and workflow assignment' },
        { name: 'Inventory Management', description: 'Medical supply and equipment tracking' },
        { name: 'Financial Reporting', description: 'Real-time revenue and expense analytics' },
        { name: 'Compliance Monitoring', description: 'HIPAA and regulatory compliance tracking' }
      ]
    }
  }

  const categories = Object.keys(featureCategories)
  const activeCategoryData = featureCategories[activeCategory as keyof typeof featureCategories]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-simpl-grey/30 to-simpl-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-simpl-green/10 border border-simpl-green/20 rounded-full mb-6">
            <span className="text-simpl-green font-semibold text-sm">✨ Complete Toolkit</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-simpl-black mb-6">
            Built-in tools for efficiency, simplicity and flexibility.
          </h2>
          <p className="text-lg text-simpl-dark-grey max-w-3xl mx-auto mb-12">
            Everything you need to run a successful practice, all integrated into one powerful platform. From basic EHR functions to advanced AI capabilities.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-simpl-green text-white shadow-lg scale-105'
                    : 'bg-white text-simpl-black hover:bg-simpl-green/10 border border-simpl-green/20'
                }`}
              >
                {featureCategories[category as keyof typeof featureCategories].title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Content */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-simpl-black mb-4">
              {activeCategoryData.title}
            </h3>
            <p className="text-lg text-simpl-dark-grey max-w-2xl mx-auto">
              {activeCategoryData.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeCategoryData.features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 border border-simpl-green/10 hover:border-simpl-green/30 hover:bg-simpl-green/5 hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-simpl-green/10 group-hover:bg-simpl-green/20 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Image
                      src="/Simpl-Check-mark-2-1.png"
                      alt="Check mark"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-simpl-black font-bold text-lg mb-2 group-hover:text-simpl-green transition-colors duration-300">
                      {feature.name}
                    </h4>
                    <p className="text-simpl-dark-grey text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Features Overview */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-simpl-green/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-simpl-black mb-4">
              Complete Feature Overview
            </h3>
            <p className="text-lg text-simpl-dark-grey">
              See all the powerful tools included in every Simpl Healthcare subscription
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/medical-book.svg"
                  alt="Core EHR Features"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h4 className="font-bold text-simpl-black mb-2">Core EHR Features</h4>
              <p className="text-sm text-simpl-dark-grey">Essential tools every practice needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/ai-medical-summaries.svg"
                  alt="AI-Powered Tools"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h4 className="font-bold text-simpl-black mb-2">AI-Powered Tools</h4>
              <p className="text-sm text-simpl-dark-grey">Cutting-edge artificial intelligence features</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/health-care.svg"
                  alt="Clinical Operations"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h4 className="font-bold text-simpl-black mb-2">Clinical Operations</h4>
              <p className="text-sm text-simpl-dark-grey">Advanced clinical workflow management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/briefcase.svg"
                  alt="Practice Management"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h4 className="font-bold text-simpl-black mb-2">Practice Management</h4>
              <p className="text-sm text-simpl-dark-grey">Business operations and revenue optimization</p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-simpl-black mb-6">
              Why Choose Our Integrated Approach?
            </h3>
            <div className="space-y-4">
              {[
                'Single platform eliminates data silos',
                'Seamless workflow between all tools',
                'Reduced training and maintenance costs',
                'Consistent user experience across features',
                'Real-time data synchronization',
                'Unified reporting and analytics'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-simpl-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/9004773_tick_check_mark_accept_icon.png"
                      alt="Check mark"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-simpl-black font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-green/5 rounded-2xl p-8">
              {/* Main Feature Showcase */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-simpl-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/connection.svg"
                    alt="Integrated Platform"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h4 className="text-xl font-bold text-simpl-green mb-2">All-in-One Platform</h4>
                <p className="text-simpl-black font-medium">Complete healthcare management solution</p>
              </div>
              
              {/* Feature Categories Grid */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <Image
                    src="/clipboard-2.svg"
                    alt="EHR"
                    width={24}
                    height={24}
                    className="w-6 h-6 mx-auto mb-2"
                  />
                  <div className="text-simpl-dark-grey font-medium">Core EHR</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <Image
                    src="/ai-facial-scan.svg"
                    alt="AI Tools"
                    width={24}
                    height={24}
                    className="w-6 h-6 mx-auto mb-2"
                  />
                  <div className="text-simpl-dark-grey font-medium">AI-Powered</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <Image
                    src="/give-pill-2.svg"
                    alt="Clinical"
                    width={24}
                    height={24}
                    className="w-6 h-6 mx-auto mb-2"
                  />
                  <div className="text-simpl-dark-grey font-medium">Clinical Ops</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-center">
                  <Image
                    src="/chart-pie.svg"
                    alt="Management"
                    width={24}
                    height={24}
                    className="w-6 h-6 mx-auto mb-2"
                  />
                  <div className="text-simpl-dark-grey font-medium">Practice Mgmt</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/simpl-features"
              className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-lg font-semibold text-lg btn-hover shadow-lg shadow-simpl-green/25"
            >
              Explore All Features
            </Link>
            <Link
              href="/book-demo"
              className="border-2 border-simpl-green text-simpl-green hover:bg-simpl-green hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              See Features in Action
            </Link>
          </div>

          <p className="text-simpl-dark-grey text-lg">
            Ready to see how all these features work together? Schedule a personalized demo today.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 