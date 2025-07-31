import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Users, Calendar, Stethoscope, Heart, CheckCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Family Medicine EHR Solutions - Simpl Healthcare',
  description: 'Comprehensive EHR solutions designed for family medicine practices. Streamline patient care across all ages with integrated scheduling and documentation.',
}

export default function FamilyMedicine() {
  const heroStats = [
    { number: '35%', label: 'Faster Patient Visits' },
    { number: '25%', label: 'More Patients/Day' },
    { number: '90%', label: 'Provider Satisfaction' }
  ]

  return (
    <PageTemplate
      title="Family Medicine"
      subtitle="👨‍👩‍👧‍👦 Complete Family Care"
      description="Comprehensive EHR solutions designed for family medicine practices. Streamline patient care across all ages with integrated scheduling, documentation, and preventive care management."
      heroImage="/family-medicine-dashboard.png"
      heroImageAlt="Family Medicine EHR Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Built for Comprehensive Family Care
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Our platform supports the unique needs of family medicine, from newborn care to geriatric management, with tools designed for efficiency and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Multi-Generational Care</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Manage entire families with age-appropriate templates and care protocols from pediatric to geriatric care.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Calendar className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Preventive Care Tracking</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Automated reminders for immunizations, screenings, and wellness visits to improve patient outcomes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Stethoscope className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Chronic Disease Management</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Comprehensive tools for managing diabetes, hypertension, and other chronic conditions across the family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Streamlined Family Practice Workflows
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Optimize your practice efficiency with intelligent workflows designed specifically for family medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Smart Documentation</h3>
                  <p className="text-lg text-simpl-dark-grey">Age-appropriate templates that adapt based on patient demographics and visit type.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Integrated Scheduling</h3>
                  <p className="text-lg text-simpl-dark-grey">Coordinate family appointments and manage complex scheduling needs effortlessly.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Care Coordination</h3>
                  <p className="text-lg text-simpl-dark-grey">Seamlessly coordinate with specialists and manage referrals for optimal patient care.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/family-practice-workflow.png"
                  alt="Family Practice Workflow"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Enhance Your Family Practice Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join thousands of family medicine providers who have improved their practice efficiency and patient care with Simpl Healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-demo"
                className="bg-white hover:bg-gray-100 text-simpl-green px-8 py-4 rounded-xl font-bold text-lg btn-hover inline-block"
              >
                Schedule a Demo
              </a>
              <a
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 