'use client'

import Navigation from './Navigation'
import Footer from './Footer'
import { ReactNode } from 'react'

interface HeroContent {
  badge?: string
  title: string
  subtitle: string
  stats?: Array<{ value: string; label: string }>
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  backgroundImage?: string
}

interface PageTemplateProps {
  // Original individual props (for backward compatibility)
  title?: string
  subtitle?: string
  description?: string
  heroImage?: string
  heroImageAlt?: string
  children: ReactNode
  showHeroStats?: boolean
  heroStats?: Array<{
    number: string
    label: string
  }>
  // New heroContent prop
  heroContent?: HeroContent
}

const PageTemplate = ({ 
  title, 
  subtitle,
  description, 
  heroImage, 
  heroImageAlt,
  children, 
  showHeroStats = false,
  heroStats = [],
  heroContent
}: PageTemplateProps) => {
  // If heroContent is provided, use it to override individual props
  const finalTitle = heroContent?.title || title || ''
  const finalSubtitle = heroContent?.subtitle || subtitle
  const finalDescription = description || heroContent?.subtitle || ''
  const finalHeroImage = heroContent?.backgroundImage || heroImage
  const finalHeroImageAlt = heroImageAlt || `${finalTitle} Dashboard`
  const finalShowHeroStats = heroContent?.stats ? true : showHeroStats
  const finalHeroStats = heroContent?.stats 
    ? heroContent.stats.map(stat => ({ number: stat.value, label: stat.label }))
    : heroStats

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-simpl-green via-simpl-dark-green to-simpl-blue text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-manrope">{finalTitle}</h1>
              {finalSubtitle && (
                <h2 className="text-xl md:text-2xl mb-6 text-simpl-green font-semibold font-manrope">{finalSubtitle}</h2>
              )}
              <p className="text-lg md:text-xl mb-8 text-gray-200 font-manrope">{finalDescription}</p>
              
              {finalShowHeroStats && finalHeroStats.length > 0 && (
                <div className="grid grid-cols-2 gap-6 mt-12">
                  {finalHeroStats.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-sm text-white/90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {finalHeroImage && (
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white/70 backdrop-blur-sm">
                  <img
                    src={finalHeroImage}
                    alt={finalHeroImageAlt}
                    className="w-full h-auto object-cover"
                  />
                  {/* Teal tint to harmonize mismatched palettes */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-simpl-green/20 to-simpl-blue/20 mix-blend-multiply" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Page Content */}
      {children}
      
      <Footer />
    </>
  )
}

export default PageTemplate 