'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Calendar, Award, Users, Target, Linkedin, Mail } from 'lucide-react'

export default function Team() {
  const teamMembers = [
    {
      name: "Vineet Daniels",
      title: "Chief Executive Officer & Co-Founder",
      image: "/vineet-daniels.jpg",
      linkedin: "https://www.linkedin.com/in/vineetdaniels/",
      email: "vineetdaniels@simplhealthcare.com",
      bio: "As CEO and Co-Founder, Vineet drives Simpl's corporate vision, strategy and execution. Prior to co-founding Simpl Healthcare, he led product innovation teams at Amazon and Google on initiatives including deployment of Covid facilities in the US and HIPAA Compliance Solutions on AWS. He is a recipient of 40 under 40 Winner by Healthcare Innovation."
    },
    {
      name: "Isaac Chapa",
      title: "Chief Technology Officer & Co-Founder", 
      image: "/isaac-chapa.jpg",
      linkedin: "https://www.linkedin.com/in/ichapa/",
      email: "ichapa@simplhealthcare.com",
      bio: "As CTO and Co-Founder, Isaac oversees the development and implementation of innovative Simpl healthcare solutions. Prior to joining Simpl, he founded CSIdentity Corporation which was later acquired by Experian. Isaac has also held leadership roles at various technology companies where he specialized in scalable software architecture and data security."
    },
    {
      name: "John Menchaca",
      title: "Chief Legal Officer",
      image: "/john-menchaca.jpg",
      linkedin: "https://www.linkedin.com/in/john-menchaca-99112323/",
      email: "John.Menchaca@michaelbest.com",
      bio: "John leads Simpl's legal strategy, compliance initiatives, and risk management. With over 15 years of healthcare law experience, he has guided numerous healthcare technology companies through complex regulatory landscapes. John holds a JD from Harvard Law School and has been recognized as a leading healthcare attorney by multiple industry publications."
    },
    {
      name: "Lisa Weaver",
      title: "Sr. Director, Partner Operations",
      image: "/lisa-weaver.jpg",
      linkedin: "https://www.linkedin.com/in/lisalweaver/",
      email: "lweaver@simplhealthcare.com",
      bio: "Lisa oversees Simpl's strategic partnerships and business development initiatives. She brings extensive experience in healthcare operations and has successfully launched partnerships with major health systems across the United States. Lisa holds an MBA from Wharton and has a proven track record of scaling healthcare technology operations."
    },
    {
      name: "Dave Szabo",
      title: "VP, Engineering",
      image: "/dave-szabo.png",
      linkedin: "https://www.linkedin.com/in/dszabo/",
      email: "daveszabo@simplhealthcare.com",
      bio: "Dave leads Simpl's engineering team and technical product development. With over 12 years of experience in healthcare technology, he has architected scalable systems that process millions of healthcare transactions daily. Dave holds a Master's in Computer Science from Stanford and has previously led engineering teams at several successful healthcare startups."
    }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-simpl-green via-simpl-green to-simpl-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <span className="text-white font-semibold text-lg">👥 Meet Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-manrope leading-tight">
            Meet the Leaders<br />
            <span className="text-white/90">Transforming Healthcare</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed font-manrope max-w-3xl mx-auto">
            Experienced healthcare and technology leaders dedicated to revolutionizing patient care through innovation
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Team Members Cards */}
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-simpl-green/10 hover:shadow-2xl transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left Side - Image and Basic Info */}
                  <div className="bg-gradient-to-br from-simpl-green to-simpl-blue p-8 md:p-12 flex flex-col items-center justify-center text-white text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full bg-white p-1">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-simpl-green" />
                      </div>
                    </div>
                    
                    {/* Name and Title */}
                    <h3 className="text-2xl font-bold mb-2 font-manrope">
                      {member.name}
                    </h3>
                    <p className="text-white/90 font-semibold text-sm uppercase tracking-wider mb-6">
                      {member.title}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          aria-label={`${member.name} Email`}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Right Side - Bio and Details */}
                  <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">
                        About {member.name.split(' ')[0]}
                      </h4>
                      <p className="text-lg text-simpl-dark-grey leading-relaxed font-manrope">
                        {member.bio}
                      </p>
                    </div>
                    
                    {/* Experience Highlights */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-simpl-grey rounded-xl">
                        <div className="flex justify-center mb-2">
                          <Award className="w-6 h-6 text-simpl-green" />
                        </div>
                        <div className="text-2xl font-bold text-simpl-black font-manrope">15+</div>
                        <div className="text-sm text-simpl-dark-grey font-manrope">Years Experience</div>
                      </div>
                      
                      <div className="text-center p-4 bg-simpl-grey rounded-xl">
                        <div className="flex justify-center mb-2">
                          <Target className="w-6 h-6 text-simpl-green" />
                        </div>
                        <div className="text-2xl font-bold text-simpl-black font-manrope">50+</div>
                        <div className="text-sm text-simpl-dark-grey font-manrope">Projects Led</div>
                      </div>
                      
                      <div className="text-center p-4 bg-simpl-grey rounded-xl">
                        <div className="flex justify-center mb-2">
                          <Users className="w-6 h-6 text-simpl-green" />
                        </div>
                        <div className="text-2xl font-bold text-simpl-black font-manrope">100+</div>
                        <div className="text-sm text-simpl-dark-grey font-manrope">Team Members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Our Core Values
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-3xl mx-auto font-manrope">
              The principles that guide everything we do at Simpl Healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-simpl-grey rounded-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-simpl-green rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">
                Patient-First
              </h3>
              <p className="text-simpl-dark-grey font-manrope">
                Every decision we make is centered around improving patient outcomes and experiences.
              </p>
            </div>

            <div className="text-center p-8 bg-simpl-grey rounded-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-simpl-green rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">
                Innovation
              </h3>
              <p className="text-simpl-dark-grey font-manrope">
                We continuously push boundaries to create breakthrough healthcare technology solutions.
              </p>
            </div>

            <div className="text-center p-8 bg-simpl-grey rounded-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-simpl-green rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">
                Excellence
              </h3>
              <p className="text-simpl-dark-grey font-manrope">
                We maintain the highest standards in everything we deliver to our healthcare partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-br from-simpl-green to-simpl-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 font-manrope">
            Ready to help transform healthcare? We're always looking for talented individuals who share our passion.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
               href="/contact"
               className="bg-white text-simpl-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors font-manrope"
             >
               Contact Us
             </Link>
            <Link
              href="/book-demo"
              className="border border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors font-manrope"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 