import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Simpl Healthcare',
  description: 'Get in touch with Simpl Healthcare. Contact our sales team, support, or request a demo. We\'re here to help transform your healthcare practice.',
}

export default function Contact() {
  return (
    <PageTemplate
      title="Contact Us"
      subtitle="💬 Get In Touch"
      description="Ready to transform your healthcare practice? Our team is here to help you get started with Simpl Healthcare. Reach out today for personalized assistance."
    >
      {/* Contact Options Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-simpl-green/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-simpl-black mb-4 font-manrope">
                  Send Us a Message
                </h2>
                <p className="text-lg text-simpl-dark-grey font-manrope">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                
                <div className="grid md:grid-cols-2 gap-6">
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

                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Company/Practice Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">How can we help you? *</label>
                  <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium">
                    <option>Select an option</option>
                    <option>Schedule a Demo</option>
                    <option>Get Pricing Information</option>
                    <option>Technical Support</option>
                    <option>General Inquiry</option>
                    <option>Partnership Opportunities</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3 font-manrope">Message *</label>
                  <textarea 
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-simpl-green focus:border-simpl-green transition-colors text-lg font-medium"
                    placeholder="Tell us more about your needs and how we can help..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-simpl-green hover:bg-simpl-dark-green text-white py-6 rounded-xl font-bold text-xl btn-hover shadow-lg font-manrope"
                >
                  <Send className="w-6 h-6 inline mr-3" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-simpl-black mb-8 font-manrope">
                  Get In Touch
                </h2>
                <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed">
                  We're here to help you transform your healthcare practice. Choose the best way to reach us based on your needs.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
                  <div className="flex items-center mb-4">
                    <Phone className="w-8 h-8 text-simpl-green mr-4" />
                    <h3 className="text-xl font-bold text-simpl-black">Phone Support</h3>
                  </div>
                  <p className="text-lg text-simpl-dark-grey mb-2">Main: (415) 832-9146</p>
                  <p className="text-sm text-simpl-dark-grey">Monday - Friday, 8am - 6pm PST</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
                  <div className="flex items-center mb-4">
                    <Mail className="w-8 h-8 text-simpl-green mr-4" />
                    <h3 className="text-xl font-bold text-simpl-black">Email Support</h3>
                  </div>
                  <p className="text-lg text-simpl-dark-grey mb-2">Sales: sales@simplhealthcare.com</p>
                  <p className="text-lg text-simpl-dark-grey mb-2">Support: support@simplhealthcare.com</p>
                  <p className="text-sm text-simpl-dark-grey">Response within 24 hours</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
                  <div className="flex items-center mb-4">
                    <Clock className="w-8 h-8 text-simpl-green mr-4" />
                    <h3 className="text-xl font-bold text-simpl-black">Business Hours</h3>
                  </div>
                  <p className="text-lg text-simpl-dark-grey mb-2">Monday - Friday: 8:00 AM - 6:00 PM (PST)</p>
                  <p className="text-lg text-simpl-dark-grey mb-2">Saturday: 9:00 AM - 2:00 PM (PST)</p>
                  <p className="text-lg text-simpl-dark-grey">Sunday: Closed</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-lg mb-6 text-white/90">
                  For urgent support issues or to speak with a representative right away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/book-demo"
                    className="bg-white hover:bg-gray-100 text-simpl-green px-6 py-3 rounded-xl font-bold text-lg btn-hover inline-block text-center"
                  >
                    Book Demo
                  </a>
                  <a
                    href="tel:+14158329146"
                    className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 inline-block text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 