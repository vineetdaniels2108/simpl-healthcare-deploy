'use client'

import Image from 'next/image'

const SimplWaySection = () => {
  return (
    <section className="py-20 bg-simpl-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Simpl Way Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-8">
            The <span className="text-simpl-green">Simpl</span> Way
          </h2>
          
          {/* Honeycomb with Doctor and Patient */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <Image
              src="/honeycomb-left.svg"
              alt="Honeycomb pattern left"
              width={200}
              height={200}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20"
            />
            <Image
              src="/honeycomb-right.svg"
              alt="Honeycomb pattern right"
              width={200}
              height={200}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20"
            />
            
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
              <Image
                src="/person-med.png"
                alt="Simpl Honeycomb Mask with a doctor and a patient"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Three Key Features */}
        <div className="space-y-20">
          
          {/* Feature 1: One Platform */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-simpl-black mb-6">
                One easy-to-use <span className="text-simpl-green">Simpl</span> platform, many tools
              </h3>
              <p className="text-lg text-simpl-dark-grey leading-relaxed">
                Manage and grow your practice from one feature-rich centralized portal without the 
                frustrations of navigating different systems. Intuitive interface means no extensive 
                training required.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/care-graphic.svg"
                  alt="Medical infographics with length of stay and cost"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Feature 2: AI-Powered */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <Image
                  src="/ai-medical-summaries.svg"
                  alt="AI-powered health management illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-simpl-black mb-6">
                AI-powered health management
              </h3>
              <p className="text-lg text-simpl-dark-grey leading-relaxed">
                Simpl AI innovations let you work smarter, re-focusing time to patient care. From getting 
                patient health insights to capturing vitals virtually, Simpl prioritizes accessibility, 
                simplicity and efficiency for every stage of growth.
              </p>
            </div>
          </div>

          {/* Feature 3: Secure */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-simpl-black mb-6">
                Secure and HIPAA-Compliant
              </h3>
              <p className="text-lg text-simpl-dark-grey leading-relaxed">
                Simpl puts the focus on letting you drive business forward while we ensure security 
                on the backend. Some of the standards we implemented include securing sensitive data 
                at rest with AES-256 encryption and in transit via TLS1.2 encryption. Simpl is HIPAA 
                compliant and SSAE 18 SOC2 Type II certified.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/laptop-frame.png"
                  alt="Simpl Dashboard in a laptop mockup"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SimplWaySection 