'use client'

import Image from 'next/image'
import Link from 'next/link'

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'CLOUD EHR',
      description: 'Run your practice smoothly with essential EHR tools, from anywhere, any device. Streamline administrative tasks like scheduling, charting and intake.',
      image: '/EHR-top-of-page.png',
      link: '/cloud-ehr'
    },
    {
      title: 'PRACTICE MANAGEMENT',
      description: 'Operate your practice efficiently, from one centralized portal. Easily manage appointments and automate day-to-day functions to save time and focus on patient care.',
      image: '/Admin-Dashboard.png',
      link: '/practice-management'
    },
    {
      title: 'INTEROPERABILITY',
      description: 'Improve workflow efficiency with quick access to extensive medical records from 90% of hospitals and clinics in the U.S.',
      image: '/Interoperability-hero.png',
      link: '/interoperability'
    },
    {
      title: 'TELEHEALTH',
      description: 'Conduct seamless virtual visits with fully integrated EHR and AI features within the Simpl Telehealth platform.',
      image: '/Patient-Dashboard.png',
      link: '/telehealth'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-simpl-black mb-6">
            Simpl Healthcare Platform Powers Transformative Solutions.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="group">
              <Link href={solution.link}>
                <div className="bg-simpl-grey rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  {/* Solution Image */}
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Solution Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-simpl-black tracking-wide">
                      {solution.title}
                    </h3>
                    <p className="text-simpl-dark-grey leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-simpl-green hover:text-simpl-dark-green transition-colors duration-200">
                      <span className="font-semibold">Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/book-demo"
            className="bg-simpl-green hover:bg-simpl-dark-green text-white px-8 py-4 rounded-md font-semibold text-lg btn-hover inline-block"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection 