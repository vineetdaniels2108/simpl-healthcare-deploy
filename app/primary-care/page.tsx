import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Primary Care - Simpl Healthcare',
  description: 'Streamlined EHR solutions designed specifically for primary care practices.',
}

export default function PrimaryCare() {
  return (
    <main>
      <Navigation />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-simpl-black to-simpl-darkgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-simpl-green">Primary Care</span>
            </h1>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto">
              Streamlined EHR solutions designed specifically for primary care practices.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 