import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import Link from 'next/link'
import { Calendar, ArrowRight, TrendingUp, DollarSign, Heart, Star, Users, Database, Shield, Clock, MapPin, Smartphone, Brain, CheckCircle, FileText, Activity, Zap, AlertTriangle, Target, BarChart3, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home Health Software - PDGM, OASIS & EVV Platform | Simpl Healthcare',
  description: 'Home health software that nails PDGM, OASIS, and EVV without driving clinicians crazy. Faster notes, fewer rehospitalizations, increased revenue per episode.',
  keywords: 'home health software, home health EMR, PDGM software, OASIS automation, EVV compliance platform, home health scheduling, mobile charting for nurses, home health revenue cycle management, LUPA reduction tool, HHVBP analytics, home care documentation, interoperable FHIR home health, HIPAA-compliant home health software, reduce clinician burnout home health, predictive readmission analytics',
}

export default function HomeHealth() {
  const heroStats = [
    { number: '+18%', label: 'PDGM revenue per 60-day episode' },
    { number: '28%', label: 'fewer unplanned hospitalizations' },
    { number: '93%', label: 'cut in OASIS errors' }
  ]

  const leaderConcerns = [
    {
      icon: <DollarSign className="w-8 h-8 text-simpl-green" />,
      title: "PDGM Reimbursement & LUPA Avoidance",
      description: "Real-time visit-utilization alerts so you never leave dollars on the table.",
      metric: "22% reduction in LUPA incidents"
    },
    {
      icon: <FileText className="w-8 h-8 text-simpl-green" />,
      title: "OASIS & HHVBP Scores",
      description: "Guided assessments that map each answer to case-mix points and quality star metrics.",
      metric: "93% fewer OASIS validation errors"
    },
    {
      icon: <Heart className="w-8 h-8 text-simpl-green" />,
      title: "Readmission Penalties",
      description: "Predictive risk scores integrated into the Plan of Care, driving a 28% drop in hospital returns.",
      metric: "28% drop in 30-day rehospitalizations"
    },
    {
      icon: <MapPin className="w-8 h-8 text-simpl-green" />,
      title: "Electronic Visit Verification",
      description: "GPS + biometric stamp hits 99.9% compliance across iOS and Android.",
      metric: "99.9% EVV match rate across 250K visits"
    },
    {
      icon: <Clock className="w-8 h-8 text-simpl-green" />,
      title: "Route & Staff Efficiency",
      description: "Smart scheduling shaves 45 minutes off daily windshield time per clinician.",
      metric: "1.6 clinician hours saved per day"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-simpl-green" />,
      title: "Cash-Flow Speed",
      description: "Clean claims export to clearinghouses cuts Days Sales Outstanding by 19 days.",
      metric: "19-day decrease in DSO"
    },
    {
      icon: <Database className="w-8 h-8 text-simpl-green" />,
      title: "Interoperability",
      description: "FHIR APIs push CCDs to hospitals, pharmacies, and HIEs; SOC 2 + HIPAA baked in.",
      metric: "15% lower annual RN/PT turnover"
    }
  ]

  const capabilities = [
    {
      icon: <Brain className="w-12 h-12 text-simpl-green" />,
      title: "PDGM & OASIS Co-Pilot",
      description: "Inline guidance highlights NRS points, comorbidities, and Functional Impairment Score in real time."
    },
    {
      icon: <Zap className="w-12 h-12 text-simpl-green" />,
      title: "AI-Powered Plan-of-Care Builder",
      description: "Drafts interventions and goals in seconds, mapped to CMS language."
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-simpl-green" />,
      title: "Predictive Readmission Radar",
      description: "Flags high-risk patients using vitals, meds, and social-determinant data."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-simpl-green" />,
      title: "Offline-First Mobile App",
      description: "Clinicians sync data even in rural dead zones; background upload when back online."
    },
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "EVV, eRx, and HIE Exchange",
      description: "One tap to push signed orders, med lists, and CCDs to physicians and pharmacies."
    },
    {
      icon: <Target className="w-12 h-12 text-simpl-green" />,
      title: "Revenue-Cycle Turbo",
      description: "Auto-checks claims against LCD/NCD rules; one-click export to Homecare Homebase, DDE, or your clearinghouse of choice."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "Security Receipts",
      description: "SOC 2 Type II, HIPAA, MFA, immutable audit logs."
    }
  ]

  const metrics = [
    { value: "+18%", label: "revenue per PDGM episode after six months" },
    { value: "22%", label: "reduction in LUPA incidents (from 1 in 5 to 1 in 16 visits)" },
    { value: "1.6", label: "clinician hours saved per day via voice-to-text progress notes" },
    { value: "28%", label: "drop in 30-day rehospitalizations across a 400-patient census" },
    { value: "93%", label: "fewer OASIS validation errors at submission" },
    { value: "99.9%", label: "EVV match rate across 250K visits" },
    { value: "19-day", label: "decrease in DSO, unlocking an extra payroll cycle of cash" },
    { value: "15%", label: "lower annual RN/PT turnover, credited to sub-5-minute documentation" }
  ]

  const complianceFeatures = [
    "SOC 2 Type II",
    "HIPAA Compliant", 
    "99.99% uptime SLA",
    "CMS EVV mandates in all 50 states",
    "PHI encryption at rest & in transit"
  ]

  return (
    <PageTemplate
      title="Home Health Software for PDGM, OASIS & EVV"
      subtitle="🏠 Faster notes, fewer rehospitalizations, ↑ revenue per episode. Simpl turns every visit into clean data and clean dollars."
      description="PDGM optimization, OASIS automation, and EVV compliance platform that transforms home health operations. Real-time LUPA alerts, mobile-first charting, and predictive analytics that boost revenue and reduce readmissions."
      heroImage="/home-health-hero.png"
      heroImageAlt="Home health nurse using mobile app in patient's living room"
      showHeroStats={true}
      heroStats={heroStats}
    >
      

      {/* What Home-Health Leaders Sweat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              What Home-Health Leaders Sweat
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Seven critical pain points that keep home health administrators up at night—and how Simpl solves each one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaderConcerns.map((concern, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{concern.icon}</div>
                <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">{concern.title}</h3>
                <p className="text-simpl-dark-grey font-manrope leading-relaxed mb-4">
                  {concern.description}
                </p>
                <div className="bg-simpl-green/10 rounded-lg p-3">
                  <div className="text-simpl-green font-bold text-sm">{concern.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Metrics */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Realistic, Copy-Ready Metrics
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Real results from real home health agencies using Simpl Healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-simpl-green mb-2">{metric.value}</div>
                <div className="text-sm text-simpl-dark-grey leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Must-Have Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Must-Have Capabilities (and How Simpl Delivers)
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Seven core features that transform home health operations from chaotic to profitable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-all duration-300 group">
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

      {/* Trust & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                Trust & Compliance You Can Count On
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Enterprise-grade security and compliance that meets every CMS requirement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-white" />
                  <div className="font-semibold text-sm">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Preview */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
                Mobile-First Platform for Field Teams
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Your clinicians work everywhere from downtown apartments to rural farmhouses. Our mobile app works everywhere too—online or offline, iOS or Android.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-simpl-green flex-shrink-0" />
                  <span className="text-lg text-simpl-dark-grey">Voice-to-text documentation in any environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-simpl-green flex-shrink-0" />
                  <span className="text-lg text-simpl-dark-grey">GPS tracking for EVV compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-simpl-green flex-shrink-0" />
                  <span className="text-lg text-simpl-dark-grey">Offline sync for rural areas with poor cell coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-simpl-green flex-shrink-0" />
                  <span className="text-lg text-simpl-dark-grey">Real-time alerts for LUPA and readmission risks</span>
                </div>
              </div>

              <Link
                href="/book-demo"
                className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-flex items-center gap-2"
              >
                See Mobile Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/home-health-mobile-interface.png"
                  alt="Home health mobile app interface showing patient care plans"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                {/* Floating Metric Cards */}
                <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm">EVV Compliance</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">45min</div>
                  <div className="text-sm">Less Drive Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
            Ready to Transform Your Home Health Operations?
          </h2>
          <p className="text-xl text-simpl-dark-grey mb-8 font-manrope">
            Join agencies across the country that have increased PDGM revenue, reduced readmissions, and made their clinicians happier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-flex items-center justify-center gap-2"
            >
              Book a Demo
              <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 