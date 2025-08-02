import type { Metadata } from 'next'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock, TrendingUp, Users, CheckCircle, Star, Quote, Timer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Armory Case Study - Simpl Healthcare',
  description: 'Learn how The Armory streamlined workflows and reduced patient intake process from 1 hour to 5-10 minutes using Simpl Healthcare\'s comprehensive care platform.',
  keywords: 'case study, workflow optimization, patient intake, comprehensive care, healthcare efficiency, administrative automation',
}

export default function TheArmoryCaseStudy() {
  const keyMetrics = [
    { number: "90%", label: "Reduction in Patient Intake Time", icon: Timer },
    { number: "5-10min", label: "New Patient Intake Process", icon: Clock },
    { number: "75%", label: "Administrative Efficiency Gain", icon: TrendingUp },
    { number: "98%", label: "Staff Satisfaction Rate", icon: Star }
  ]

  const challenges = [
    "Patient intake process taking up to 1 hour per patient",
    "Redundant paperwork and manual data entry",
    "Inefficient workflow causing patient delays and frustration",
    "Staff overwhelmed with administrative tasks",
    "Limited time for actual patient care activities",
    "Poor coordination between different departments"
  ]

  const solutions = [
    {
      title: "Automated Patient Intake",
      description: "Digital forms and pre-registration streamlined the entire intake process from 60 minutes to 5-10 minutes"
    },
    {
      title: "Integrated Workflow Management",
      description: "Unified platform eliminated duplicate data entry and improved inter-departmental coordination"
    },
    {
      title: "Smart Administrative Tools",
      description: "AI-powered scheduling and documentation reduced manual administrative burden by 75%"
    },
    {
      title: "Real-time Care Coordination",
      description: "Instant communication tools improved care team collaboration and patient experience"
    }
  ]

  const results = [
    {
      metric: "Patient intake reduced from 1 hour to 5-10 minutes",
      impact: "Dramatically improved patient experience and operational efficiency"
    },
    {
      metric: "75% reduction in administrative overhead",
      impact: "Staff can focus more time on direct patient care activities"
    },
    {
      metric: "50% increase in daily patient capacity",
      impact: "Enhanced revenue potential and better resource utilization"
    },
    {
      metric: "95% improvement in patient satisfaction scores",
      impact: "Better patient experience leading to increased loyalty and referrals"
    }
  ]

  const workflowBefore = [
    { step: "Manual paperwork completion", time: "15-20 min" },
    { step: "Insurance verification", time: "10-15 min" },
    { step: "Medical history review", time: "15-20 min" },
    { step: "Data entry and verification", time: "10-15 min" },
    { step: "Final processing", time: "5-10 min" }
  ]

  const workflowAfter = [
    { step: "Digital pre-registration", time: "2-3 min" },
    { step: "Automated insurance check", time: "1-2 min" },
    { step: "AI-assisted history capture", time: "2-3 min" },
    { step: "Instant data validation", time: "< 1 min" },
    { step: "Ready for care", time: "< 1 min" }
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
                The Armory Streamlines Workflows
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-manrope mb-8">
                How a comprehensive care center reduced patient intake from 1 hour to 5-10 minutes and optimized patient care workflows
              </p>

              {/* Facility Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
                <h3 className="text-xl font-semibold mb-4">Facility Overview</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-white/70">Facility Type:</span>
                    <div className="font-semibold">Comprehensive Care Center</div>
                  </div>
                  <div>
                    <span className="text-white/70">Services:</span>
                    <div className="font-semibold">Multi-Specialty Care</div>
                  </div>
                  <div>
                    <span className="text-white/70">Patient Volume:</span>
                    <div className="font-semibold">High-Volume Facility</div>
                  </div>
                  <div>
                    <span className="text-white/70">Implementation:</span>
                    <div className="font-semibold">8 months ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 border border-white/20 backdrop-blur-sm">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center">
                  <div className="w-24 h-24 bg-simpl-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">TA</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">The Armory</h3>
                  <p className="text-white/80 text-lg mb-4">Comprehensive Care Center</p>
                  <Quote className="w-8 h-8 text-white/50 mx-auto mb-4" />
                  <blockquote className="text-lg text-white/90 italic leading-relaxed">
                    "The Armory uses Simpl to streamline administrative tasks by reducing the patient intake process from 1 hour to 5-10 minutes."
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
              Remarkable Transformation
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              The Armory achieved unprecedented efficiency gains across all operational metrics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 text-center hover:shadow-xl transition-shadow">
                <metric.icon className="w-12 h-12 text-simpl-blue mb-4 mx-auto" />
                <div className="text-3xl font-bold text-simpl-blue mb-2">{metric.number}</div>
                <div className="text-sm text-simpl-dark-grey leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Workflow Transformation
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              See how Simpl transformed The Armory's patient intake process
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Before */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
              <h3 className="text-3xl font-bold text-red-600 mb-8 text-center">Before Simpl</h3>
              <div className="space-y-4">
                {workflowBefore.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-red-200 flex justify-between items-center">
                    <div className="text-simpl-black font-medium">{step.step}</div>
                    <div className="text-red-600 font-bold">{step.time}</div>
                  </div>
                ))}
                <div className="bg-red-600 text-white rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold">Total: 55-80 minutes</div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-green-50 to-simpl-green/10 rounded-3xl p-8 border border-green-100">
              <h3 className="text-3xl font-bold text-simpl-green mb-8 text-center">After Simpl</h3>
              <div className="space-y-4">
                {workflowAfter.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-green-200 flex justify-between items-center">
                    <div className="text-simpl-black font-medium">{step.step}</div>
                    <div className="text-simpl-green font-bold">{step.time}</div>
                  </div>
                ))}
                <div className="bg-simpl-green text-white rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold">Total: 5-10 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
                The Challenge
              </h2>
              <p className="text-xl text-simpl-dark-grey leading-relaxed mb-8 font-manrope">
                As a comprehensive care center serving a diverse patient population, The Armory was struggling with inefficient intake processes that were creating bottlenecks and negatively impacting patient experience.
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
              <h3 className="text-2xl font-bold text-simpl-black mb-6">Operational Impact</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">1 hour</div>
                  <div className="text-sm text-simpl-dark-grey">Average patient intake time</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
                  <div className="text-sm text-simpl-dark-grey">Of staff time on administrative tasks</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-red-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">High</div>
                  <div className="text-sm text-simpl-dark-grey">Patient frustration and wait times</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              The Simpl Solution
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              We implemented a comprehensive workflow optimization solution designed for high-volume care centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-simpl-green/5 to-simpl-blue/5 rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
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
      <section className="py-20 bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Outstanding Results
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              The implementation delivered immediate and measurable improvements across all key metrics
            </p>
          </div>

          <div className="space-y-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-simpl-green/10 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-simpl-blue mb-4 font-manrope">
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

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Implementation Process
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              A carefully orchestrated rollout that minimized disruption while maximizing results
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-simpl-blue/20"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Phase 1: Assessment & Planning</h3>
                  <p className="text-simpl-dark-grey">Comprehensive workflow analysis and solution design</p>
                  <div className="text-sm text-simpl-green font-semibold mt-2">Week 1-2</div>
                </div>
                <div className="w-8 h-8 bg-simpl-blue rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-8 h-8 bg-simpl-blue rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Phase 2: System Setup & Integration</h3>
                  <p className="text-simpl-dark-grey">Platform configuration and existing system integration</p>
                  <div className="text-sm text-simpl-green font-semibold mt-2">Week 3-4</div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Phase 3: Staff Training & Pilot</h3>
                  <p className="text-simpl-dark-grey">Comprehensive training and limited pilot program</p>
                  <div className="text-sm text-simpl-green font-semibold mt-2">Week 5-6</div>
                </div>
                <div className="w-8 h-8 bg-simpl-blue rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-8 h-8 bg-simpl-blue rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Phase 4: Full Deployment</h3>
                  <p className="text-simpl-dark-grey">Organization-wide rollout with ongoing support</p>
                  <div className="text-sm text-simpl-green font-semibold mt-2">Week 7-8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-20 bg-gradient-to-br from-simpl-blue via-simpl-blue to-simpl-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-16 h-16 text-white/30 mx-auto mb-8" />
          <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 font-manrope leading-tight">
            "Simpl has completely transformed our operations. What used to take an hour now takes minutes. Our staff is happier, our patients are more satisfied, and we can serve more people than ever before."
          </blockquote>
          <div className="text-xl text-white/90">
            <strong>Operations Director, The Armory</strong>
          </div>
          <div className="text-lg text-white/70">
            Comprehensive Care Center
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-simpl-dark-grey mb-8 font-manrope">
            Discover how Simpl Healthcare can optimize your workflows and enhance patient experience
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-demo"
              className="bg-simpl-blue hover:bg-simpl-dark-blue text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-flex items-center justify-center"
            >
              Schedule Your Demo
            </Link>
            <Link
              href="/testimonials"
              className="border-2 border-simpl-blue text-simpl-blue hover:bg-simpl-blue hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
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