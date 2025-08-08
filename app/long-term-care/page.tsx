import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Home, Users, Shield, Activity, Brain, Zap, CheckCircle, Heart, FileText, Smartphone, Database, AlertTriangle, Clock, Bell, TrendingUp, DollarSign, Calendar, UserCheck, MapPin, BarChart3, Star, Award, Target, Stethoscope, ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Long-Term Care Software - LTPAC EHR Platform | Simpl Healthcare',
  description: 'Long-term care software that moves the needle. Boost revenue, cut readmissions, and ditch paperwork for skilled nursing facilities and assisted living communities.',
  keywords: 'long-term care software, skilled nursing software, assisted living software, PointClickCare integration, PDPM analytics tool, senior living EMR, eMAR for nursing homes, AI documentation for caregivers, census management tools, HIPAA-compliant long-term care platform',
}

export default function LongTermCare() {
  const heroStats = [
    { number: '+24%', label: 'PDPM dollars per patient-day' },
    { number: '99.8%', label: 'eMAR accuracy across 4.6M med passes' },
    { number: '2.4hrs', label: 'nursing hours saved every shift' }
  ]

  const corebenefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-simpl-green" />,
      title: "Fill Every Bed, Every Day",
      description: "AI-powered occupancy forecasts grow census by 3.7 beds per building.",
      tags: ["SNF", "AL"],
      link: "/practice-management"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-simpl-green" />,
      title: "Max Out Reimbursement",
      description: "Real-time PDPM and RUG-IV guidance adds ~$310K per 120-bed facility.",
      tags: ["SNF-specific"],
      link: "/skilled-nursing"
    },
    {
      icon: <Heart className="w-12 h-12 text-simpl-green" />,
      title: "Slash Readmissions",
      description: "Predictive alerts drive a 31% drop in 30-day returns to hospital.",
      tags: ["SNF", "AL"],
      link: "/skilled-nursing"
    },
    {
      icon: <Star className="w-12 h-12 text-simpl-green" />,
      title: "Love Your Survey",
      description: "Auto-formatted 672/802, F-tag risk radar, 5-Star dashboards.",
      tags: ["SNF", "AL"],
      link: "/skilled-nursing"
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Make Nurses Happy",
      description: "92% faster MDS & ADL charting; overtime down 48%.",
      tags: ["SNF", "AL"],
      link: "/charting"
    },
    {
      icon: <Database className="w-12 h-12 text-simpl-green" />,
      title: "PCC & Beyond",
      description: "Instant two-way sync with PointClickCare, pharmacy, labs, payroll.",
      tags: ["SNF", "AL"],
      link: "/interoperability"
    }
  ]

  const careTypes = [
    {
      title: "Skilled Nursing Facilities",
      description: "PDPM optimization, readmission reduction, and Five-Star compliance tools designed specifically for SNFs.",
      image: "/skilled-nursing-dashboard.png",
      href: "/skilled-nursing",
      highlights: [
        "+24% PDPM revenue per patient day",
        "31% fewer 30-day readmissions",
        "+2.1 average Five-Star improvement"
      ]
    },
    {
      title: "Assisted Living Communities",
      description: "Occupancy analytics, family engagement, and compliance tools that boost satisfaction and referrals.",
      image: "/assisted-living-dashboard.png", 
      href: "/assisted-living",
      highlights: [
        "95% average occupancy rate",
        "60% reduced staff turnover",
        "8.7/10 family satisfaction score"
      ]
    },
    {
      title: "Home Health Agencies",
      description: "Mobile-first platform with route optimization, remote monitoring, and comprehensive care coordination.",
      image: "/home-health-dashboard.png",
      href: "/home-health",
      highlights: [
        "35% more visits per day",
        "Route optimization saves 90min daily",
        "FDA-approved remote monitoring"
      ]
    }
  ]

  const complianceFeatures = [
    "SOC 2 Type II",
    "HIPAA Compliant",
    "HITRUST (pending)",
    "99.99% uptime SLA",
    "MFA + audit trails down to the keystroke"
  ]

  return (
    <div className="min-h-screen bg-white font-manrope">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-simpl-green/5 to-simpl-blue/5 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Above-the-Fold Copy */}
              <div className="bg-gradient-to-r from-simpl-green/10 to-simpl-blue/10 rounded-full px-6 py-3 inline-block mb-8">
                <span className="text-simpl-green font-semibold text-lg">🏥 Long-Term Care Software</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-simpl-black mb-6 font-manrope leading-tight">
                Long-Term Care Software That Actually <span className="text-simpl-green">Moves the Needle</span>
              </h1>
              
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Boost revenue, cut readmissions, and ditch paperwork—whether you run a Skilled Nursing Facility or an Assisted Living Community.
              </p>

              {/* Punchy Proof Points */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center bg-white rounded-xl p-4 shadow-sm border border-simpl-green/10">
                    <div className="text-2xl font-bold text-simpl-green mb-1">{stat.number}</div>
                    <div className="text-sm text-simpl-dark-grey font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href="/skilled-nursing"
                  className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-flex items-center justify-center gap-2"
                >
                  Explore Skilled Nursing Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/assisted-living"
                  className="bg-simpl-blue hover:bg-simpl-dark-blue text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-flex items-center justify-center gap-2"
                >
                  Explore Assisted Living Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Secondary CTA */}
              <div className="mb-8">
                <Link
                  href="/book-demo"
                  className="border-2 border-simpl-green hover:bg-simpl-green hover:text-white text-simpl-green px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  Book a Demo
                  <Calendar className="w-5 h-5" />
                </Link>
              </div>

              {/* Social Proof Strip */}
              <div className="text-sm text-simpl-dark-grey">
                <p className="mb-2 font-medium">Trusted by leading long-term care providers</p>
              </div>
            </div>
            
            {/* Hero Image/Video */}
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="/long-term-care-image-1.png"
                    alt="Long-term care platform demonstration"
                    className="w-full h-auto"
                  />
                  {/* Video Play Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-300 transform hover:scale-110">
                      <Play className="w-8 h-8 text-simpl-green ml-1" />
                    </button>
                  </div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">99.8%</div>
                  <div className="text-sm">eMAR Accuracy</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">+$310K</div>
                  <div className="text-sm">Annual Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefit Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Why Long-Term Care Leaders Choose Simpl
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Six core benefits that drive measurable results across skilled nursing and assisted living operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corebenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-3 font-manrope">{benefit.title}</h3>
                <p className="text-lg text-simpl-dark-grey font-manrope leading-relaxed mb-4">
                  {benefit.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {benefit.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tag.includes('SNF') ? 'bg-simpl-green/10 text-simpl-green' : 'bg-simpl-blue/10 text-simpl-blue'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href="/skilled-nursing"
                  className="text-simpl-green hover:text-simpl-dark-green font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Type Navigation */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Solutions by Care Setting
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Tailored platforms designed for the unique needs of each long-term care environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {careTypes.map((care, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Replaced image banner with large icon area */}
                <div className={`h-48 flex items-center justify-center ${
                  care.title.includes('Assisted Living') ? 'bg-simpl-blue/10' : 'bg-simpl-green/10'
                }`}>
                  <img
                    src={
                      care.title.includes('Skilled Nursing') ? '/icon-snf.svg' :
                      care.title.includes('Assisted Living') ? '/icon-al.svg' :
                      '/icon-home-health.svg'
                    }
                    alt={`${care.title} icon`}
                    className="w-20 h-20 md:w-24 md:h-24"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-simpl-black mb-2 font-manrope">{care.title}</h3>
                  <p className="text-simpl-dark-grey mb-4 font-manrope leading-relaxed">
                    {care.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {care.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-simpl-green flex-shrink-0" />
                        <span className="text-sm text-simpl-dark-grey">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={care.href}
                    className="bg-simpl-green hover:bg-simpl-dark-green text-white px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  >
                    Explore Solutions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                Security & Compliance You Can Trust
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Enterprise-grade security with the compliance standards that long-term care demands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
            Ready to Move the Needle on Your Long-Term Care Operations?
          </h2>
          <p className="text-xl text-simpl-dark-grey mb-8 font-manrope">
            Join leading SNFs and assisted living communities that have transformed their operations with Simpl Healthcare.
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

      {/* Footer */}
      <Footer />
    </div>
  )
} 