'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5 pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Green Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-simpl-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-72 h-72 bg-simpl-dark-green rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-simpl-green/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Main Hero Content */}
          <div className="space-y-8">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-simpl-green/15 to-simpl-green/10 border-2 border-simpl-green/30 rounded-full mb-6 shadow-lg shadow-simpl-green/20">
              <span className="text-simpl-green font-bold text-lg md:text-xl">🚀 First AI-Powered All-in-One EHR</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-simpl-black leading-tight max-w-5xl mx-auto font-manrope tracking-tight">
              <span className="text-simpl-green">Simpl</span> All-In-One Platform for a Thriving Practice
            </h1>
            <p className="text-lg md:text-xl text-simpl-dark-grey leading-relaxed max-w-4xl mx-auto font-manrope">
              Simplify workflows and maximize outcomes with integrated EHR and AI-powered solutions
              tailored for practices of every size and type.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/book-demo"
              className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-md font-semibold text-lg btn-hover inline-block text-center font-manrope shadow-lg shadow-simpl-green/25"
            >
              Book a Demo
            </Link>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center justify-center gap-3 bg-white border-2 border-simpl-green hover:bg-simpl-green hover:text-white text-simpl-green px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 font-manrope shadow-lg"
            >
              <Play className="w-5 h-5" />
              Watch a Demo
            </button>
          </div>

          {/* Stats with Green Accents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">18+</div>
              <div className="text-sm text-white/90 font-medium">Hours Saved Per Week</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">90%</div>
              <div className="text-sm text-white/90 font-medium">Hospital Integration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/90 font-medium">Cloud-Based Access</div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Image - ALTERNATIVE OPTION 2 */}
        <div className="relative mt-16">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-simpl-grey p-6 border border-simpl-green/20">
              <div className="absolute inset-0 bg-gradient-to-br from-simpl-green/5 to-transparent"></div>
              {/* Modern Healthcare Interface */}
              <img
                src="/vwcfva.png"
                alt="Modern Healthcare Management Interface"
                className="relative z-10 w-full h-auto rounded-xl shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 text-center">
          <p className="text-xl md:text-2xl text-simpl-dark-grey mb-8 max-w-4xl mx-auto font-manrope leading-relaxed">
            <span className="text-simpl-green font-semibold">Simpl Healthcare</span> solutions
            streamlines your practice, from automating front office admin tasks to optimizing patient care.
          </p>

          <div className="relative inline-block mb-8">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-simpl-grey p-4 border border-simpl-green/20">
              <div className="absolute inset-0 bg-gradient-to-br from-simpl-green/5 to-transparent"></div>
              {/* Video Preview with Overlay Button */}
              <div className="relative z-10">
                {/* Animated background or video preview */}
                <div className="relative bg-gradient-to-br from-simpl-blue/10 to-simpl-green/10 rounded-lg aspect-video flex items-center justify-center">
                  {/* Animated healthcare technology background */}
                  <img
                    src="/sadasad.png"
                    alt="Healthcare Technology Demo Preview"
                    className="w-full h-full object-cover rounded-lg opacity-80"
                  />
                  
                  {/* Animated pulse overlay to simulate video */}
                  <div className="absolute inset-0 bg-gradient-to-r from-simpl-green/20 via-transparent to-simpl-blue/20 rounded-lg animate-pulse"></div>
                  
                  {/* Tech grid overlay for video feel */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-1 p-4">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div
                          key={i}
                          className={`bg-simpl-green/20 rounded-sm ${
                            Math.random() > 0.7 ? 'animate-pulse' : ''
                          }`}
                          style={{
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${1 + Math.random()}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Overlaid Watch Overview Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center gap-3 text-simpl-green hover:text-simpl-dark-green cursor-pointer transition-all duration-300 text-lg font-semibold font-manrope bg-white/95 hover:bg-white px-8 py-4 rounded-full border-2 border-simpl-green/30 hover:border-simpl-green shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 bg-simpl-green/10 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-simpl-green ml-1" />
                    </div>
                    Watch Overview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-simpl-green text-2xl font-manrope"
            >
              ×
            </button>
            <div className="w-full h-full flex items-center justify-center text-simpl-black rounded-lg">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 text-simpl-green" />
                <p className="text-lg font-semibold font-manrope">Demo Video</p>
                <p className="text-sm text-simpl-dark-grey mt-2 font-manrope">
                  Original video: https://streamable.com/e/4gkcpf
                </p>
                <p className="text-xs text-simpl-dark-grey mt-4 font-manrope">
                  Video would be embedded here in production
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeroSection 