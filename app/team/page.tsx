import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Our Team - Simpl Healthcare',
  description: 'Meet the team behind Simpl Healthcare\'s innovative EHR solutions.',
}

export default function Team() {
  return (
    <main>
      <Navigation />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-simpl-black to-simpl-darkgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-simpl-green">Team</span>
            </h1>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto">
              Meet the team behind Simpl Healthcare's innovative EHR solutions.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 