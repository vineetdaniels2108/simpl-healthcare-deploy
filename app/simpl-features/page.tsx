import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Simpl Features - Simpl Healthcare',
  description: 'Explore all the powerful features and tools in the Simpl Healthcare platform.',
}

export default function SimplFeatures() {
  return (
    <main>
      <Navigation />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-simpl-black to-simpl-darkgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-simpl-green">Simpl</span> Features
            </h1>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto">
              Explore all the powerful features and tools in the Simpl Healthcare platform.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 