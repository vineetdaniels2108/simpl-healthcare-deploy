'use client'

import Navigation from './Navigation'
import Footer from './Footer'
import { ReactNode } from 'react'

interface PageTemplateProps {
  title: string
  subtitle?: string
  description: string
  heroImage?: string
  heroImageAlt?: string
  children: ReactNode
  showHeroStats?: boolean
  heroStats?: Array<{
    number: string
    label: string
  }>
}

const PageTemplate = ({ 
  title, 
  subtitle,
  description, 
  heroImage, 
  heroImageAlt,
  children, 
  showHeroStats = false,
  heroStats = []
}: PageTemplateProps) => {
  return (
    <main>
      <Navigation />
      
                {/* Hero Section */}
          <section className="pt-42 pb-20 bg-gradient-to-br from-simpl-green via-simpl-green to-simpl-dark-green relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {subtitle && (
                <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                  <span className="text-white font-semibold text-lg">{subtitle}</span>
                </div>
              )}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-manrope leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-manrope mb-8">
                {description}
              </p>
              
              {showHeroStats && heroStats.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {heroStats.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {heroImage && (
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 border border-white/20 backdrop-blur-sm">
                  <img
                    src={heroImage}
                    alt={heroImageAlt || title}
                    className="w-full h-auto rounded-xl"
                    loading="eager"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-simpl-grey via-white to-simpl-green/5">
        {children}
      </div>
      
      <Footer />
    </main>
  )
}

export default PageTemplate 