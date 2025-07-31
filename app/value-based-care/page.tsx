import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import Link from 'next/link'
import { TrendingUp, Target, Heart, BarChart3, CheckCircle, DollarSign, Users, Clock, Shield, Zap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Value-Based Care Platform - Simpl Healthcare',
  description: 'Comprehensive value-based care management platform. Improve quality outcomes, manage risk contracts, and optimize performance with integrated analytics and care coordination.',
  keywords: 'value-based care platform, ACO management software, MIPS reporting, quality measures tracking, risk-based contracts, population health analytics, care coordination platform, value-based payments',
}

export default function ValueBasedCare() {
  const heroStats = [
    { number: '23%', label: 'Improvement in Quality Scores' },
    { number: '18%', label: 'Reduction in Total Cost of Care' },
    { number: '156%', label: 'Average ROI on VBC Contracts' }
  ]

  const vbcChallenges = [
    {
      icon: <Target className="w-12 h-12 text-simpl-green" />,
      title: "Quality Measure Management",
      description: "Track and improve performance across multiple quality programs including MIPS, ACO, and custom payer contracts.",
      solutions: ["Automated quality reporting", "Performance gap analysis", "Intervention tracking"]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-simpl-green" />,
      title: "Financial Risk Management",
      description: "Monitor financial performance against risk-based contracts and identify cost-saving opportunities.",
      solutions: ["Risk contract analytics", "Cost trend analysis", "Shared savings calculations"]
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Care Coordination",
      description: "Coordinate care across providers and settings to improve outcomes and reduce unnecessary utilization.",
      solutions: ["Multi-provider workflows", "Care gap identification", "Patient engagement tools"]
    }
  ]

  const platformFeatures = [
    {
      icon: <BarChart3 className="w-12 h-12 text-simpl-green" />,
      title: "Quality Measure Analytics",
      description: "Real-time tracking of HEDIS, MIPS, CMS Star Ratings, and custom quality measures with automated reporting."
    },
    {
      icon: <Target className="w-12 h-12 text-simpl-green" />,
      title: "Risk Stratification",
      description: "Advanced algorithms identify high-risk patients and prioritize interventions for maximum impact."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-simpl-green" />,
      title: "Financial Performance Tracking",
      description: "Monitor shared savings, risk corridor performance, and total cost of care metrics in real-time."
    },
    {
      icon: <Heart className="w-12 h-12 text-simpl-green" />,
      title: "Care Management Workflows",
      description: "Streamlined workflows for care managers to coordinate services and track member progress."
    },
    {
      icon: <Clock className="w-12 h-12 text-simpl-green" />,
      title: "Provider Engagement Tools",
      description: "Engage providers with performance dashboards, quality improvement resources, and incentive tracking."
    },
    {
      icon: <Zap className="w-12 h-12 text-simpl-green" />,
      title: "Predictive Analytics",
      description: "Machine learning models predict future utilization, costs, and quality outcomes."
    }
  ]

  const performanceMetrics = [
    { value: "2.8%", label: "Total Cost of Care Reduction", description: "Average annual savings across VBC contracts" },
    { value: "42%", label: "Quality Measure Improvement", description: "Measures meeting benchmark thresholds" },
    { value: "$2.3M", label: "Shared Savings Earned", description: "Average per 10,000 attributed lives" },
    { value: "89%", label: "Provider Satisfaction", description: "With VBC performance tools" }
  ]

  const contractTypes = [
    {
      title: "ACO Contracts",
      description: "Comprehensive support for Medicare Shared Savings Program and Next Generation ACO contracts.",
      features: ["Quality reporting automation", "Shared savings calculations", "Beneficiary attribution tracking"],
      outcomes: ["18% reduction in total cost of care", "2.1 star rating improvement", "$1.8M in shared savings"]
    },
    {
      title: "MIPS Optimization",
      description: "Maximize MIPS scores across all four performance categories with automated reporting and improvement recommendations.",
      features: ["Category score optimization", "Improvement activity tracking", "Cost measure analytics"],
      outcomes: ["94 average MIPS score", "8.7% payment bonus", "95% reporting compliance"]
    },
    {
      title: "Commercial VBC",
      description: "Support for commercial payer value-based contracts including bundled payments and capitation arrangements.",
      features: ["Custom contract modeling", "Performance benchmarking", "Risk adjustment analytics"],
      outcomes: ["23% improvement in quality scores", "15% reduction in readmissions", "156% contract ROI"]
    }
  ]

  return (
    <PageTemplate
      title="Value-Based Care"
      subtitle="📈 Optimize Performance & Outcomes"
      description="Comprehensive value-based care management platform that improves quality outcomes, manages risk contracts, and optimizes performance with integrated analytics, care coordination, and automated reporting across all value-based payment models."
      heroImage="/value-based-care-dashboard.png"
      heroImageAlt="Value-Based Care Performance Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* VBC Challenges & Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Master Value-Based Care Complexity
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              From quality measure tracking to financial risk management, our platform simplifies the complexities of value-based care contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vbcChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <div className="mb-6">{challenge.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">{challenge.title}</h3>
                <p className="text-lg text-simpl-dark-grey font-manrope mb-6 leading-relaxed">
                  {challenge.description}
                </p>
                <div className="space-y-2">
                  {challenge.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-simpl-green flex-shrink-0" />
                      <span className="text-sm text-simpl-dark-grey">{solution}</span>
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
              Complete Value-Based Care Platform
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              All the tools you need to succeed in value-based care arrangements, from quality tracking to financial performance optimization.
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

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Proven Value-Based Care Results
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Real performance improvements and financial outcomes from organizations using our value-based care platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-simpl-green/5 to-simpl-blue/5 rounded-2xl p-8 border border-simpl-green/10">
                <div className="text-4xl font-bold text-simpl-green mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-simpl-black mb-2">{metric.label}</div>
                <div className="text-sm text-simpl-dark-grey">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-simpl-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-simpl-black mb-6 text-center font-manrope">
              Why Organizations Choose Simpl for Value-Based Care
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Superior Quality Outcomes</h4>
                <p className="text-simpl-dark-grey text-sm">Achieve better quality scores with data-driven interventions and care coordination.</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Financial Performance</h4>
                <p className="text-simpl-dark-grey text-sm">Maximize shared savings and reduce total cost of care through smart analytics.</p>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Risk Management</h4>
                <p className="text-simpl-dark-grey text-sm">Effectively manage financial risk while improving patient outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Support for All VBC Contract Types
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Whether you're managing ACO contracts, MIPS reporting, or commercial value-based arrangements, our platform adapts to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">{contract.title}</h3>
                <p className="text-lg text-simpl-dark-grey font-manrope mb-6 leading-relaxed">
                  {contract.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-simpl-black mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {contract.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-simpl-green flex-shrink-0" />
                        <span className="text-sm text-simpl-dark-grey">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-simpl-black mb-3">Typical Outcomes:</h4>
                  <div className="space-y-2">
                    {contract.outcomes.map((outcome, outcomeIndex) => (
                      <div key={outcomeIndex} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-simpl-green flex-shrink-0" />
                        <span className="text-sm text-simpl-dark-grey">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Engagement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
                Provider Engagement & Enablement
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Engage your provider network with transparent performance data, actionable insights, and tools that make value-based care success achievable.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Provider Dashboards</h3>
                    <p className="text-lg text-simpl-dark-grey">Real-time performance dashboards with quality scores, cost metrics, and improvement recommendations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Quality Improvement Resources</h3>
                    <p className="text-lg text-simpl-dark-grey">Evidence-based clinical protocols and quality improvement toolkits tailored to specific measures.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Incentive Tracking</h3>
                    <p className="text-lg text-simpl-dark-grey">Transparent tracking of financial incentives and shared savings distribution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/provider-engagement-dashboard.png"
                  alt="Provider Engagement Dashboard"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm">Provider Satisfaction</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">42%</div>
                <div className="text-sm">Quality Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Accelerate Your Value-Based Care Success
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join healthcare organizations nationwide that have achieved better quality outcomes, reduced costs, and maximized shared savings with our comprehensive value-based care platform.
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