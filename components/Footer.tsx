'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

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
                <a href="mailto:support@simplhealthcare.com" className="text-white/80 hover:text-white transition-colors text-base">
                  support@simplhealthcare.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <a href="tel:+1-415-832-9146" className="text-white/80 hover:text-white transition-colors text-base">
                  (415) 832-9146
                </a>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Features</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/cloud-ehr" className="text-white/80 hover:text-white transition-colors font-medium">Cloud EHR</Link></li>
              <li><Link href="/practice-management" className="text-white/80 hover:text-white transition-colors font-medium">Practice Management</Link></li>
              <li><Link href="/charting" className="text-white/80 hover:text-white transition-colors font-medium">Smart Charting</Link></li>
              <li><Link href="/interoperability" className="text-white/80 hover:text-white transition-colors font-medium">Interoperability</Link></li>
              <li><Link href="/telehealth" className="text-white/80 hover:text-white transition-colors font-medium">Telehealth</Link></li>
            </ul>
          </div>

          {/* Long Term Care */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Long Term Care</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/long-term-care" className="text-white/80 hover:text-white transition-colors font-medium">Long-Term Care Overview</Link></li>
              <li><Link href="/skilled-nursing" className="text-white/80 hover:text-white transition-colors font-medium">Skilled Nursing Facilities</Link></li>
              <li><Link href="/assisted-living" className="text-white/80 hover:text-white transition-colors font-medium">Assisted Living</Link></li>
              <li><Link href="/home-health" className="text-white/80 hover:text-white transition-colors font-medium">Home Health</Link></li>
              <li><Link href="/pdpm-calculator" className="text-white/80 hover:text-white transition-colors font-medium">PDPM Calculator</Link></li>
              <li><Link href="/roi-analysis" className="text-white/80 hover:text-white transition-colors font-medium">ROI Analysis</Link></li>
            </ul>
          </div>

          {/* Providers */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Providers</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/behavioral-health" className="text-white/80 hover:text-white transition-colors font-medium">Behavioral Health</Link></li>
              <li><Link href="/primary-care" className="text-white/80 hover:text-white transition-colors font-medium">Primary Care Overview</Link></li>
              <li><Link href="/family-medicine" className="text-white/80 hover:text-white transition-colors font-medium">Family Medicine</Link></li>
              <li><Link href="/internal-medicine" className="text-white/80 hover:text-white transition-colors font-medium">Internal Medicine</Link></li>
              <li><Link href="/pediatrics" className="text-white/80 hover:text-white transition-colors font-medium">Pediatrics</Link></li>
              <li><Link href="/urgent-care" className="text-white/80 hover:text-white transition-colors font-medium">Urgent Care</Link></li>
            </ul>
          </div>

          {/* Payors & Company */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">Payors</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/health-plans" className="text-white/80 hover:text-white transition-colors font-medium">Health Plans</Link></li>
              <li><Link href="/medicare-advantage" className="text-white/80 hover:text-white transition-colors font-medium">Medicare Advantage</Link></li>
              <li><Link href="/value-based-care" className="text-white/80 hover:text-white transition-colors font-medium">Value-Based Care</Link></li>
            </ul>
            
            <h3 className="font-bold mb-6 mt-8 text-xl text-white">Company</h3>
            <ul className="space-y-3 text-base">
              <li><Link href="/team" className="text-white/80 hover:text-white transition-colors font-medium">About Us</Link></li>
              <li><Link href="/testimonials" className="text-white/80 hover:text-white transition-colors font-medium">Testimonials</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors font-medium">Contact Us</Link></li>
              <li><Link href="/book-demo" className="text-white/80 hover:text-white transition-colors font-medium">Book Demo</Link></li>
              <li><Link href="/support" className="text-white/80 hover:text-white transition-colors font-medium">Support & Training</Link></li>
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
              <Link href="/agreements/terms-and-conditions" className="hover:text-white transition-colors font-medium">Terms & Conditions</Link>
              <Link href="/agreements/business-associate-agreement" className="hover:text-white transition-colors font-medium">Business Associate Agreement</Link>
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