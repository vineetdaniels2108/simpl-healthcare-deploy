'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Calendar, ArrowRight } from 'lucide-react'

const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if modal has been shown in this session
    const modalShown = sessionStorage.getItem('exitIntentModalShown')
    if (modalShown) {
      setHasShown(true)
      return
    }

    let isExiting = false
    let timeoutId: NodeJS.Timeout

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page (likely to close tab/window)
      if (e.clientY <= 0 && !isExiting && !hasShown) {
        isExiting = true
        setShowModal(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentModalShown', 'true')
      }
    }

    const handleBeforeUnload = () => {
      if (!hasShown) {
        setShowModal(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentModalShown', 'true')
      }
    }

    // Time-based trigger: Show modal after 45 seconds if user hasn't left
    timeoutId = setTimeout(() => {
      if (!hasShown && !isExiting) {
        setShowModal(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentModalShown', 'true')
      }
    }, 45000) // 45 seconds

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [hasShown])

  const closeModal = () => {
    setShowModal(false)
  }

  const handleBookDemo = () => {
    // Track the conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exit_intent_demo_click', {
        event_category: 'Lead Generation',
        event_label: 'Exit Intent Modal'
      })
    }
    closeModal()
  }

  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full mx-auto shadow-2xl border border-simpl-green/20 animate-slideUp">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-simpl-green to-simpl-dark-green text-white p-6 rounded-t-2xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-8 h-8" />
            <h2 className="text-2xl font-bold font-manrope">Wait! Don't Leave Yet</h2>
          </div>
          <p className="text-white/90 font-manrope">
            See how Simpl can transform your practice in just 15 minutes
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-simpl-green rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-simpl-dark-grey font-manrope">
                <strong className="text-simpl-black">Save 18+ hours per week</strong> with AI-powered automation
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-simpl-green rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-simpl-dark-grey font-manrope">
                <strong className="text-simpl-black">Integrate with 90% of hospitals</strong> seamlessly
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-simpl-green rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-simpl-dark-grey font-manrope">
                <strong className="text-simpl-black">100% cloud-based</strong> - access anywhere, anytime
              </p>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-simpl-green/10 to-simpl-blue/10 border border-simpl-green/20 rounded-xl p-4 mb-6">
            <p className="text-center text-simpl-green font-bold text-lg font-manrope mb-2">
              🎯 Limited Time: Free Setup & Implementation
            </p>
            <p className="text-center text-simpl-dark-grey text-sm font-manrope">
              Book your demo today and get $2,500 value absolutely free
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Link
              href="/book-demo"
              onClick={handleBookDemo}
              className="w-full bg-simpl-green hover:bg-simpl-dark-green text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl font-manrope"
            >
              Book Your Free Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={closeModal}
              className="w-full text-simpl-dark-grey hover:text-simpl-green py-3 font-semibold transition-colors font-manrope"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExitIntentModal 