import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Star, ArrowRight, Clock, Users, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Testimonials & Case Studies - Simpl Healthcare',
  description: 'Discover how our customers improved their business efficiency and increased client satisfaction with Simpl Healthcare\'s AI-powered EHR platform.',
  keywords: 'customer testimonials, case studies, healthcare success stories, EHR results, practice efficiency, patient satisfaction',
}

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sheryl Neelankavil",
      title: "MD",
      practice: "Family Medicine Practice",
      image: "/dr-sheryl-testimonial.jpg",
      quote: "With Simpl, each physician in my practice saved over 18 hours per week in documentation work and increased engagement time with patients.",
      results: [
        "18+ hours saved per week per physician",
        "Increased patient engagement time",
        "Streamlined documentation workflow",
        "Enhanced practice efficiency"
      ],
      caseStudyLink: "/case-studies/dr-sheryl-neelankavil",
      featured: true
    },
    {
      id: 2,
      name: "The Armory",
      title: "Healthcare Facility",
      practice: "Comprehensive Care Center",
      image: "/the-armory-testimonial.jpg",
      quote: "The Armory uses Simpl to streamline administrative tasks by reducing the patient intake process from 1 hour to 5-10 minutes.",
      results: [
        "Patient intake reduced from 1 hour to 5-10 minutes",
        "Streamlined administrative tasks",
        "Optimized patient care workflows",
        "Significant time savings"
      ],
      caseStudyLink: "/case-studies/the-armory",
      featured: true
    }
  ]



  const stats = [
    { number: "18+", label: "Hours Saved Per Week", icon: Clock },
    { number: "90%", label: "Faster Patient Intake", icon: TrendingUp },
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "99.9%", label: "System Uptime", icon: CheckCircle }
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
          <div className="text-center text-white">
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <span className="text-white font-semibold text-lg">⭐ Customer Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-manrope leading-tight">
              Simpl Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-manrope mb-8 max-w-4xl mx-auto">
              Discover how our customers improved their business efficiency and increased client satisfaction.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <stat.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Featured Success Stories
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Real results from real customers who transformed their practices with Simpl Healthcare
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-simpl-green/10 hover:shadow-3xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-simpl-green/10 rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold text-simpl-green">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-simpl-black font-manrope">
                        {testimonial.name}
                      </h3>
                      <p className="text-simpl-dark-grey text-lg">{testimonial.title}</p>
                      <p className="text-simpl-green font-semibold">{testimonial.practice}</p>
                    </div>
                  </div>

                  <blockquote className="text-xl text-simpl-black leading-relaxed mb-8 font-manrope italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-simpl-black mb-4">Key Results:</h4>
                    <ul className="space-y-2">
                      {testimonial.results.map((result, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-simpl-green flex-shrink-0" />
                          <span className="text-simpl-dark-grey">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={testimonial.caseStudyLink}
                    className="inline-flex items-center bg-simpl-green hover:bg-simpl-dark-green text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-simpl-black mb-6 font-manrope">
            Let's Talk Healthcare!
          </h2>
          <p className="text-xl text-simpl-dark-grey mb-8 font-manrope">
            Stay up-to-date with the latest healthcare news, innovation, and technology from around the world - and be the first to find out about Simpl updates & exclusive offers. Don't miss out!
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border border-simpl-green/20 focus:ring-2 focus:ring-simpl-green focus:border-simpl-green outline-none"
              required
            />
            <button
              type="submit"
              className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-simpl-dark-grey mt-4">
            Join thousands of healthcare professionals already subscribed
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-simpl-green via-simpl-green to-simpl-dark-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-manrope">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-manrope">
            See how Simpl Healthcare can transform your practice with a personalized demo
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-demo"
              className="bg-white hover:bg-white/90 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-flex items-center justify-center"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-simpl-green px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 