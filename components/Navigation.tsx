'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      title: 'Features',
      items: [
        { name: 'Cloud EHR', href: '/cloud-ehr' },
        { name: 'Practice Management', href: '/practice-management' },
        { name: 'Smart Charting', href: '/charting' },
        { name: 'Interoperability', href: '/interoperability' },
        { name: 'Telehealth', href: '/telehealth' }
      ]
    },
    {
      title: 'Long Term Care',
      items: [
        { name: 'Long-Term Care Overview', href: '/long-term-care' },
        { name: 'Skilled Nursing Facilities', href: '/skilled-nursing' },
        { name: 'Assisted Living', href: '/assisted-living' },
        { name: 'Home Health', href: '/home-health' }
      ]
    },
    {
      title: 'Providers',
      items: [
        { name: 'Behavioral Health', href: '/behavioral-health' },
        { name: 'Primary Care Overview', href: '/primary-care' },
        { name: 'Family Medicine', href: '/family-medicine' },
        { name: 'Internal Medicine', href: '/internal-medicine' },
        { name: 'Pediatrics', href: '/pediatrics' },
        { name: 'Urgent Care', href: '/urgent-care' }
      ]
    },
    {
      title: 'Payors',
      items: [
        { name: 'Health Plans', href: '/health-plans' },
        { name: 'Medicare Advantage', href: '/medicare-advantage' },
        { name: 'Medicaid MCOs', href: '/medicaid-mcos' },
        { name: 'Value-Based Care', href: '/value-based-care' }
      ]
    }
  ]

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title)
  }

  const handleMouseEnter = (title: string) => {
    setOpenDropdown(title)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-manrope ${
      isScrolled ? 'bg-simpl-green/95 backdrop-blur-md shadow-lg' : 'bg-simpl-green'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/simpl-logo-white.svg"
              alt="Simpl Healthcare"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Navigation - Evenly Spaced */}
          <div className="hidden lg:flex items-center justify-evenly flex-1 mx-8">
            {navigationItems.map((item) => (
              <div 
                key={item.title} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center text-white hover:text-white/80 transition-colors duration-200 py-2 font-semibold text-lg"
                  onClick={() => toggleDropdown(item.title)}
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-5 w-5" />
                </button>
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border transition-all duration-200 ${
                  openDropdown === item.title ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="py-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-simpl-black hover:bg-simpl-grey hover:text-simpl-green transition-colors duration-200 font-medium text-base"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/team"
              className="text-white hover:text-white/80 transition-colors duration-200 font-semibold text-lg"
            >
              Team
            </Link>
            <Link
              href="/testimonials"
              className="text-white hover:text-white/80 transition-colors duration-200 font-semibold text-lg"
            >
              Testimonials
            </Link>
            <Link
              href="/book-demo"
              className="bg-white hover:bg-white/90 text-simpl-green px-6 py-3 rounded-md btn-hover font-semibold text-lg"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 bg-simpl-green border-t border-white/20">
            {navigationItems.map((item) => (
              <div key={item.title}>
                <button
                  className="flex items-center justify-between w-full text-white py-2 font-semibold text-lg"
                  onClick={() => toggleDropdown(item.title)}
                >
                  {item.title}
                  <ChevronDown className={`h-5 w-5 transition-transform ${
                    openDropdown === item.title ? 'rotate-180' : ''
                  }`} />
                </button>
                {openDropdown === item.title && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-white/80 hover:text-white py-1 font-medium text-base"
                        onClick={() => {
                          setIsOpen(false)
                          setOpenDropdown(null)
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/team"
              className="block text-white hover:text-white/80 py-2 font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/testimonials"
              className="block text-white hover:text-white/80 py-2 font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/book-demo"
              className="block bg-white hover:bg-white/90 text-simpl-green px-6 py-3 rounded-md text-center mt-4 font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 