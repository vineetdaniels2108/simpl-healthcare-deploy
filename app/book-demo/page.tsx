import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Demo - Simpl Healthcare',
  description: 'Schedule a personalized demo of Simpl Healthcare\'s AI-powered EHR platform and see how we can transform your practice.',
}

export default function BookDemo() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-simpl-green via-simpl-green to-simpl-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-manrope">
              Book a <span className="text-white drop-shadow-lg">Demo</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-manrope">
              Schedule a personalized demo of Simpl Healthcare's AI-powered EHR platform 
              and discover how we can transform your practice workflow.
            </p>
            
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">30-Minute Demo</h3>
                <p className="text-white/80">Quick, focused overview tailored to your practice needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                <p className="text-white/80">Get insights from healthcare technology specialists</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <CheckCircle className="w-8 h-8 text-white mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                <p className="text-white/80">See how Simpl adapts to your specific workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 border border-simpl-green/10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-simpl-black mb-4 font-manrope">
                  Schedule Your Demo
                </h2>
                <p className="text-lg text-simpl-dark-grey font-manrope">
                  Fill out the form below and our team will contact you within 24 hours
                </p>
              </div>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">First Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Last Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium"
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Email *</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Practice Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Practice Size *</label>
                    <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium">
                      <option>Select practice size</option>
                      <option>1-5 providers</option>
                      <option>6-15 providers</option>
                      <option>16-50 providers</option>
                      <option>50+ providers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Practice Type</label>
                  <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium">
                    <option>Select practice type</option>
                    <option>Primary Care</option>
                    <option>Family Medicine</option>
                    <option>Internal Medicine</option>
                    <option>Pediatrics</option>
                    <option>Long-Term Care</option>
                    <option>Assisted Living</option>
                    <option>Skilled Nursing</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Tell us about your current challenges</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium"
                    placeholder="What challenges are you facing with your current EHR system?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-simpl-green hover:bg-simpl-dark-green text-white py-6 rounded-xl font-bold text-xl btn-hover shadow-lg font-manrope"
                >
                  <Calendar className="w-6 h-6 inline mr-3" />
                  Schedule Your Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              What to Expect
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Your demo will be customized to your practice's specific needs and challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-simpl-green">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-simpl-black">Discovery Call</h3>
              <p className="text-simpl-dark-grey">We'll learn about your practice and current workflow challenges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-simpl-green">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-simpl-black">Live Demo</h3>
              <p className="text-simpl-dark-grey">See Simpl Healthcare in action with real-world scenarios</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-simpl-green">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-simpl-black">Q&A Session</h3>
              <p className="text-simpl-dark-grey">Get answers to all your questions about features and implementation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-simpl-green">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-simpl-black">Next Steps</h3>
              <p className="text-simpl-dark-grey">Discuss pricing, implementation timeline, and onboarding process</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 