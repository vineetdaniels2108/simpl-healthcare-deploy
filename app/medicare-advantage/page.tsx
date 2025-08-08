import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import Link from 'next/link'
import { TrendingUp, Shield, Zap, Database, CheckCircle, Clock, FileText, BarChart3, Award, Target, ArrowRight, Play, Download, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medicare Advantage Risk Adjustment Platform - Simpl Healthcare',
  description: 'Zero-chase medical records with 95% chart hit-rate in <48 hours. AI risk adjustment platform with 0.34 average RAF lift and 22% lower chart-chase spend.',
  keywords: 'medicare advantage risk adjustment, RAF optimization platform, HCC coding software, medical record retrieval vendor, chart chase automation, risk adjustment analytics, hipaa compliant FHIR API, payer interoperability solution, CMS risk adjustment compliance, medical chart retrieval service, secure medical record API, nationwide EHR connectivity, medical records for risk adjustment',
}

export default function MedicareAdvantage() {
  const heroStats = [
    { number: '95%', label: 'chart hit-rate in < 48 hours' },
    { number: '0.34', label: 'average RAF lift in first measurement year' },
    { number: '22%', label: 'lower chart-chase spend vs. legacy vendors' }
  ]

  const painPoints = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Chart Chase Burns Margin",
      description: "Chasing charts with faxes and phone calls torches margin."
    },
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      title: "Coder Inefficiency",
      description: "Coders burn hours re-indexing PDFs no one named the same way twice."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Missed HCCs",
      description: "Missed HCCs = millions left on the table come reconciliation."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Audit Vulnerability",
      description: "CMS auditors want iron-clad provenance on every diagnosis code."
    }
  ]

  const payoffBullets = [
    {
      icon: <Database className="w-8 h-8 text-simpl-green" />,
      title: "Nationwide Provider Network",
      description: "One API taps 85% of U.S. providers and 99% of hospitals."
    },
    {
      icon: <Zap className="w-8 h-8 text-simpl-green" />,
      title: "AI-Powered Extraction",
      description: "AI auto-extracts HCC evidence and bundles coder-ready packets."
    },
    {
      icon: <Award className="w-8 h-8 text-simpl-green" />,
      title: "Fully Auditable",
      description: "Fully auditable—from provider signature to CMS IDR upload."
    },
    {
      icon: <Shield className="w-8 h-8 text-simpl-green" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II + HIPAA + MFA at every touchpoint."
    }
  ]

  const riskAdjustmentFeatures = [
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "Smart Retrieval Engine",
      description: "Pulls clinical data (CCDAs, progress notes, imaging, labs) based on your eligibility file—no member portals required.",
      metrics: ["Nationwide provider coverage", "Multiple data formats", "Automated retrieval"]
    },
    {
      icon: <Target className="w-12 h-12 text-simpl-green" />,
      title: "HCC Suspect Logic",
      description: "Flags time-bound conditions and co-morbidities you're probably missing.",
      metrics: ["Time-bound condition alerts", "Co-morbidity identification", "Risk gap analysis"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-simpl-green" />,
      title: "Coder Workbench",
      description: "Pre-tags diagnoses, shows dates of service, and tracks coder throughput live.",
      metrics: ["Pre-tagged diagnoses", "Date tracking", "Live throughput monitoring"]
    },
    {
      icon: <ArrowRight className="w-12 h-12 text-simpl-green" />,
      title: "One-Click Export",
      description: "Pushes final codes to your risk engine in FHIR or flat-file format.",
      metrics: ["FHIR integration", "Flat-file export", "Risk engine compatibility"]
    }
  ]

  const deepMetrics = [
    { value: "3.1", label: "HCCs confirmed per member", subtext: "(vs. 2.4 industry baseline)" },
    { value: "35%", label: "coder-throughput jump", subtext: "from 18 charts/hr to 24 charts/hr" },
    { value: "99.7%", label: "coding accuracy", subtext: "verified by external audit" },
    { value: "$380", label: "incremental premium per newly captured HCC", subtext: "(2025 rate book)" }
  ]

  const securityFeatures = [
    "FHIR R4 & HL7 v2 for live clinical pulls",
    "DirectTrust, XCA/XCPD for doc-to-doc exchange",
    "Surescripts & NCPDP hooks for med lists",
    "Zero-trust architecture: device + role + geo",
    "PHI encrypted at rest (AES-256) and in transit (TLS 1.3)",
    "99.99% uptime SLA, geo-replication in three U.S. regions"
  ]

  const implementationSteps = [
    {
      week: "Week 0",
      title: "Kick-Off",
      description: "Swap SFTP keys, white-list IPs, map your eligibility schema."
    },
    {
      week: "Week 1",
      title: "Sandbox Live",
      description: "Pull 500 test charts; validate coverage, file mapping, and audit logs."
    },
    {
      week: "Week 2-3",
      title: "Pilot Cohort",
      description: "Real members, real retrieval, side-by-side coder accuracy check."
    },
    {
      week: "Week 4",
      title: "Full Launch",
      description: "All MA lines turned on, automated nightly runs, dashboard access for actuaries and coding leads."
    }
  ]

  const roiMetrics = [
    { value: "4.2×", label: "first-year ROI", description: "combining new premium revenue and lower retrieval spend" },
    { value: "19-day", label: "reduction in DSO", description: "for risk-adjustment true-ups" },
    { value: "<12-month", label: "payback", description: "for plans > 50K lives" }
  ]

  return (
    <PageTemplate
      title="Zero-Chase Medical Records. Bigger RAF. Happier Actuaries."
      subtitle="💼 Why Simpl for Medicare Advantage?"
      description="Nationwide chart retrieval + AI risk adjustment in one HIPAA-tight platform. 95% chart hit-rate in <48 hours with 0.34 average RAF lift and 22% lower chart-chase spend vs. legacy vendors."
      heroImage="/medicare-advantage-dashboard.png"
      heroImageAlt="Medicare Advantage Risk Adjustment Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Pain Points vs Payoffs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Pain Points */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-simpl-black mb-8 font-manrope">
                Pain Points That Torch Your Margin
              </h2>
              <div className="space-y-6">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border border-red-200">
                    {point.icon}
                    <div>
                      <h3 className="text-xl font-bold text-simpl-black mb-2">{point.title}</h3>
                      <p className="text-simpl-dark-grey">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payoff Bullets */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-simpl-black mb-8 font-manrope">
                How Simpl Delivers ROI
              </h2>
              <div className="space-y-6">
                {payoffBullets.map((payoff, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-simpl-green/5 rounded-xl border border-simpl-green/20">
                    {payoff.icon}
                    <div>
                      <h3 className="text-xl font-bold text-simpl-black mb-2">{payoff.title}</h3>
                      <p className="text-simpl-dark-grey">{payoff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/book-demo"
              className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-flex items-center justify-center gap-2"
            >
              See Risk Adjustment in Action
              <Play className="w-5 h-5" />
            </Link>
            <Link
              href="/book-demo"
              className="border-2 border-simpl-green hover:bg-simpl-green hover:text-white text-simpl-green px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Risk Adjustment Features */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Risk Adjustment That Actually Works
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Four core capabilities that transform your risk adjustment operations from manual chaos to automated efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskAdjustmentFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">{feature.title}</h3>
                <p className="text-lg text-simpl-dark-grey font-manrope leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-simpl-green flex-shrink-0" />
                      <span className="text-sm text-simpl-dark-grey">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Deeper Metrics That Matter
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Real performance benchmarks from Medicare Advantage plans using Simpl Healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deepMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-simpl-green/5 to-simpl-blue/5 rounded-2xl p-8 border border-simpl-green/10">
                <div className="text-4xl font-bold text-simpl-green mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-simpl-black mb-2">{metric.label}</div>
                <div className="text-sm text-simpl-dark-grey">{metric.subtext}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-simpl-green/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Why These Metrics Matter</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-simpl-black mb-2">Faster RAF Capture</h4>
                <p className="text-simpl-dark-grey text-sm">Less back-and-forth with providers means faster RAF capture.</p>
              </div>
              <div>
                <h4 className="font-semibold text-simpl-black mb-2">Smoother Audits</h4>
                <p className="text-simpl-dark-grey text-sm">Cleaner evidence packets mean smoother RADV or OIG audits.</p>
              </div>
              <div>
                <h4 className="font-semibold text-simpl-black mb-2">Better Loss Ratio</h4>
                <p className="text-simpl-dark-grey text-sm">Higher RAF + lower retrieval cost = serious boost to loss ratio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interoperability & Security */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
                Interoperability & Security Built Right
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Enterprise-grade data highways and zero-trust security architecture that keeps your data flowing securely.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Data Highways</h3>
                <div className="space-y-3">
                  {securityFeatures.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-simpl-green flex-shrink-0" />
                      <span className="text-simpl-dark-grey">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Security Posture</h3>
                <div className="space-y-3">
                  {securityFeatures.slice(3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-simpl-green flex-shrink-0" />
                      <span className="text-simpl-dark-grey">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-simpl-green/10 text-simpl-green px-4 py-2 rounded-full text-sm font-semibold">SOC 2 Type II</span>
                <span className="bg-simpl-green/10 text-simpl-green px-4 py-2 rounded-full text-sm font-semibold">HIPAA</span>
                <span className="bg-simpl-green/10 text-simpl-green px-4 py-2 rounded-full text-sm font-semibold">HITRUST (in audit)</span>
                <span className="bg-simpl-green/10 text-simpl-green px-4 py-2 rounded-full text-sm font-semibold">21 CFR Part 11 ready</span>
              </div>

              <div className="mt-6">
                <Link
                  href="/privacy-policy"
                  className="border-2 border-simpl-green hover:bg-simpl-green hover:text-white text-simpl-green px-6 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Security & Privacy Details
                  <Download className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/security-architecture.png"
                  alt="Security Architecture Diagram"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
              {/* Floating Security Badges */}
              <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">99.99%</div>
                <div className="text-sm">Uptime SLA</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">AES-256</div>
                <div className="text-sm">Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & ROI */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Implementation & ROI
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              4-week implementation with measurable ROI from day one.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Implementation Timeline */}
            <div>
              <h3 className="text-3xl font-bold text-simpl-black mb-8 font-manrope">How We Roll You Out</h3>
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-simpl-green text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-bold text-simpl-black">{step.title}</h4>
                        <span className="bg-simpl-green/10 text-simpl-green px-3 py-1 rounded-full text-sm font-semibold">
                          {step.week}
                        </span>
                      </div>
                      <p className="text-simpl-dark-grey leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI Snapshot */}
            <div>
              <h3 className="text-3xl font-bold text-simpl-black mb-8 font-manrope">ROI Snapshot</h3>
              <div className="space-y-6">
                {roiMetrics.map((metric, index) => (
                  <div key={index} className="bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5 rounded-xl p-6 border border-simpl-green/10">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-bold text-simpl-green">{metric.value}</div>
                      <div>
                        <div className="text-xl font-bold text-simpl-black">{metric.label}</div>
                        <div className="text-simpl-dark-grey">{metric.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/roi-analysis"
                  className="bg-simpl-blue hover:bg-simpl-dark-blue text-white px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2 btn-hover"
                >
                  Run My ROI Estimate
                  <Calculator className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Ready to Transform Your Risk Adjustment?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join Medicare Advantage plans nationwide that have boosted RAF scores, reduced retrieval costs, and improved actuarial outcomes with Simpl Healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="bg-white hover:bg-gray-100 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/book-demo"
                className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-block"
              >
                See Risk Adjustment in Action
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 