import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import Link from 'next/link'
import { Users, TrendingUp, Shield, Database, CheckCircle, BarChart3, Heart, Target, ArrowRight, Clock, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Health Plan Management Platform - Simpl Healthcare',
  description: 'Comprehensive health plan management solutions for population health, member engagement, and quality measures. Drive better outcomes with integrated analytics and care coordination.',
  keywords: 'health plan management, population health platform, member engagement software, quality measures tracking, health plan analytics, care coordination platform, HEDIS reporting, value-based care management',
}

export default function HealthPlans() {
  const heroStats = [
    { number: '15%', label: 'Improvement in Quality Scores' },
    { number: '28%', label: 'Reduction in Care Gaps' },
    { number: '92%', label: 'Member Satisfaction Rate' }
  ]

  const planChallenges = [
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Population Health Management",
      description: "Track member health across large populations with real-time analytics and predictive insights.",
      benefits: ["Risk stratification", "Care gap identification", "Outcome prediction"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-simpl-green" />,
      title: "Quality Measure Reporting",
      description: "Automate HEDIS, Stars, and CMS quality measure tracking with real-time reporting.",
      benefits: ["Automated HEDIS reporting", "Stars rating optimization", "CMS compliance tracking"]
    },
    {
      icon: <Heart className="w-12 h-12 text-simpl-green" />,
      title: "Member Engagement",
      description: "Engage members with personalized health programs and preventive care reminders.",
      benefits: ["Personalized outreach", "Care reminders", "Health education"]
    }
  ]

  const platformFeatures = [
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "Unified Data Platform",
      description: "Integrate claims, clinical, and social determinants data for 360-degree member view."
    },
    {
      icon: <Target className="w-12 h-12 text-simpl-green" />,
      title: "Care Gap Analytics",
      description: "AI-powered identification of care gaps with provider-specific action plans."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-simpl-green" />,
      title: "Predictive Modeling",
      description: "Machine learning models predict member risk and intervention opportunities."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "Provider Network Optimization",
      description: "Analyze provider performance and optimize network for quality and cost."
    },
    {
      icon: <Clock className="w-12 h-12 text-simpl-green" />,
      title: "Real-Time Reporting",
      description: "Live dashboards for quality measures, utilization, and financial performance."
    },
    {
      icon: <Zap className="w-12 h-12 text-simpl-green" />,
      title: "Workflow Automation",
      description: "Automate care coordination, prior authorization, and member outreach processes."
    }
  ]

  const qualityMetrics = [
    { value: "4.5", label: "Star Rating Improvement", description: "Average increase in CMS Star Ratings" },
    { value: "87%", label: "HEDIS Compliance", description: "Measures meeting quality thresholds" },
    { value: "23%", label: "Cost Reduction", description: "In avoidable emergency department visits" },
    { value: "156%", label: "ROI", description: "Return on investment in first year" }
  ]

  return (
    <PageTemplate
      title="Health Plans"
      subtitle="🏥 Complete Population Health Platform"
      description="Comprehensive health plan management solutions for population health, member engagement, and quality measures. Drive better outcomes with integrated analytics, care coordination, and automated reporting that transforms health plan operations."
      heroImage="/health-plans-dashboard.png"
      heroImageAlt="Health Plans Management Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Key Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Solve Your Biggest Health Plan Challenges
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              From population health management to quality reporting, our platform addresses the core challenges facing health plans today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {planChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <div className="mb-6">{challenge.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">{challenge.title}</h3>
                <p className="text-lg text-simpl-dark-grey font-manrope mb-6 leading-relaxed">
                  {challenge.description}
                </p>
                <div className="space-y-2">
                  {challenge.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-simpl-green flex-shrink-0" />
                      <span className="text-sm text-simpl-dark-grey">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Comprehensive Platform Features
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Everything you need to manage population health, improve quality outcomes, and optimize operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">{feature.title}</h3>
                <p className="text-simpl-dark-grey font-manrope leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Quality & Performance Outcomes
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Measurable improvements in quality scores, member satisfaction, and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-simpl-green/5 to-simpl-blue/5 rounded-2xl p-8 border border-simpl-green/10">
                <div className="text-4xl font-bold text-simpl-green mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-simpl-black mb-2">{metric.label}</div>
                <div className="text-sm text-simpl-dark-grey">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-simpl-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-simpl-black mb-6 text-center font-manrope">
              Why Health Plans Choose Simpl
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Better Quality Scores</h4>
                <p className="text-simpl-dark-grey text-sm">Improve HEDIS measures and CMS Star Ratings with targeted interventions.</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Enhanced Member Experience</h4>
                <p className="text-simpl-dark-grey text-sm">Personalized care programs that improve satisfaction and outcomes.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Operational Efficiency</h4>
                <p className="text-simpl-dark-grey text-sm">Automate workflows and reduce administrative overhead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Workflow */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
                Seamless Integration & Workflow
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Connect with your existing systems and streamline operations with automated workflows designed for health plan efficiency.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Claims Data Integration</h3>
                    <p className="text-lg text-simpl-dark-grey">Connect with major clearinghouses and claims processing systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Provider Network APIs</h3>
                    <p className="text-lg text-simpl-dark-grey">Real-time connectivity with provider EHRs and practice management systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Quality Reporting Automation</h3>
                    <p className="text-lg text-simpl-dark-grey">Automated HEDIS, Stars, and regulatory reporting with audit trails.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/health-plan-integration.png"
                  alt="Health Plan Integration Architecture"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Integrations</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">99.8%</div>
                <div className="text-sm">Data Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Transform Your Health Plan Operations
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join leading health plans that have improved quality scores, enhanced member satisfaction, and optimized operations with Simpl Healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="bg-white hover:bg-gray-100 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/medicare-advantage"
                className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-block"
              >
                Explore Medicare Advantage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 