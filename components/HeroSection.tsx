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
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-simpl-green/20 shadow-xl">
              <div className="text-3xl font-bold text-simpl-green mb-2">18+</div>
              <div className="text-sm text-simpl-dark-grey font-medium">Hours Saved Per Week</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-simpl-green/20 shadow-xl">
              <div className="text-3xl font-bold text-simpl-green mb-2">90%</div>
              <div className="text-sm text-simpl-dark-grey font-medium">Hospital Integration</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-simpl-green/20 shadow-xl">
              <div className="text-3xl font-bold text-simpl-green mb-2">100%</div>
              <div className="text-sm text-simpl-dark-grey font-medium">Cloud-Based Access</div>
            </div>
          </div>
        </div>

        {/* Main Homepage Video */}
        <div className="relative mt-16">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-simpl-grey p-6 border border-simpl-green/20">
              <div className="absolute inset-0 bg-gradient-to-br from-simpl-green/5 to-transparent"></div>
              {/* Homepage Video */}
              <video
                className="relative z-10 w-full h-auto rounded-xl shadow-lg"
                controls
                poster="/take-control-simpl.png"
                preload="metadata"
              >
                <source src="/homepage-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Additional Content Section - Removed second image/video */}
        <div className="mt-20 text-center">
          <p className="text-xl md:text-2xl text-simpl-dark-grey mb-8 max-w-4xl mx-auto font-manrope leading-relaxed">
            <span className="text-simpl-green font-semibold">Simpl Healthcare</span> solutions
            streamlines your practice, from automating front office admin tasks to optimizing patient care.
          </p>
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
            <div className="w-full h-full flex items-center justify-center bg-black rounded-lg">
              <video
                className="w-full h-full rounded-lg"
                controls
                autoPlay
              >
                <source src="/homepage-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeroSection 