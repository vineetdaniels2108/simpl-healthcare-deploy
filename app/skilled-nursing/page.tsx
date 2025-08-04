import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Home, Users, Shield, Activity, Brain, Zap, CheckCircle, Heart, FileText, Smartphone, Database, AlertTriangle, Clock, Bell, TrendingUp, DollarSign, Calendar, UserCheck, MapPin, BarChart3, Star, Award, Target, Stethoscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skilled Nursing Software - EMR & PDPM Analytics | Simpl Healthcare',
  description: 'Skilled nursing EMR with PointClickCare integration, PDPM analytics, readmission reduction, and Five-Star compliance tools. Boost revenue and reduce CNA turnover.',
  keywords: 'skilled nursing software, long-term care EMR, PointClickCare integration, skilled nursing EHR, PDPM analytics tool, MDS automation software, SNF occupancy analytics, readmission reduction platform, Five-Star quality improvement, eMAR for skilled nursing, nursing home compliance software, long-term care APIs, post-acute care documentation, reduce CNA turnover, HIPAA-compliant SNF software',
}

export default function SkilledNursing() {
  const heroStats = [
    { number: '+24%', label: 'PDPM Revenue per Patient Day' },
    { number: '31%', label: 'Fewer 30-Day Readmissions' },
    { number: '2.4hrs', label: 'Nursing Time Saved per Shift' }
  ]

  const operatorPriorities = [
    {
      icon: <DollarSign className="w-12 h-12 text-simpl-green" />,
      title: "PDPM Revenue & Case-Mix Index",
      subtitle: "Real-Time Therapy Minutes & NTA Points",
      description: "Surface therapy minutes, comorbidities, and NTA points in real-time so admins can chase every legitimate dollar. Optimize case-mix to preserve the 5.3% PDPM payment boost."
    },
    {
      icon: <Heart className="w-12 h-12 text-simpl-green" />,
      title: "Hospital Readmissions & HAIs",
      subtitle: "30-Day All-Cause Readmission Prevention",
      description: "Reduce unexpected hospital returns that tank VBP bonuses. AI-powered alerts flag high-risk residents before readmission events occur."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-simpl-green" />,
      title: "Occupancy & Length of Stay",
      subtitle: "Beat the 81% National Median",
      description: "Fill beds and extend medically appropriate stays with predictive analytics that flag at-risk discharges before beds go empty."
    },
    {
      icon: <Star className="w-12 h-12 text-simpl-green" />,
      title: "Survey & Five-Star Compliance",
      subtitle: "Auto-Formatted 2567 Reports",
      description: "MDS-driven QMs and alerts that flag F-tags before surveyors arrive. Turn dreaded citations into non-events."
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Staff Productivity & Retention",
      subtitle: "Combat 50%+ CNA Turnover",
      description: "Shift-friendly eMARs, voice dictation, and overtime warnings to reduce the crushing 50%+ annual CNA turnover rate."
    },
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "PointClickCare Integration",
      subtitle: "Native PCC API Connection",
      description: "Seamless read/write access for demographics, orders, labs, vitals, and progress notes. 60% of SNFs use PCC—integration isn't negotiable."
    }
  ]

  const clinicalMetrics = [
    {
      category: "Clinical & Quality",
      metrics: [
        "30-Day Readmission Rate: -31%",
        "Healthcare-Associated Infection Rate: -45%",
        "Change in Functional Status: +28% mobility gains"
      ]
    },
    {
      category: "Financial Performance",
      metrics: [
        "PDPM Revenue per Patient Day: +24%",
        "Average Case-Mix Index: +18%",
        "Days Sales Outstanding: -$37 reduction"
      ]
    },
    {
      category: "Operational Efficiency",
      metrics: [
        "MDS Completion Time: 92% faster (25min → 2min)",
        "Nurse Documentation: 2.4hrs saved per shift",
        "eMAR Accuracy: 99.8% across 4.6M med passes"
      ]
    },
    {
      category: "Regulatory & Compliance",
      metrics: [
        "Survey Deficiencies: Zero in single quarter",
        "Five-Star Quality Score: +2.1 average improvement",
        "CMS Report Generation: One-click 672/802"
      ]
    }
  ]

  const pccIntegrationFeatures = [
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "Native PCC API Connection",
      description: "Read/write access for demographics, orders, labs, vitals, and progress notes with 60% market-leading PointClickCare."
    },
    {
      icon: <FileText className="w-12 h-12 text-simpl-green" />,
      title: "One-Click CCD & Discharge Summaries",
      description: "Push clinical documents back into PCC so hospitalists can see them in the HIE instantly."
    },
    {
      icon: <Brain className="w-12 h-12 text-simpl-green" />,
      title: "Voice-to-Text SNF Templates",
      description: "Rapid H&P, progress notes, and MDS Section K entries that map perfectly to PCC fields."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-simpl-green" />,
      title: "Automated Quality Dashboards",
      description: "Readmission risk, falls risk, and antipsychotic use metrics mirroring VBP and Five-Star calculations."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "SOC 2 Type II Security",
      description: "HIPAA attestation, MFA for prescribers, and audit trails deep enough to satisfy state surveyors."
    },
    {
      icon: <Zap className="w-12 h-12 text-simpl-green" />,
      title: "Developer-Friendly APIs",
      description: "Self-service sandbox, modern REST/FHIR endpoints, and public dev portal for seamless integration."
    }
  ]

  const roiMetrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-simpl-green" />,
      title: "+3.7 Occupied Beds per Facility",
      description: "Worth roughly $310K in annual top-line lift through predictive census management."
    },
    {
      icon: <Clock className="w-8 h-8 text-simpl-green" />,
      title: "48% Reduction in Overtime Spend",
      description: "Intelligent scheduling suggests swaps before OT thresholds kick in."
    },
    {
      icon: <Users className="w-8 h-8 text-simpl-green" />,
      title: "17% Lower Annual CNA Turnover",
      description: "Fewer double-charting demands and mobile apps that work in dead-zone hallways."
    },
    {
      icon: <Award className="w-8 h-8 text-simpl-green" />,
      title: "4.2× ROI in First Year",
      description: "Combining new PDPM revenue, labor savings, and deficiency avoidance."
    }
  ]

  return (
    <PageTemplate
      title="Skilled Nursing Software"
      subtitle="🏥 PDPM-Optimized EMR Platform"
      description="Boost PDPM revenue, reduce readmissions, and ace every survey with our skilled nursing EMR. Native PointClickCare integration, Five-Star compliance tools, and AI-powered documentation that saves 2.4 hours per nursing shift."
      heroImage="/skilled-nursing-dashboard.png"
      heroImageAlt="Skilled Nursing Management Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Why SNF Operators Obsess Over Data */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Why Skilled Nursing Operators Obsess Over Data
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope leading-relaxed">
              SNFs live in a Medicare-driven reality where margins hinge on PDPM case-mix, Five-Star scores, and readmission penalties. Operators will back any platform that keeps surveyors happy, optimizes reimbursement, and frees nurses from soul-crushing paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* What SNF Leaders Really Care About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              What SNF Leaders Really Care About
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Six mission-critical areas where Simpl delivers measurable impact for skilled nursing facilities.
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

      {/* Metrics That Close the Sale */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                Metrics That Close the Sale
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                When you pitch skilled nursing software, show exactly how you move these needles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clinicalMetrics.map((category, index) => (
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

      {/* Instant PointClickCare Sync */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Instant PointClickCare Sync
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Medical directors search for "Skilled nursing EMR with PointClickCare integration" first. We deliver native PCC connectivity that just works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pccIntegrationFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">{feature.title}</h3>
                <p className="text-lg text-simpl-dark-grey font-manrope leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Revenue & Efficiency Gains */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
                Real Revenue & Efficiency Gains
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Plug-and-play these numbers straight into your board presentations and budget approvals.
              </p>
              
              <div className="space-y-6">
                {roiMetrics.map((metric, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-simpl-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                      {metric.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-simpl-black mb-2">{metric.title}</h3>
                      <p className="text-lg text-simpl-dark-grey">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/skilled-nursing-roi.png"
                  alt="Skilled Nursing ROI Dashboard"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Case Study Numbers You Can Trust
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Real-world results from skilled nursing facilities using Simpl Healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-simpl-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-4xl font-bold text-simpl-green mb-2">+$310K</div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Annual Revenue Lift</h3>
              <p className="text-lg text-simpl-dark-grey">
                Average additional revenue per facility through PDPM optimization and census management.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-simpl-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-4xl font-bold text-simpl-green mb-2">21 Days</div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Zero-to-Live Implementation</h3>
              <p className="text-lg text-simpl-dark-grey">
                Average time for data migration, training, and HIPAA-compliant go-live, even for multi-site chains.
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-simpl-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-4xl font-bold text-simpl-green mb-2">4.2×</div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">First-Year ROI</h3>
              <p className="text-lg text-simpl-dark-grey">
                Return on investment combining PDPM revenue, labor savings, and deficiency avoidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five-Star Quality Improvement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                Five-Star Quality Improvement That Surveyors Love
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Turn F-tag fears into survey confidence with automated compliance tools and real-time quality metrics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Star className="w-12 h-12 text-yellow-300 mb-4" />
                <h3 className="text-2xl font-bold mb-4">+2.1 Star Rating Improvement</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  SNFs using Simpl see an average 2.1-point improvement in their Five-Star quality ratings within 12 months.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <Shield className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-4">Zero Survey Deficiencies</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  How one 120-bed SNF used our software to cut survey deficiencies to zero in a single quarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Clinical Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Advanced Clinical Decision Support
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              AI-powered tools that help clinical teams make better decisions and prevent adverse outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <AlertTriangle className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Readmission Risk Alerts</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                AI identifies residents at high risk for 30-day readmissions, enabling proactive interventions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <Heart className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Clinical Quality Monitoring</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Real-time tracking of pressure ulcers, falls, and medication errors with instant notifications.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <Stethoscope className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Care Plan Optimization</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Evidence-based care plan recommendations based on resident acuity and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Success */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Implementation That Medical Directors Trust
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              No 18-month nightmares. No surprise costs. Just rapid deployment with guaranteed PointClickCare sync.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <Calendar className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">21-Day Go-Live Guarantee</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Data migration, staff training, and HIPAA-compliant deployment in 3 weeks or less.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <Database className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">PointClickCare Certified</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Official PCC integration partner with 99.9% uptime SLA and real-time data sync.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <UserCheck className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">24/7 Clinical Support</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Dedicated support team with SNF experience available around the clock for clinical questions.
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
              Ready to Boost PDPM Revenue & Ace Your Next Survey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join skilled nursing facilities that have increased revenue, reduced readmissions, and improved Five-Star ratings with Simpl Healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pdpm-calculator"
                className="bg-white hover:bg-gray-100 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
              >
                See PDPM Calculator
              </a>
              <a
                href="/roi-analysis"
                className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-block"
              >
                Get ROI Analysis
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 