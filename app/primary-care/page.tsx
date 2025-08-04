import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Stethoscope, Clock, Users, TrendingDown, AlertTriangle, CheckCircle, Brain, Calendar, Heart, BarChart3, Shield, Zap, FileText, Activity, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Primary Care EHR - Family Medicine EMR | Simpl Healthcare',
  description: 'Primary care EHR that eliminates click fatigue with ambient AI documentation, smart scheduling, and chronic care management. Cut documentation time by 2.5 hours/day.',
  keywords: 'primary care EHR, family medicine EMR, internal medicine practice management, AI medical scribe, ambient documentation, chronic care management software, preventive care gap closure, PHQ-9 digital screening',
}

export default function PrimaryCare() {
  // Convert heroContent to individual props that PageTemplate expects
  const heroStats = [
    { number: "2.5 hrs", label: "Less Documentation Daily" },
    { number: "40%", label: "Reduction in No-Shows" },
    { number: "<27 Days", label: "New Patient Wait Time" }
  ]

  const painPoints = [
    {
      icon: <Calendar className="w-8 h-8 text-red-500" />,
      title: "Month-long waitlists",
      description: "Patients now wait 31 days on average for a new-patient slot, the longest delay ever recorded.",
      solution: "Simpl's self-serve scheduling + auto-triage keeps your calendar full of the right visits, not just any visits."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: '"Pajama-time" charting',
      description: "Family docs still burn ~3 hours after clinic catching up on EHR clicks.",
      solution: "Our ambient AI drafts notes in real time and files them before you leave the room—good-night, pajama time."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Burnout bleeding the workforce",
      description: "Over 50% of PCPs feel burned out; a third plan to cut clinics within three years.",
      solution: "Cut admin by up to 30% with AI scribes and automated inbox triage, proven at big systems like Kaiser."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "EHR drag + denials",
      description: "Only 1 in 4 family docs say they're happy with their current EHR, and denial rates hover near 12%.",
      solution: "Simpl's primary-care-tuned claims scrubber auto-checks codes against payer edits before you hit 'submit.'"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Chronic-care complexity",
      description: "CMS now pays for Chronic Care Management (CCM) and Social Determinants of Health assessments—but the billing rules are brutal.",
      solution: "We export time-stamped CCM logs, auto-populate CPT 99490/99491, and drop SDoH codes straight into the claim."
    }
  ]

  const toolkit = [
    {
      icon: <Brain className="w-12 h-12 text-simpl-green" />,
      title: "Instant AI Summaries",
      description: "One-click 'chart distill' surfaces chronic conditions, labs, imaging, and specialist notes you actually need for today's visit."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "Preventive-Care Radar",
      description: "Our rules engine flags overdue colonoscopy, A1c, lipid screen, depression screening (PHQ-9), and more—right in the schedule view."
    },
    {
      icon: <FileText className="w-12 h-12 text-simpl-green" />,
      title: "Smart Orders & eRx",
      description: "Embedded clinical pathways auto-suggest labs, imaging, referrals, and evidence-based meds in two taps (FHIR-native)."
    },
    {
      icon: <Activity className="w-12 h-12 text-simpl-green" />,
      title: "Telehealth that Counts",
      description: "HD video + remote check-ins; telehealth already makes up ~39% of primary-care visits—we bill it correctly."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-simpl-green" />,
      title: "Panel-Health Analytics",
      description: "Track disease-control rates, patient-reported outcomes, and panel size (median U.S. panel: ≈2,260 patients)."
    }
  ]

  const metrics = [
    {
      value: "↓ 40%",
      label: "No-show rate",
      description: "Thanks to AI reminders + smart wait-list backfill"
    },
    {
      value: "↓ 2.5 hrs/day",
      label: "Documentation time", 
      description: "Ambient AI notes"
    },
    {
      value: "↑ 30%",
      label: "PHQ-9 completion",
      description: "Auto-score capture"
    },
    {
      value: "< 27 Days",
      label: "New-patient wait time",
      description: "After rollout (vs. national 31-day norm)"
    },
    {
      value: "< 30 Days",
      label: "Days in A/R",
      description: "With integrated RCM (industry median 47+)"
    },
    {
      value: "↑ Provider NPS to 75",
      label: "Satisfaction score",
      description: "Burnout index down 15 points"
    }
  ]

  return (
    <PageTemplate 
      title="Your Primary Care Super-Hub (Without the Click Fatigue)"
      subtitle="🩺 Primary Care Super-Hub"
      description="Primary-care docs are stuck in a perfect storm: growing patient panels, vanishing margins, and inboxes that never quit. Simpl turns that chaos into clean, automated flow—so you spend your time doctoring, not data-wrangling."
      heroImage="/primary-care-hero.png"
      heroImageAlt="Primary Care Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Pain Points Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              What Keeps PCPs Up at Night — and How Simpl Fixes It
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              Primary care faces unprecedented challenges. Here's how we solve each one.
            </p>
          </div>

          <div className="space-y-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      {point.icon}
                      <h3 className="text-2xl font-bold text-simpl-black ml-4 font-manrope">
                        {index + 1}. {point.title}
                      </h3>
                    </div>
                    <p className="text-simpl-dark-grey mb-4 font-manrope text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                  <div className="bg-simpl-grey p-6 rounded-xl">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-simpl-green mt-1 mr-3 flex-shrink-0" />
                      <p className="text-simpl-black font-manrope text-lg leading-relaxed">
                        <strong>Simpl Solution:</strong> {point.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built-for-Primary-Care Toolkit */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Built-for-Primary-Care Toolkit
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              Purpose-built features that understand the unique workflow of primary care practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolkit.map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-simpl-black mb-4 font-manrope text-center">
                    {tool.title}
                  </h3>
                  <p className="text-simpl-dark-grey font-manrope leading-relaxed text-center flex-grow">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Metrics You Can Brag About
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Real results from primary care practices using Simpl Healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-8 bg-simpl-grey rounded-2xl border border-simpl-green/10">
                <div className="text-3xl md:text-4xl font-bold text-simpl-green mb-4 font-manrope">
                  {metric.value}
                </div>
                <h3 className="text-lg font-bold text-simpl-black mb-3 font-manrope">
                  {metric.label}
                </h3>
                <p className="text-simpl-dark-grey font-manrope text-sm">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Compliance */}
      <section className="py-20 bg-simpl-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-manrope">
              Seamless Integration & Full Compliance
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-manrope">
              Built for primary care workflows with enterprise-grade security
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-simpl-green" />,
                title: "FHIR-Native",
                description: "Seamless data exchange with labs, specialists, and health systems"
              },
              {
                icon: <Shield className="w-8 h-8 text-simpl-green" />,
                title: "HIPAA Compliant",
                description: "Full compliance with healthcare privacy regulations"
              },
              {
                icon: <Star className="w-8 h-8 text-simpl-green" />,
                title: "MIPS Ready",
                description: "Automated quality measure reporting for maximum reimbursement"
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-simpl-green" />,
                title: "Value-Based Care",
                description: "Analytics and reporting for ACO and risk-based contracts"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-manrope">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 font-manrope text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}