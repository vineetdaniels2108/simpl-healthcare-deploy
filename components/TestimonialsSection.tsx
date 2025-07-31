'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "With Simpl Healthcare, each physician in my practice saved over 18 hours per week in documentation work.",
      author: "Dr. Sheryl Neelankavil",
      role: "Family Medicine Physician"
    },
    {
      quote: "Simpl technology allows you to refocus on the patient-provider relationship and significantly reduce burnout. It is going to improve accuracy, reduce cost, and increase quality of care.",
      author: "Dr. Dan Fosselman",
      role: "Healthcare Professional"
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentQuote = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-simpl-green to-simpl-dark-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Content */}
          <div className="px-12">
            <div className="text-6xl text-white/20 mb-4">"</div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              {currentQuote.quote}
            </blockquote>
            <div className="text-lg">
              <div className="font-semibold">{currentQuote.author}</div>
              {currentQuote.role && (
                <div className="text-white/80 text-sm mt-1">{currentQuote.role}</div>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 