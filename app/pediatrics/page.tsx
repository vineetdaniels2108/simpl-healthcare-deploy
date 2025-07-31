import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { Baby, Heart, Smile, Shield, CheckCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pediatric EHR Solutions - Simpl Healthcare',
  description: 'Specialized EHR solutions for pediatric practices. Manage children\'s health from birth to adolescence with age-appropriate tools, growth tracking, and immunization management.',
  keywords: 'pediatric EHR, children health software, immunization tracking, growth charts, pediatric practice management, developmental milestones',
}

export default function Pediatrics() {
  const heroStats = [
    { number: '98%', label: 'Immunization Compliance' },
    { number: '45%', label: 'Faster Well Visits' },
    { number: '92%', label: 'Parent Satisfaction' }
  ]

  return (
    <PageTemplate
      title="Pediatrics"
      subtitle="👶 Specialized Child Care"
      description="Comprehensive EHR solutions designed specifically for pediatric practices. Manage children's health from birth to adolescence with age-appropriate templates, growth tracking, immunization management, and developmental milestone monitoring."
      heroImage="/pediatrics-dashboard.png"
      heroImageAlt="Pediatric EHR Dashboard"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Built for Growing Children
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Our platform provides specialized tools for pediatric care, supporting healthy development from infancy through adolescence with age-appropriate features and family-centered care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Baby className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Growth & Development</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Automated growth charts, developmental milestones tracking, and age-appropriate screening alerts for optimal child development.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Immunization Management</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Complete vaccine tracking with automatic scheduling, catch-up protocols, and integration with state immunization registries.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Family-Centered Care</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope">
                Parent portal access, family health history tracking, and tools for caregiver communication and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Specific Features */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Age-Appropriate Care Tools
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Specialized features that adapt to each stage of childhood development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Baby className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Newborn & Infant Care</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Specialized templates for newborn assessments, feeding tracking, and early development monitoring.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Newborn screening results
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Feeding & weight gain tracking
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Sleep pattern monitoring
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Smile className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">School-Age Children</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Tools for managing school physicals, behavioral assessments, and academic health needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Sports physicals
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  ADHD screening tools
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Learning disability assessments
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-simpl-green mb-6" />
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Adolescent Health</h3>
              <p className="text-lg text-simpl-dark-grey font-manrope mb-4">
                Confidential care options, mental health screening, and transition planning to adult care.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Mental health screening
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Confidentiality management
                </li>
                <li className="flex items-center text-sm text-simpl-dark-grey">
                  <CheckCircle className="w-4 h-4 text-simpl-green mr-2" />
                  Transition planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Engagement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
                Enhanced Parent Engagement
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Keep parents informed and engaged in their child's healthcare journey with comprehensive communication tools and educational resources.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Interactive Growth Charts</h3>
                    <p className="text-lg text-simpl-dark-grey">Visual growth tracking that parents can view and understand easily.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Vaccine Reminders</h3>
                    <p className="text-lg text-simpl-dark-grey">Automated reminders for upcoming immunizations and well-child visits.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-simpl-black mb-2">Educational Resources</h3>
                    <p className="text-lg text-simpl-dark-grey">Age-appropriate health education materials delivered through the parent portal.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/pediatric-parent-portal.png"
                  alt="Pediatric Parent Portal Interface"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
              {/* Floating Metric Cards */}
              <div className="absolute -top-4 -right-4 bg-simpl-green text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Vaccine Compliance</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-simpl-blue text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm">Parent Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developmental Milestones */}
      <section className="py-20 bg-gradient-to-r from-simpl-green/5 to-simpl-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
            Comprehensive Developmental Tracking
          </h2>
          <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope mb-12">
            Monitor and support healthy development with evidence-based screening tools and milestone tracking.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Calendar className="w-8 h-8 text-simpl-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-simpl-black mb-2">Milestone Alerts</h3>
              <p className="text-sm text-simpl-dark-grey">Automatic screening reminders based on child's age</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Baby className="w-8 h-8 text-simpl-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-simpl-black mb-2">Early Intervention</h3>
              <p className="text-sm text-simpl-dark-grey">Identify developmental delays early for timely support</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Smile className="w-8 h-8 text-simpl-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-simpl-black mb-2">Behavioral Health</h3>
              <p className="text-sm text-simpl-dark-grey">Integrated mental health screening and support</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Heart className="w-8 h-8 text-simpl-green mx-auto mb-4" />
              <h3 className="text-lg font-bold text-simpl-black mb-2">Family Support</h3>
              <p className="text-sm text-simpl-dark-grey">Resources and guidance for parents and caregivers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Transform Your Pediatric Practice
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Join pediatric practices nationwide that have improved care quality, parent satisfaction, and practice efficiency with our specialized EHR solution.
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