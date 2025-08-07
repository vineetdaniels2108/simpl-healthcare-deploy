import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Home, Users, Shield, Activity, Brain, Zap, CheckCircle, Heart, FileText, Smartphone, Database, AlertTriangle, Clock, Bell, TrendingUp, DollarSign, Calendar, UserCheck, MapPin, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Assisted Living Software - EHR & Management Platform | Simpl Healthcare',
  description: 'Comprehensive assisted living management platform with occupancy analytics, eMAR system, staff efficiency tools, and family engagement portals. Boost occupancy rates and reduce compliance risks.',
  keywords: 'assisted living software, senior living management platform, assisted living EHR, eMAR system for assisted living, resident care management software, occupancy analytics for senior living, medication management software, family engagement portal, compliance reporting assisted living, staff scheduling senior living, AI documentation for caregivers, census management tools, HIPAA-compliant senior living software, assisted living KPIs, predictive analytics senior housing, reduce staff turnover assisted living, improve resident satisfaction scores',
}

export default function AssistedLiving() {
  const heroStats = [
    { number: '95%', label: 'Occupancy Rate' },
    { number: '45%', label: 'Faster Move-ins' },
    { number: '60%', label: 'Reduced Staff Turnover' }
  ]

  const operatorPriorities = [
    {
      icon: <TrendingUp className="w-12 h-12 text-simpl-green" />,
      title: "Occupancy & Revenue Growth",
      subtitle: "Real-Time Census Tracking",
      description: "Track occupancy in real-time, forecast move-ins/outs, and surface marketing insights to shorten lead-to-move-in cycles. Occupancy rate optimization drives your bottom line."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "Regulatory Compliance Made Easy",
      subtitle: "Automatic State-Specific Assessments",
      description: "Auto-generated survey reports, built-in eMAR checks, and state-specific compliance tracking that slash medication-error risk and keep surveyors satisfied."
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Staff Efficiency & Retention",
      subtitle: "Cut Documentation Time by 60%",
      description: "Tools that reduce charting time from minutes to seconds, simplify scheduling, and flag overtime before it impacts your labor budget. Tame turnover costs effectively."
    },
    {
      icon: <Heart className="w-12 h-12 text-simpl-green" />,
      title: "Resident & Family Experience",
      subtitle: "Boost Satisfaction & Referrals",
      description: "Mobile care plan updates, family portals, and engagement features that improve satisfaction scores and increase referral volume from happy families."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-simpl-green" />,
      title: "Total Cost of Ownership",
      subtitle: "Clear ROI & Rapid Implementation",
      description: "Transparent pricing, rapid implementation, 24/7 support, and proven ROI metrics you can confidently present to ownership groups."
    },
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "Interoperability & Future-proofing",
      subtitle: "Open APIs & AI Analytics",
      description: "Seamless integration with pharmacy, EMR, and payroll systems. AI-driven analytics and SOC 2/HIPAA security built in for long-term value."
    }
  ]

  const keyMetrics = [
    {
      category: "Census Metrics",
      metrics: [
        "Occupancy Rate Optimization",
        "Net Move-In Ratio Tracking",
        "Average Length of Stay Analytics"
      ]
    },
    {
      category: "Care Quality & Risk",
      metrics: [
        "Medication-Error Rate (per 1,000 med passes)",
        "Falls per 1,000 Resident Days",
        "Care-Plan Completion Percentage"
      ]
    },
    {
      category: "Staff & Financial Health",
      metrics: [
        "Staff-to-Resident Ratio Optimization",
        "Annual Staff Turnover Reduction",
        "Labor Cost per Resident Day"
      ]
    },
    {
      category: "Regulatory & Compliance",
      metrics: [
        "Survey Deficiencies Reduction",
        "Automated State Report Generation",
        "eMAR Accuracy Percentage"
      ]
    }
  ]

  const mustHaveCapabilities = [
    {
      icon: <Brain className="w-12 h-12 text-simpl-green" />,
      title: "AI-Assisted Charting & Voice-to-Text",
      description: "Shrink nurse charting from minutes to seconds with intelligent documentation tools."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-simpl-green" />,
      title: "Predictive Occupancy Analytics",
      description: "Forecast upcoming vacancies so marketers can fill beds before they're empty."
    },
    {
      icon: <FileText className="w-12 h-12 text-simpl-green" />,
      title: "Integrated eMAR & Pharmacy Feeds",
      description: "Real-time drug interaction alerts and automated refill synchronization."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-simpl-green" />,
      title: "Mobile-First ADL Tracking",
      description: "Tap-based care tasks with offline mode for connectivity-challenged areas."
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Family Engagement Portals",
      description: "Live activity feeds, video calls, and digital consent forms for families."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-simpl-green" />,
      title: "One-Click State Reports",
      description: "Pre-formatted exports that match each state's survey templates exactly."
    }
  ]

  return (
    <PageTemplate
      title="Assisted Living Software"
      subtitle="🏡 Complete Management Platform"
      description="Boost occupancy rates, reduce staff turnover, and ensure compliance with our comprehensive assisted living management platform. Real-time census tracking, eMAR integration, and family engagement tools that drive results."
      heroImage="/assisted-living-hero.png"
      heroImageAlt="Assisted Living Management Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Why Operators Choose Simpl */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Why Operators Sweat the Details
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope leading-relaxed">
              Running an assisted living community is a razor-thin-margin business. Every missed med, empty bed, or compliance ding shows up on both the care dashboard and the P&L. When decision-makers shop for software, they zero in on tools that tighten operations, raise resident outcomes, and keep surveyors off their backs.
            </p>
          </div>
        </div>
      </section>

      {/* What Operators Really Care About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              What Operators Really Care About
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Six critical areas that drive assisted living success - and where Simpl delivers measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operatorPriorities.map((priority, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <div className="mb-6">{priority.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-2 font-manrope">{priority.title}</h3>
                <h4 className="text-lg font-semibold text-simpl-green mb-4">{priority.subtitle}</h4>
                <p className="text-lg text-simpl-dark-grey font-manrope leading-relaxed">
                  {priority.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics That Seal the Deal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                Metrics That Seal the Deal
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Operators build their business case around these KPIs. If your product can move these needles, you'll get their attention.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyMetrics.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-white">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="text-white/90 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Must-Have Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Must-Have Capabilities in 2025 (and Beyond)
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              The essential features that forward-thinking assisted living operators demand from their technology partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mustHaveCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <div className="mb-6">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">{capability.title}</h3>
                <p className="text-lg text-simpl-dark-grey font-manrope leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
                The ROI Story Operators Can Pitch
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Present these hard numbers to ownership groups and watch budgets get approved.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">5-10% Occupancy Increase</h3>
                    <p className="text-lg text-simpl-dark-grey">Predictive analytics and faster move-in processes typically boost occupancy by 5-10 percentage points.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">40-60% Staff Turnover Reduction</h3>
                    <p className="text-lg text-simpl-dark-grey">Streamlined workflows and reduced documentation burden significantly improve staff satisfaction and retention.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">75% Fewer Medication Errors</h3>
                    <p className="text-lg text-simpl-dark-grey">Integrated eMAR systems with drug interaction alerts dramatically reduce medication-related incidents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">3-5 Hours Daily Time Savings</h3>
                    <p className="text-lg text-simpl-dark-grey">AI-assisted documentation and automated reporting free up staff for direct resident care.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/assisted-living-roi.png"
                  alt="Assisted Living ROI Calculator"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results from Real Communities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Real Results from Real Communities
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Case study numbers that prove ROI and demonstrate measurable impact on operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-simpl-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-4xl font-bold text-simpl-green mb-2">95%</div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Average Occupancy Rate</h3>
              <p className="text-lg text-simpl-dark-grey">
                Communities using Simpl maintain occupancy rates 8-12% higher than industry average.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-simpl-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-4xl font-bold text-simpl-green mb-2">18%</div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Annual Staff Turnover</h3>
              <p className="text-lg text-simpl-dark-grey">
                Significantly below the industry average of 75-100% annual turnover in assisted living.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-simpl-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-4xl font-bold text-simpl-green mb-2">0.8</div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Deficiencies per Survey</h3>
              <p className="text-lg text-simpl-dark-grey">
                Well below the state average of 3-5 deficiencies per regulatory survey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Engagement & Marketing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                Family Engagement That Drives Referrals
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Happy families become your best marketing team. Simpl's family portal drives satisfaction and referrals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Real-Time Care Updates</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Families receive instant notifications about care activities, medication changes, and health updates. Transparency builds trust and satisfaction.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Net Promoter Score: 8.7/10</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Communities using Simpl's family portal report NPS scores 40% higher than industry benchmarks, driving referral growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Implementation That Actually Works
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              No 18-month implementations or hidden costs. Get up and running in weeks, not years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <Calendar className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">30-Day Go-Live</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Rapid implementation with dedicated project management and 24/7 support during transition.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <UserCheck className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Staff Training Included</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Comprehensive training programs that ensure 100% staff adoption and confidence.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <DollarSign className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Transparent Pricing</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                No hidden fees, no per-user charges. Flat monthly rate that scales with your community size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Ready to Move the Needle on These KPIs?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join assisted living operators who've improved occupancy, reduced turnover, and passed every survey with Simpl Healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-demo"
                className="bg-white hover:bg-gray-100 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
              >
                See ROI Calculator
              </a>
              <a
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-block"
              >
                Request Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 