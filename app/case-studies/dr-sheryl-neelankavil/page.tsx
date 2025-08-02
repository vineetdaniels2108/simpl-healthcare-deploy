import type { Metadata } from 'next'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock, TrendingUp, Users, CheckCircle, Star, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dr. Sheryl Neelankavil Case Study - Simpl Healthcare',
  description: 'Learn how Dr. Sheryl Neelankavil\'s family medicine practice saved over 18 hours per week per physician and increased patient engagement using Simpl Healthcare.',
  keywords: 'case study, family medicine, documentation efficiency, patient engagement, EHR success story',
}

export default function DrSherylCaseStudy() {
  const keyMetrics = [
    { number: "18+", label: "Hours Saved Per Week Per Physician", icon: Clock },
    { number: "65%", label: "Reduction in Documentation Time", icon: TrendingUp },
    { number: "40%", label: "Increase in Patient Engagement", icon: Users },
    { number: "95%", label: "Staff Satisfaction Rate", icon: Star }
  ]

  const challenges = [
    "Excessive time spent on documentation reducing patient face-time",
    "Inefficient workflows causing physician burnout",
    "Lack of integrated systems leading to duplicate data entry",
    "Patient engagement suffering due to time constraints",
    "Administrative overhead impacting practice profitability"
  ]

  const solutions = [
    {
      title: "AI-Powered Documentation",
      description: "Automated note generation and smart templates reduced documentation time by 65%"
    },
    {
      title: "Streamlined Workflows",
      description: "Integrated care pathways eliminated redundant processes and improved efficiency"
    },
    {
      title: "Enhanced Patient Portal",
      description: "Improved patient communication and engagement tools increased satisfaction"
    },
    {
      title: "Mobile Accessibility",
      description: "Mobile-first design allowed physicians to access patient data anywhere"
    }
  ]

  const results = [
    {
      metric: "18+ hours saved per week per physician",
      impact: "Allowing more time for patient care and reducing physician burnout"
    },
    {
      metric: "40% increase in patient engagement",
      impact: "Better health outcomes and improved patient satisfaction scores"
    },
    {
      metric: "65% reduction in documentation time",
      impact: "More efficient workflows and reduced administrative burden"
    },
    {
      metric: "30% improvement in practice efficiency",
      impact: "Increased revenue potential and better resource utilization"
    }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-simpl-green via-simpl-green to-simpl-dark-green relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Navigation Breadcrumb */}
              <nav className="mb-8">
                <Link
                  href="/testimonials"
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">Back to Testimonials</span>
                </Link>
              </nav>
              
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg mb-6 border border-white/30">
                <span className="text-white font-semibold text-sm uppercase tracking-wide">Customer Success Story</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-manrope leading-tight">
                Dr. Sheryl Neelankavil's Practice Thrives with Efficiency
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-manrope mb-8">
                How a family medicine practice saved over 18 hours per week per physician and dramatically increased patient engagement time
              </p>

              {/* Practice Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
                <h3 className="text-xl font-semibold mb-4">Practice Overview</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/70">Practice Type:</span>
                    <div className="font-semibold">Family Medicine</div>
                  </div>
                  <div>
                    <span className="text-white/70">Practice Size:</span>
                    <div className="font-semibold">Multi-Physician</div>
                  </div>
                  <div>
                    <span className="text-white/70">Location:</span>
                    <div className="font-semibold">Primary Care Setting</div>
                  </div>
                  <div>
                    <span className="text-white/70">Implementation:</span>
                    <div className="font-semibold">6 months ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 border border-white/20 backdrop-blur-sm">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center">
                  <div className="w-24 h-24 bg-simpl-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">SN</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dr. Sheryl Neelankavil</h3>
                  <p className="text-white/80 text-lg mb-4">MD, Family Medicine</p>
                  <Quote className="w-8 h-8 text-white/50 mx-auto mb-4" />
                  <blockquote className="text-lg text-white/90 italic leading-relaxed">
                    "With Simpl, each physician in my practice saved over 18 hours per week in documentation work and increased engagement time with patients."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Measurable Results
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Dr. Neelankavil's practice achieved significant improvements across all key performance indicators
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 text-center hover:shadow-xl transition-shadow">
                <metric.icon className="w-12 h-12 text-simpl-green mb-4 mx-auto" />
                <div className="text-3xl font-bold text-simpl-green mb-2">{metric.number}</div>
                <div className="text-sm text-simpl-dark-grey leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
                The Challenge
              </h2>
              <p className="text-xl text-simpl-dark-grey leading-relaxed mb-8 font-manrope">
                Like many family medicine practices, Dr. Neelankavil's team was struggling with the administrative burden of traditional EHR systems that were consuming valuable time that should have been spent with patients.
              </p>
              
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-simpl-dark-grey leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
              <h3 className="text-2xl font-bold text-simpl-black mb-6">Impact on Practice</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">45 hours</div>
                  <div className="text-sm text-simpl-dark-grey">Weekly documentation time per physician</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">60%</div>
                  <div className="text-sm text-simpl-dark-grey">Of time spent on administrative tasks</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">Low</div>
                  <div className="text-sm text-simpl-dark-grey">Physician and patient satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              The Simpl Solution
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              We implemented a comprehensive solution tailored to the specific needs of family medicine practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">
                  {solution.title}
                </h3>
                <p className="text-simpl-dark-grey leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Transformational Results
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              The implementation of Simpl Healthcare delivered immediate and sustained improvements
            </p>
          </div>

          <div className="space-y-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5 rounded-2xl p-8 border border-simpl-green/10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-simpl-green mb-4 font-manrope">
                      {result.metric}
                    </h3>
                  </div>
                  <div>
                    <p className="text-lg text-simpl-dark-grey leading-relaxed">
                      {result.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Implementation Journey
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              A smooth transition that delivered results from day one
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-simpl-green/20"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Week 1-2: Setup & Training</h3>
                  <p className="text-simpl-dark-grey">System configuration and comprehensive staff training</p>
                </div>
                <div className="w-8 h-8 bg-simpl-green rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-8 h-8 bg-simpl-green rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Week 3-4: Go Live</h3>
                  <p className="text-simpl-dark-grey">Gradual rollout with real-time support and adjustments</p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Month 2-3: Optimization</h3>
                  <p className="text-simpl-dark-grey">Fine-tuning workflows and maximizing efficiency gains</p>
                </div>
                <div className="w-8 h-8 bg-simpl-green rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-8 h-8 bg-simpl-green rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Month 4-6: Full Benefits</h3>
                  <p className="text-simpl-dark-grey">Complete realization of time savings and efficiency improvements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-20 bg-gradient-to-br from-simpl-green via-simpl-green to-simpl-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 text-white/30 mx-auto mb-8" />
          <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 font-manrope leading-tight">
            "The transformation has been remarkable. Our physicians are happier, our patients are more engaged, and our practice is more profitable. Simpl didn't just give us an EHR – they gave us our time back."
          </blockquote>
          <div className="text-xl text-white/90">
            <strong>Dr. Sheryl Neelankavil, MD</strong>
          </div>
          <div className="text-lg text-white/70">
            Family Medicine Practice
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-simpl-dark-grey mb-8 font-manrope">
            See how Simpl Healthcare can deliver similar results for your practice
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-demo"
              className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-flex items-center justify-center"
            >
              Schedule Your Demo
            </Link>
            <Link
              href="/testimonials"
              className="border-2 border-simpl-green text-simpl-green hover:bg-simpl-green hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 