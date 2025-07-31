'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-simpl-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Logo and Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/simpl-logo-white.svg"
                alt="Simpl Healthcare"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
                quality={100}
              />
            </Link>
            <p className="text-white/80 text-lg leading-relaxed max-w-md mb-6 font-manrope">
              First AI-Powered All-in-One EHR platform designed to simplify workflows 
              and maximize outcomes for healthcare practices of every size.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <a href="mailto:info@simplhealthcare.com" className="text-white/80 hover:text-white transition-colors text-base">
                  info@simplhealthcare.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <a href="tel:+1-555-123-4567" className="text-white/80 hover:text-white transition-colors text-base">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-white/80 text-base">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Features</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/cloud-ehr" className="text-white/80 hover:text-white transition-colors font-medium">Cloud EHR</Link></li>
              <li><Link href="/practice-management" className="text-white/80 hover:text-white transition-colors font-medium">Practice Management</Link></li>
              <li><Link href="/interoperability" className="text-white/80 hover:text-white transition-colors font-medium">Interoperability</Link></li>
              <li><Link href="/telehealth" className="text-white/80 hover:text-white transition-colors font-medium">Telehealth</Link></li>
            </ul>
          </div>

          {/* LTPAC */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">LTPAC</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/long-term-care" className="text-white/80 hover:text-white transition-colors font-medium">Long-Term Care</Link></li>
              <li><Link href="/assisted-living" className="text-white/80 hover:text-white transition-colors font-medium">Assisted Living</Link></li>
              <li><Link href="/skilled-nursing" className="text-white/80 hover:text-white transition-colors font-medium">Skilled Nursing</Link></li>
              <li><Link href="/home-health" className="text-white/80 hover:text-white transition-colors font-medium">Home Health</Link></li>
            </ul>
          </div>

          {/* Primary Care */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Primary Care</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/family-medicine" className="text-white/80 hover:text-white transition-colors font-medium">Family Medicine</Link></li>
              <li><Link href="/internal-medicine" className="text-white/80 hover:text-white transition-colors font-medium">Internal Medicine</Link></li>
              <li><Link href="/pediatrics" className="text-white/80 hover:text-white transition-colors font-medium">Pediatrics</Link></li>
              <li><Link href="/urgent-care" className="text-white/80 hover:text-white transition-colors font-medium">Urgent Care</Link></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Company</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors font-medium">About Us</Link></li>
              <li><Link href="/testimonials" className="text-white/80 hover:text-white transition-colors font-medium">Testimonials</Link></li>
              <li><Link href="/careers" className="text-white/80 hover:text-white transition-colors font-medium">Careers</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors font-medium">Contact Us</Link></li>
            </ul>
            
            <h3 className="font-bold mb-6 mt-10 text-xl text-white">Support</h3>
            <ul className="space-y-3 text-base">
              <li><a href="https://www.simplhealthcare.com/support" className="text-white/80 hover:text-white transition-colors font-medium" target="_blank" rel="noopener noreferrer">Support Center</a></li>
              <li><a href="https://simplhealthcare1.statuspage.io/" className="text-white/80 hover:text-white transition-colors font-medium" target="_blank" rel="noopener noreferrer">Service Status</a></li>
              <li><a href="https://app.vanta.com/simplhealthcare/trust/q9qiflctf6ips1g5kuxboj" className="text-white/80 hover:text-white transition-colors font-medium" target="_blank" rel="noopener noreferrer">Security & Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 mb-16 border border-white/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-white">Let's Talk Healthcare!</h3>
            <p className="text-white/80 mb-8 text-lg leading-relaxed font-manrope">
              Stay up-to-date with the latest healthcare news, innovation, and technology from around the world - 
              and be the first to find out about Simpl updates & exclusive offers. Don't miss out!
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-6 py-4 rounded-xl text-simpl-black text-lg font-medium"
                required
              />
              <button
                type="submit"
                className="bg-simpl-dark-green hover:bg-simpl-green text-white px-8 py-4 rounded-xl font-bold text-lg btn-hover shadow-lg"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://www.facebook.com/simplhealthcare" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="https://twitter.com/simplhealthcare" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/simplhealthcare" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/company/simpl-healthcare/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-lg">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-6 md:mb-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors font-medium">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors font-medium">Terms & Conditions</Link>
              <Link href="/business-associate-agreement" className="hover:text-white transition-colors font-medium">Business Associate Agreement</Link>
            </div>
            <div className="text-center md:text-right font-medium">
              © 2024 Simpl Healthcare. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 