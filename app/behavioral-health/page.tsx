import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Brain, FileText, BarChart3, Shield, Clock, Users, Heart, TrendingUp, CheckCircle, Zap, Calendar, Database, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Behavioral Health EHR - Mental Health EMR | Simpl Healthcare',
  description: 'Streamline your behavioral health practice with AI-powered documentation, PHQ-9/GAD-7 automation, HIPAA-compliant telehealth, and measurement-based care. Cut documentation time by 90%.',
  keywords: 'behavioral health EHR, mental health EMR, psychiatry practice management software, PHQ-9 automation, GAD-7 digital form, measurement-based care, AI clinical notes, HIPAA-compliant telehealth, 42 CFR Part 2 compliance',
}

export default function BehavioralHealth() {
  const heroStats = [
    { number: '90%', label: 'Faster Documentation' },
    { number: '40%', label: 'Reduction in No-Shows' },
    { number: '2+', label: 'PHQ-9 Score Improvement' },
    { number: '<30', label: 'Days in A/R' }
  ]

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-simpl-green" />,
      title: "One-Click Digital Screeners",
      description: "Push PHQ-9, GAD-7—or any custom tool—to the patient portal or tablet; results auto-score and flow straight into the note."
    },
    {
      icon: <Brain className="w-8 h-8 text-simpl-green" />,
      title: "AI-Drafted Notes & Summaries",
      description: "During or after sessions, Simpl listens (securely) and drafts DSM-5-friendly progress notes, treatment goals, and next-step suggestions."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-simpl-green" />,
      title: "Behavioral-Health-Savvy Billing & RCM",
      description: "Built-in library of psychotherapy, crisis, family, group, and MAT codes with automatic time tracking."
    },
    {
      icon: <Shield className="w-8 h-8 text-simpl-green" />,
      title: "Compliant Telehealth & e-Prescribing",
      description: "Launch HIPAA-secure video from inside the calendar; controlled-substance eRx (EPCS) with PDMP checks baked in."
    },
    {
      icon: <Heart className="w-8 h-8 text-simpl-green" />,
      title: "Engagement-First Patient Portal",
      description: "Self-booking, automated reminders, digital consent, secure messaging, outcome surveys, and instant record access keep you Cures-Act-ready."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-simpl-green" />,
      title: "Analytics That Actually Matter",
      description: "Dashboard tracks symptom-score trends, visit frequency, and payer mix. Pull MIPS mental-health measures in two clicks."
    }
  ]

  const painPoints = [
    {
      title: "Measurement-Based Care is Manual",
      description: "Screeners (PHQ-9, GAD-7, etc.) still live on paper or PDF; scores must be hand-entered into the chart.",
      impact: "Less than 1-in-5 clinicians use measurement-based care consistently"
    },
    {
      title: "Documentation Overload", 
      description: "Providers lose 1–2 hours a day to progress notes, treatment plans, and chart review. Burnout is now as much about clicks as caseload.",
      impact: "Therapists burn 8+ hours a week on notes instead of patient care"
    },
    {
      title: "Fragmented Billing + EHR",
      description: "Billing apps that don't 'speak therapy' miss time-based psychotherapy codes and MAT bundles, leading to denials and write-offs.",
      impact: "Initial denial rates climbed to 11.8% in 2024, up 20% year-over-year"
    },
    {
      title: "Patient Engagement Gaps",
      description: "Portals without secure messaging, self-booking, and pre-visit intake hurt retention and increase no-shows.",
      impact: "Mental-health clinics lose 17-50% of appointments to no-shows"
    },
    {
      title: "Information Overload in Charts",
      description: "Clinicians wade through hundreds of notes to find the one line that matters before a session.",
      impact: "43% of psychiatrists report feeling burned out from documentation overload"
    }
  ]

  return (
    <PageTemplate
      title="Why Behavioral Health Practices Are Leveling-Up in 2025"
      subtitle="🧠 First AI-Powered Behavioral Health EHR"
      description="Mental-health demand is off the charts, but documentation rules, value-based contracts, and multi-payer billing make running a behavioral-health clinic a paperwork slog. Providers are begging for anything that slashes admin time, tightens reimbursement, and still keeps them compliant."
      heroImage="/behavioral-health-hero.png"
      heroImageAlt="Behavioral Health EHR Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Pain Points Section */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Top Pain Points We Hear From Therapists & Psychiatrists
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              The behavioral health industry faces unique challenges that traditional EHRs weren't built to solve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
                <h3 className="text-xl font-bold text-simpl-black mb-4 font-manrope">
                  {point.title}
                </h3>
                <p className="text-simpl-dark-grey mb-4 font-manrope leading-relaxed">
                  {point.description}
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-red-700 font-manrope">
                    📊 Impact: {point.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              How Simpl Makes Behavioral Health Workflows … Well, Simple
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              Purpose-built features that understand the unique needs of mental health practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-simpl-grey rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-simpl-black ml-4 font-manrope">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-simpl-dark-grey font-manrope leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-simpl-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-manrope">
              Compliance-First Design
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-manrope">
              Built specifically for behavioral health compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex justify-center mb-6">
                  <Shield className="w-8 h-8 text-simpl-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-manrope">
                  HIPAA & 42 CFR Part 2
                </h3>
                <p className="text-white/80 font-manrope">
                  Full compliance with behavioral health privacy regulations
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex justify-center mb-6">
                  <Database className="w-8 h-8 text-simpl-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-manrope">
                  Cures Act Ready
                </h3>
                <p className="text-white/80 font-manrope">
                  Patient access and interoperability requirements met
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex justify-center mb-6">
                  <Zap className="w-8 h-8 text-simpl-green" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-manrope">
                  FHIR Interoperability
                </h3>
                <p className="text-white/80 font-manrope">
                  Seamless data exchange with health systems and HIEs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-simpl-green to-simpl-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-manrope">
            Ready to Transform Your Behavioral Health Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-manrope">
            Join hundreds of mental health providers who've already cut documentation time by 90% and improved patient outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-demo"
              className="bg-white text-simpl-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors font-manrope"
            >
              Schedule Demo
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors font-manrope"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 