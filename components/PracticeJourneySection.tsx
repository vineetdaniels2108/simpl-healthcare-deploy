'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PracticeJourneySection = () => {
  const [activeTab, setActiveTab] = useState('launch')

  const tabs = [
    {
      id: 'launch',
      title: 'Launch Your Practice',
      subtitle: 'Start strong with essential tools',
      icon: '/simpl-icon1.png',
      description: 'With Simpl, you have the essential tools to establish your practice quickly. Our easy-to-use platform takes minutes to set up, not months. Take advantage of the EHR capabilities from scheduling to patient charting.',
      detailedDescription: 'Setting up a new practice has never been easier. Simpl provides everything you need to get started quickly and efficiently, with minimal setup time and maximum functionality.',
      features: [
        'Patient & Staff Set Up',
        'Multi-Location Support',
        'Patient Management',
        'Scheduling & Calendar',
        'Appointment Reminders',
        'Patient Health Summaries',
        'Charting with automated Medical Codes',
        'Unlimited Notes Templates',
        'Basic Reporting & Analytics',
        'HIPAA Compliance Setup',
        'Insurance Verification',
        'Patient Portal Access'
      ],
      benefits: [
        'Quick 15-minute setup process',
        'No extensive training required',
        'Built-in compliance frameworks',
        'Immediate patient onboarding'
      ],
      image: '/Homepage_Grow_1906046152.jpg',
      stats: {
        setupTime: '15 min',
        trainingRequired: 'Minimal',
        compliance: '100%'
      }
    },
    {
      id: 'grow',
      title: 'Grow Your Practice',
      subtitle: 'Scale operations and attract patients',
      icon: '/simpl-icon2.png',
      description: 'Set your practice up for long-term success with Simpl\'s intuitive provider and patient-centric platform. Integrated functionalities for EHR, AI automation and Telehealth create opportunities to attract and retain patients.',
      detailedDescription: 'As your practice expands, Simpl grows with you. Our advanced features help you optimize workflows, improve patient satisfaction, and increase operational efficiency.',
      features: [
        'Advanced Patient Management',
        'Multi-Provider Scheduling',
        'Enhanced Appointment Reminders',
        'Comprehensive Health Summaries',
        'Advanced Charting & Templates',
        'Hands-Free Note Taking (AI)',
        'Virtual Vitals Monitoring',
        'Integrated Telehealth Platform',
        'Patient Communication Portal',
        'Advanced Reporting & Analytics',
        'Revenue Cycle Management',
        'Quality Measure Tracking',
        'Care Coordination Tools',
        'Patient Engagement Features'
      ],
      benefits: [
        'Increase patient capacity by 40%',
        'Reduce administrative overhead',
        'Improve patient satisfaction scores',
        'Streamline provider workflows'
      ],
      image: '/image6eceqc.jpg',
      stats: {
        capacityIncrease: '40%',
        timesSaved: '18 hrs/week',
        patientSatisfaction: '95%'
      }
    },
    {
      id: 'scale',
      title: 'Scale Your Practice',
      subtitle: 'Enterprise-level capabilities',
      icon: '/simpl-icon3.png',
      description: 'Count on Simpl\'s versatile platform to seamlessly combine EHR, interoperability and Telehealth capabilities to help drive expansion at scale. Increase operational efficiency and elevate the patient experience without fragmented systems.',
      detailedDescription: 'Transform your practice into a healthcare enterprise with our most advanced features. Leverage AI-driven automation, comprehensive interoperability, and enterprise-grade analytics.',
      features: [
        'Enterprise Patient Management',
        'Multi-Location Coordination',
        'Advanced AI Automation',
        'Predictive Analytics',
        'Population Health Management',
        'Full EHR Interoperability',
        'Advanced Telehealth Suite',
        'Patient Records Summarization',
        'Automated Rx and Lab Orders',
        'Clinical Decision Support',
        'Quality Reporting & MIPS',
        'Revenue Optimization',
        'Custom Workflow Automation',
        'API Integration Platform',
        'Advanced Security Controls',
        'Multi-Tenant Architecture'
      ],
      benefits: [
        'Support unlimited locations',
        'AI-powered clinical insights',
        'Seamless data exchange',
        'Enterprise-grade security'
      ],
      image: '/image17ccasxc.jpg',
      stats: {
        locations: 'Unlimited',
        integration: '90%',
        efficiency: '60%'
      }
    }
  ]

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0]

  return (
    <section className="py-20 bg-gradient-to-br from-simpl-green/5 via-simpl-grey to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-simpl-green/10 border border-simpl-green/20 rounded-full mb-6">
            <span className="text-simpl-green font-semibold text-sm">🚀 Practice Growth Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-simpl-black mb-6">
            <span className="text-simpl-green">Simpl</span> empowers success at every phase of your business journey.
          </h2>
          <p className="text-lg text-simpl-dark-grey max-w-3xl mx-auto">
            From startup to enterprise, our platform scales with your ambitions, providing the right tools at every stage of growth.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-8 rounded-2xl transition-all duration-300 border-2 flex-1 max-w-sm ${
                activeTab === tab.id
                  ? 'bg-simpl-green text-white shadow-2xl scale-105 border-simpl-green transform'
                  : 'bg-white/80 hover:bg-simpl-green/10 hover:shadow-lg border-simpl-green/20 hover:border-simpl-green/40'
              }`}
            >
              <Image
                src={tab.icon}
                alt={tab.title}
                width={80}
                height={80}
                className="w-20 h-20 mb-6"
              />
              <h3 className={`font-bold text-xl mb-2 ${activeTab === tab.id ? 'text-white' : 'text-simpl-black'}`}>
                {tab.title}
              </h3>
              <p className={`text-sm text-center ${activeTab === tab.id ? 'text-white/90' : 'text-simpl-dark-grey'}`}>
                {tab.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-simpl-green/20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-simpl-black mb-4">
                  {activeTabData.title}
                </h3>
                <p className="text-xl text-simpl-green font-semibold mb-6">
                  {activeTabData.subtitle}
                </p>
                <p className="text-simpl-dark-grey mb-6 leading-relaxed text-lg">
                  {activeTabData.description}
                </p>
                <p className="text-simpl-black leading-relaxed">
                  {activeTabData.detailedDescription}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-simpl-black mb-4">Key Benefits</h4>
                <div className="grid gap-3">
                  {activeTabData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-simpl-green/5 border border-simpl-green/10">
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(activeTabData.stats).map(([key, value], index) => (
                  <div key={index} className="text-center p-4 bg-simpl-green/10 rounded-xl border border-simpl-green/20">
                    <div className="text-2xl font-bold text-simpl-green mb-1">{value}</div>
                    <div className="text-xs text-simpl-dark-grey capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-demo"
                  className="bg-simpl-green hover:bg-simpl-dark-green text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/simpl-features"
                  className="border-2 border-simpl-green text-simpl-green hover:bg-simpl-green hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Features & Image */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-simpl-green/5 to-transparent p-4 border border-simpl-green/20 shadow-lg">
                  <Image
                    src={activeTabData.image}
                    alt={activeTabData.title}
                    width={700}
                    height={500}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xl font-bold text-simpl-black mb-6">Complete Feature Set</h4>
                <div className="grid gap-3 max-h-96 overflow-y-auto pr-2">
                  {activeTabData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-simpl-green/5 transition-colors"
                    >
                      <div className="w-8 h-8 bg-simpl-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/9004773_tick_check_mark_accept_icon.png"
                          alt="Check mark"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          feature.includes('AI') ||
                          feature.includes('Virtual Vitals') ||
                          feature.includes('Telehealth') ||
                          feature.includes('Hands-Free') ||
                          feature.includes('Interoperability') ||
                          feature.includes('Automation')
                            ? 'text-simpl-green font-bold'
                            : 'text-simpl-dark-grey'
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-simpl-black mb-4">
            Ready to transform your practice?
          </h3>
          <p className="text-lg text-simpl-dark-grey mb-8 max-w-2xl mx-auto">
            See how Simpl can help you achieve your practice goals with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-lg font-semibold text-lg btn-hover shadow-lg shadow-simpl-green/25">
              Watch a Demo
            </button>
            <Link
              href="/contact"
              className="border-2 border-simpl-green text-simpl-green hover:bg-simpl-green hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticeJourneySection 