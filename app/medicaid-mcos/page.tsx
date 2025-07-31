import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import Link from 'next/link'
import { Users, Heart, Shield, TrendingUp, CheckCircle, BarChart3, Clock, Target, ArrowRight, DollarSign, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medicaid MCO Management Platform - Simpl Healthcare',
  description: 'Specialized solutions for Medicaid Managed Care Organizations. Improve member outcomes, manage complex populations, and ensure regulatory compliance with integrated care coordination.',
  keywords: 'medicaid MCO software, medicaid managed care platform, medicaid member management, medicaid quality measures, medicaid care coordination, HEDIS medicaid reporting, medicaid compliance platform, social determinants health',
}

export default function MedicaidMCOs() {
  const heroStats = [
    { number: '34%', label: 'Reduction in Emergency Department Visits' },
    { number: '89%', label: 'HEDIS Measure Compliance' },
    { number: '67%', label: 'Improvement in Care Coordination' }
  ]

  const medicaidChallenges = [
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Complex Population Management",
      description: "Manage diverse member populations with multiple chronic conditions, social barriers, and complex care needs.",
      solutions: ["Social determinants screening", "Multi-condition care plans", "Cultural competency tools"]
    },
    {
      icon: <Heart className="w-12 h-12 text-simpl-green" />,
      title: "Care Coordination at Scale",
      description: "Coordinate care across multiple providers, specialists, and community resources for better outcomes.",
      solutions: ["Multi-provider coordination", "Community resource mapping", "Care plan synchronization"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-simpl-green" />,
      title: "Quality Measure Reporting",
      description: "Meet CMS and state-specific quality requirements while improving member health outcomes.",
      solutions: ["Automated HEDIS reporting", "State-specific measures", "Real-time quality tracking"]
    }
  ]

  const platformCapabilities = [
    {
      icon: <Target className="w-12 h-12 text-simpl-green" />,
      title: "Social Determinants Integration",
      description: "Identify and address social barriers to health with comprehensive screening and community resource connections."
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Behavioral Health Coordination",
      description: "Integrate behavioral health services with primary care for holistic member management."
    },
    {
      icon: <Heart className="w-12 h-12 text-simpl-green" />,
      title: "Maternal & Child Health",
      description: "Specialized programs for pregnancy care, pediatric health, and family planning services."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "Long-Term Services & Supports",
      description: "Coordinate LTSS benefits with medical care for dual-eligible and high-need members."
    },
    {
      icon: <Clock className="w-12 h-12 text-simpl-green" />,
      title: "Member Outreach Automation",
      description: "Automated member engagement for appointment reminders, health education, and care gaps."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-simpl-green" />,
      title: "Predictive Risk Modeling",
      description: "Identify high-risk members early with predictive analytics and intervention triggers."
    }
  ]

  const outcomeMetrics = [
    { value: "28%", label: "Increase in Preventive Care", description: "Members receiving recommended screenings" },
    { value: "45%", label: "Reduction in Readmissions", description: "30-day hospital readmission rates" },
    { value: "52%", label: "Improvement in Medication Adherence", description: "For chronic condition management" },
    { value: "73%", label: "Member Satisfaction", description: "With care coordination services" }
  ]

  const specializedPrograms = [
    {
      title: "Maternal Health Programs",
      description: "Comprehensive prenatal and postpartum care coordination with community support services.",
      outcomes: ["35% reduction in preterm births", "89% prenatal care completion", "67% postpartum visit compliance"]
    },
    {
      title: "Behavioral Health Integration",
      description: "Integrated behavioral health services with primary care and substance abuse treatment.",
      outcomes: ["42% increase in BH engagement", "31% reduction in crisis interventions", "58% improvement in PHQ-9 scores"]
    },
    {
      title: "Chronic Care Management",
      description: "Multi-condition care plans with medication management and lifestyle intervention support.",
      outcomes: ["28% reduction in A1C levels", "34% fewer complications", "46% improvement in self-care"]
    }
  ]

  return (
    <PageTemplate
      title="Medicaid MCOs"
      subtitle="🤝 Specialized Medicaid Management"
      description="Comprehensive solutions for Medicaid Managed Care Organizations. Improve member outcomes, manage complex populations, and ensure regulatory compliance with integrated care coordination, social determinants screening, and automated quality reporting."
      heroImage="/medicaid-mco-dashboard.png"
      heroImageAlt="Medicaid MCO Management Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Medicaid-Specific Challenges */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Address Unique Medicaid MCO Challenges
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              From complex population management to regulatory compliance, our platform is designed specifically for Medicaid managed care challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {medicaidChallenges.map((challenge, index) => (
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

      {/* Platform Capabilities */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Comprehensive Medicaid MCO Platform
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Purpose-built capabilities for Medicaid managed care organizations and their unique member populations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{capability.icon}</div>
                <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">{capability.title}</h3>
                <p className="text-simpl-dark-grey font-manrope leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Measurable Health Outcomes
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Real improvements in member health outcomes and MCO performance metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {outcomeMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-simpl-green/5 to-simpl-blue/5 rounded-2xl p-8 border border-simpl-green/10">
                <div className="text-4xl font-bold text-simpl-green mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-simpl-black mb-2">{metric.label}</div>
                <div className="text-sm text-simpl-dark-grey">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-simpl-green/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-simpl-black mb-6 text-center font-manrope">
              Why Medicaid MCOs Trust Simpl
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Member-Centered Care</h4>
                <p className="text-simpl-dark-grey text-sm">Holistic approach addressing medical, behavioral, and social needs.</p>
              </div>
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Regulatory Compliance</h4>
                <p className="text-simpl-dark-grey text-sm">Meet all CMS and state-specific reporting requirements automatically.</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-simpl-green mx-auto mb-3" />
                <h4 className="font-semibold text-simpl-black mb-2">Cost Effectiveness</h4>
                <p className="text-simpl-dark-grey text-sm">Reduce avoidable utilization while improving member satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Specialized Medicaid Programs
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Targeted programs for specific Medicaid populations with measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">{program.title}</h3>
                <p className="text-lg text-simpl-dark-grey font-manrope mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-simpl-black">Key Outcomes:</h4>
                  {program.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-simpl-green flex-shrink-0" />
                      <span className="text-sm text-simpl-dark-grey">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
                Community Resource Integration
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Connect members with community resources and social services to address social determinants of health and improve overall outcomes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Social Services Directory</h3>
                    <p className="text-lg text-simpl-dark-grey">Comprehensive database of local social services, food banks, and community organizations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Transportation Coordination</h3>
                    <p className="text-lg text-simpl-dark-grey">Integrate with transportation services for medical appointments and pharmacy visits.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Housing & Food Security</h3>
                    <p className="text-lg text-simpl-dark-grey">Address basic needs that impact health outcomes and care adherence.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/community-integration.png"
                  alt="Community Resource Integration Map"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm">Community Partners</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">84%</div>
                <div className="text-sm">Resource Utilization</div>
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
              Transform Your Medicaid MCO Operations
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join Medicaid MCOs nationwide that have improved member outcomes, enhanced care coordination, and achieved better regulatory compliance with Simpl Healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="bg-white hover:bg-gray-100 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/health-plans"
                className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-block"
              >
                Explore Health Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 