import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Star, Quote, Users, Award, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Testimonials - Simpl Healthcare',
  description: 'Read what healthcare providers say about Simpl Healthcare\'s EHR platform. Real stories from practices that have transformed their operations.',
}

export default function Testimonials() {
  const heroStats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '2000+', label: 'Happy Practices' }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Family Medicine Physician',
      practice: 'Johnson Family Health',
      image: '/testimonial-sarah.jpg',
      rating: 5,
      text: 'Simpl Healthcare has revolutionized our practice. We\'ve reduced documentation time by 40% while improving patient care quality. The AI features are game-changing.',
    },
    {
      name: 'Maria Rodriguez, RN',
      title: 'Director of Nursing',
      practice: 'Sunset Assisted Living',
      image: '/testimonial-maria.jpg',
      rating: 5,
      text: 'The mobile capabilities have transformed how our nurses document care. Real-time updates and seamless communication have improved our efficiency tremendously.',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Internal Medicine',
      practice: 'Metro Internal Medicine',
      image: '/testimonial-michael.jpg',
      rating: 5,
      text: 'Implementation was smooth and the support team is outstanding. Our patients love the portal and we\'ve seen significant improvements in appointment adherence.',
    },
    {
      name: 'Jennifer Liu',
      title: 'Practice Administrator',
      practice: 'Coastal Primary Care',
      image: '/testimonial-jennifer.jpg',
      rating: 5,
      text: 'The billing integration and reporting features have streamlined our operations. We\'ve reduced administrative overhead by 30% while improving accuracy.',
    },
    {
      name: 'Dr. Robert Williams',
      title: 'Pediatrician',
      practice: 'Children\'s Health Center',
      image: '/testimonial-robert.jpg',
      rating: 5,
      text: 'The pediatric templates and growth tracking features are excellent. Parents appreciate the immunization reminders and communication tools.',
    },
    {
      name: 'Lisa Thompson',
      title: 'Home Health Director',
      practice: 'CareFirst Home Health',
      image: '/testimonial-lisa.jpg',
      rating: 5,
      text: 'The mobile platform is perfect for our field staff. Offline capabilities and GPS integration have improved our documentation accuracy significantly.',
    }
  ]

  return (
    <PageTemplate
      title="Testimonials"
      subtitle="⭐ Customer Success Stories"
      description="Hear from healthcare providers who have transformed their practices with Simpl Healthcare. Real stories, real results, real impact on patient care."
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              What Our Customers Say
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Don't just take our word for it. See how Simpl Healthcare has transformed practices across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-simpl-black">{testimonial.name}</h3>
                    <p className="text-sm text-simpl-dark-grey">{testimonial.title}</p>
                    <p className="text-sm text-simpl-green font-medium">{testimonial.practice}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-simpl-green/30 mb-4" />
                <p className="text-lg text-simpl-dark-grey leading-relaxed font-manrope">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Proven Results Across Healthcare
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Our customers consistently report significant improvements in efficiency and patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-3xl font-bold text-simpl-green mb-2">40%</div>
              <div className="text-lg text-simpl-dark-grey">Faster Documentation</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-3xl font-bold text-simpl-green mb-2">25%</div>
              <div className="text-lg text-simpl-dark-grey">More Patients Per Day</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-3xl font-bold text-simpl-green mb-2">30%</div>
              <div className="text-lg text-simpl-dark-grey">Reduced Admin Time</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-simpl-green" />
              </div>
              <div className="text-3xl font-bold text-simpl-green mb-2">95%</div>
              <div className="text-lg text-simpl-dark-grey">Implementation Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                  Featured Success Story
                </h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Riverside Medical Group</h3>
                  <p className="text-white/80 text-lg mb-4">15-provider multi-specialty practice</p>
                </div>
                <blockquote className="text-xl italic mb-6 font-manrope">
                  "After implementing Simpl Healthcare, we saw immediate improvements. Our providers are happier, our patients are more engaged, and our bottom line has improved significantly."
                </blockquote>
                <div className="text-lg">
                  <strong>- Dr. Patricia Miller, Medical Director</strong>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-xl font-bold mb-6">Key Results:</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Patient Satisfaction:</span>
                    <span className="font-bold">↑ 35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documentation Time:</span>
                    <span className="font-bold">↓ 45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Cycle:</span>
                    <span className="font-bold">↑ 28%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Staff Efficiency:</span>
                    <span className="font-bold">↑ 40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-simpl-dark-grey mb-8 max-w-3xl mx-auto font-manrope">
            See how Simpl Healthcare can transform your practice. Schedule a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-demo"
              className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
            >
              Schedule a Demo
            </a>
            <a
              href="/contact"
              className="border-2 border-simpl-green hover:bg-simpl-green hover:text-white text-simpl-green px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-block"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 