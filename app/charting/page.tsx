import type { Metadata } from 'next'
import PageTemplate from '../../components/PageTemplate'
import { FileText, Smartphone, Users, Zap, Brain, Shield, CheckCircle, Clock, Edit, Search, Save } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Smart Charting Solutions - Simpl Healthcare',
  description: 'All of your patient paperwork at your fingertips. Securely access patient information on any device while giving your patients an experience they expect.',
}

export default function Charting() {
  const heroStats = [
    { number: '60%', label: 'Faster Documentation' },
    { number: '100%', label: 'Mobile Optimized' },
    { number: '99%', label: 'Data Accuracy' }
  ]

  const features = [
    {
      icon: <FileText className="w-12 h-12 text-simpl-green" />,
      title: "Purpose-Built Charting",
      subtitle: "Optimized for Your Care Model",
      description: "No matter your unique requirements, your charts can be optimized to fit your business. Customizable templates and workflows designed for your specialty."
    },
    {
      icon: <Users className="w-12 h-12 text-simpl-green" />,
      title: "Group Charting",
      subtitle: "Care-Changing Efficiency",
      description: "Take secure notes on multiple patients at once using Simpl's group charting feature. Perfect for group therapy sessions and patient education classes."
    },
    {
      icon: <Zap className="w-12 h-12 text-simpl-green" />,
      title: "Smart Fields",
      subtitle: "Time-Saving Intelligence",
      description: "With smart fields, you can access critical information quickly, saving time and headaches. Auto-populate data and reduce repetitive entry."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-simpl-green" />,
      title: "Mobile Charting",
      subtitle: "Chart Anywhere, Anytime",
      description: "Securely access patient information on any device while giving your patients an experience they expect. Full mobile optimization for on-the-go documentation."
    },
    {
      icon: <Brain className="w-12 h-12 text-simpl-green" />,
      title: "AI-Powered Notes",
      subtitle: "Intelligent Documentation",
      description: "Let AI assist with note generation, medical coding, and clinical decision support. Reduce documentation burden while improving accuracy."
    },
    {
      icon: <Shield className="w-12 h-12 text-simpl-green" />,
      title: "Secure & Compliant",
      subtitle: "HIPAA Certified Platform",
      description: "Simpl's platform meets the highest certification standards for data security and privacy, leveraging industry standards to secure data."
    }
  ]

  const chartingCapabilities = [
    {
      title: "Customizable Templates",
      description: "Create and customize charting templates specific to your practice needs and specialty requirements."
    },
    {
      title: "Smart Auto-Complete",
      description: "Intelligent auto-completion suggestions based on your documentation patterns and medical terminology."
    },
    {
      title: "Voice-to-Text",
      description: "Dictate your notes directly into the system with high-accuracy speech recognition technology."
    },
    {
      title: "Clinical Decision Support",
      description: "Built-in alerts and recommendations to help guide clinical decisions and improve patient safety."
    }
  ]

  return (
    <PageTemplate
      title="Smart Charting"
      subtitle="📝 All Patient Paperwork at Your Fingertips"
      description="Securely access patient information on any device while giving your patients an experience they expect. Purpose-built charting that adapts to your unique care model."
      heroImage="/smart-charting-hero.png"
      heroImageAlt="Smart Charting Interface"
      showHeroStats={true}
      heroStats={heroStats}
    >
      {/* Charting Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Charting That Adapts to Your Practice
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope leading-relaxed">
              Our intelligent charting system is designed to work the way you do. Whether you're documenting individual visits, 
              group sessions, or complex care plans, Simpl adapts to your workflow and specialty requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Edit className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Intuitive Interface</h3>
                  <p className="text-lg text-simpl-dark-grey">Clean, modern interface designed for speed and efficiency without sacrificing functionality.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Search className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Quick Search</h3>
                  <p className="text-lg text-simpl-dark-grey">Find any patient information instantly with powerful search capabilities across all charts.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Save className="w-8 h-8 text-simpl-green mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Auto-Save</h3>
                  <p className="text-lg text-simpl-dark-grey">Never lose your work with automatic saving and version control for all documentation.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/smart-charting-digital.png"
                  alt="Charting Dashboard"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Comprehensive Charting Features
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Everything you need for efficient, accurate, and secure patient documentation across all care settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-simpl-black mb-2 font-manrope">{feature.title}</h3>
                <h4 className="text-lg font-semibold text-simpl-green mb-4">{feature.subtitle}</h4>
                <p className="text-lg text-simpl-dark-grey font-manrope leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
                See Smart Charting in Action
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-manrope">
                Watch how our intelligent charting system streamlines documentation and improves your workflow efficiency.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video 
                  controls 
                  className="w-full h-auto"
                  poster="/charting-video-poster.jpg"
                >
                  <source src="/videos/charting-demo.mp4" type="video/mp4" />
                  <source src="/videos/charting-demo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center mt-8">
                <p className="text-white/80 text-lg font-manrope">
                  See how providers save 60% of their documentation time with Simpl's smart charting features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8 font-manrope">
                Advanced Charting Capabilities
              </h2>
              <p className="text-xl text-simpl-dark-grey font-manrope leading-relaxed mb-8">
                Go beyond basic documentation with intelligent features that learn from your patterns 
                and help you provide better patient care more efficiently.
              </p>
              
              <div className="space-y-6">
                {chartingCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-simpl-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-simpl-black mb-2">{capability.title}</h3>
                      <p className="text-lg text-simpl-dark-grey">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-simpl-green/10 to-simpl-blue/10 rounded-2xl p-8">
                <img
                  src="/smart-charting-features.png"
                  alt="Smart Charting Features"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Charting Spotlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Group Charting is a Care-Changer
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              Take secure notes on multiple patients at once with Simpl's innovative group charting feature. 
              Perfect for group therapy, patient education, and multi-patient care scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Multi-Patient Notes</h3>
              <p className="text-lg text-simpl-dark-grey">
                Document multiple patients simultaneously during group sessions with individual and shared notes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Time Efficient</h3>
              <p className="text-lg text-simpl-dark-grey">
                Reduce documentation time by up to 70% for group sessions while maintaining individual patient records.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4">Privacy Protected</h3>
              <p className="text-lg text-simpl-dark-grey">
                Each patient's information remains completely secure and separate while allowing efficient group documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Seamlessly Integrated with Simpl Platform
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Cloud EHR</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                All charting data automatically syncs with your complete EHR for comprehensive patient records and clinical workflows.
              </p>
              <a href="/cloud-ehr" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Practice Management</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Charting data flows directly into billing, scheduling, and care coordination workflows for streamlined operations.
              </p>
              <a href="/practice-management" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Telehealth</h3>
              <p className="text-lg text-simpl-dark-grey mb-6">
                Conduct seamless virtual visits with fully integrated EHR and charting capabilities for remote patient care.
              </p>
              <a href="/telehealth" className="text-simpl-green font-semibold hover:text-simpl-dark-green transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-simpl-green to-simpl-blue rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
              Ready to Transform Your Documentation?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto font-manrope">
              Experience the power of smart charting that adapts to your workflow and saves you time every day.
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