'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'

export default function BookDemo() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

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
              <span className="text-white font-semibold text-lg">📅 Schedule Your Demo</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-manrope leading-tight">
              Book Your Personalized Demo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-manrope mb-8 max-w-4xl mx-auto">
              See how Simpl Healthcare's AI-powered EHR can transform your practice. Get a personalized 30-minute demo tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - What to Expect */}
            <div>
              <h2 className="text-4xl font-bold text-simpl-black mb-8 font-manrope">
                What to Expect in Your Demo
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-simpl-green rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-simpl-black mb-2">Personalized Walkthrough</h3>
                    <p className="text-simpl-dark-grey leading-relaxed">
                      We'll customize the demo based on your practice type, size, and specific challenges you're facing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-simpl-green rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-simpl-black mb-2">Live Platform Tour</h3>
                    <p className="text-simpl-dark-grey leading-relaxed">
                      Experience our AI-powered features, intuitive interface, and seamless workflows in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-simpl-green rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-simpl-black mb-2">ROI Analysis</h3>
                    <p className="text-simpl-dark-grey leading-relaxed">
                      See exactly how Simpl can save your practice time and money with concrete metrics and projections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-simpl-green rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-simpl-black mb-2">Implementation Plan</h3>
                    <p className="text-simpl-dark-grey leading-relaxed">
                      Get a clear roadmap for implementation, training, and ongoing support tailored to your timeline.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-simpl-green/10 rounded-2xl border border-simpl-green/20">
                <h3 className="text-xl font-semibold text-simpl-black mb-4">Demo Details</h3>
                <ul className="space-y-2 text-simpl-dark-grey">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-simpl-green" />
                    <span>30-minute personalized session</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-simpl-green" />
                    <span>No commitment required</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-simpl-green" />
                    <span>Get a custom ROI report</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-simpl-green" />
                    <span>Ask any questions about implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Calendly Widget */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-simpl-green/10">
                <h3 className="text-2xl font-bold text-simpl-black mb-6 text-center font-manrope">
                  Choose Your Time Slot
                </h3>
                
                {/* Calendly Embed */}
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/d/ckk9-6hd-cng/simpl-healthcare-demo?primary_color=1aa484&hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: '100%', height: '600px' }}
                ></div>
                
                {/* Fallback Link */}
                <div className="text-center mt-6">
                  <p className="text-simpl-dark-grey text-sm mb-4">
                    Having trouble with the calendar? 
                  </p>
                  <a 
                    href="https://calendly.com/d/ckk9-6hd-cng/simpl-healthcare-demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-simpl-green hover:bg-simpl-dark-green text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 inline-flex items-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Open Calendar in New Window
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 