'use client'

import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Users,
  Calendar,
  Activity,
  BarChart3,
  Shield
} from 'lucide-react'

export default function PDPMCalculator() {
  const [patientType, setPatientType] = useState('skilled-nursing')
  const [admissionSource, setAdmissionSource] = useState('hospital')
  const [cognitiveFunction, setCognitiveFunction] = useState('independent')
  const [functionScore, setFunctionScore] = useState(12)
  const [diagnosisGroup, setDiagnosisGroup] = useState('medical-management')
  const [comorbidities, setComorbidities] = useState(0)
  const [depression, setDepression] = useState(false)

  // Simplified PDPM calculation logic
  const calculatePDPM = () => {
    let baseRate = 200 // Base daily rate
    
    // Adjust based on patient type
    if (patientType === 'rehabilitation') baseRate += 50
    if (patientType === 'complex-medical') baseRate += 75
    
    // Adjust based on function score
    baseRate += (20 - functionScore) * 5
    
    // Adjust based on diagnosis group
    const diagnosisMultipliers = {
      'medical-management': 1.0,
      'infection': 1.15,
      'cardiovascular': 1.1,
      'pulmonary': 1.2,
      'musculoskeletal': 1.25,
      'neurological': 1.3
    }
    baseRate *= diagnosisMultipliers[diagnosisGroup] || 1.0
    
    // Adjust for comorbidities
    baseRate += comorbidities * 15
    
    // Adjust for depression
    if (depression) baseRate += 25
    
    return Math.round(baseRate * 100) / 100
  }

  const dailyRate = calculatePDPM()
  const monthlyRevenue = dailyRate * 30
  const annualRevenue = dailyRate * 365

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-simpl-black to-simpl-dark-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-simpl-green/15 to-simpl-green/10 border-2 border-simpl-green/30 rounded-full mb-6 shadow-lg shadow-simpl-green/20">
              <span className="text-simpl-green font-bold text-lg">📊 PDPM Calculator</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-manrope">
              PDPM Rate Calculator
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-manrope">
              Calculate Patient-Driven Payment Model rates instantly. Optimize your reimbursements with accurate PDPM assessments for skilled nursing facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-simpl-green mr-4" />
                <h2 className="text-3xl font-bold text-simpl-black font-manrope">PDPM Calculator</h2>
              </div>

              <div className="space-y-6">
                {/* Patient Type */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">Patient Type</label>
                  <select 
                    value={patientType} 
                    onChange={(e) => setPatientType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simpl-green"
                  >
                    <option value="skilled-nursing">Skilled Nursing</option>
                    <option value="rehabilitation">Rehabilitation</option>
                    <option value="complex-medical">Complex Medical</option>
                  </select>
                </div>

                {/* Admission Source */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">Admission Source</label>
                  <select 
                    value={admissionSource} 
                    onChange={(e) => setAdmissionSource(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simpl-green"
                  >
                    <option value="hospital">Hospital</option>
                    <option value="community">Community</option>
                    <option value="other-facility">Other Facility</option>
                  </select>
                </div>

                {/* Cognitive Function */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">Cognitive Function</label>
                  <select 
                    value={cognitiveFunction} 
                    onChange={(e) => setCognitiveFunction(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simpl-green"
                  >
                    <option value="independent">Independent</option>
                    <option value="modified-independent">Modified Independent</option>
                    <option value="mildly-impaired">Mildly Impaired</option>
                    <option value="moderately-impaired">Moderately Impaired</option>
                    <option value="severely-impaired">Severely Impaired</option>
                  </select>
                </div>

                {/* Function Score */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Function Score: {functionScore}
                  </label>
                  <input 
                    type="range" 
                    min="6" 
                    max="24" 
                    value={functionScore}
                    onChange={(e) => setFunctionScore(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>6 (High Function)</span>
                    <span>24 (Low Function)</span>
                  </div>
                </div>

                {/* Primary Diagnosis Group */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">Primary Diagnosis Group</label>
                  <select 
                    value={diagnosisGroup} 
                    onChange={(e) => setDiagnosisGroup(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simpl-green"
                  >
                    <option value="medical-management">Medical Management</option>
                    <option value="infection">Infection</option>
                    <option value="cardiovascular">Cardiovascular</option>
                    <option value="pulmonary">Pulmonary</option>
                    <option value="musculoskeletal">Musculoskeletal</option>
                    <option value="neurological">Neurological</option>
                  </select>
                </div>

                {/* Comorbidities */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Number of Comorbidities: {comorbidities}
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    value={comorbidities}
                    onChange={(e) => setComorbidities(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Depression */}
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="depression"
                    checked={depression}
                    onChange={(e) => setDepression(e.target.checked)}
                    className="w-5 h-5 text-simpl-green bg-gray-100 border-gray-300 rounded focus:ring-simpl-green"
                  />
                  <label htmlFor="depression" className="ml-3 text-lg font-semibold text-simpl-black">
                    Depression Diagnosis
                  </label>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <div className="flex items-center mb-6">
                <DollarSign className="w-8 h-8 text-simpl-green mr-4" />
                <h2 className="text-3xl font-bold text-simpl-black font-manrope">PDPM Results</h2>
              </div>

              <div className="space-y-6">
                {/* Daily Rate */}
                <div className="bg-simpl-green/10 rounded-xl p-6 border border-simpl-green/20">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-simpl-green mb-2">${dailyRate.toFixed(2)}</div>
                    <div className="text-lg text-simpl-dark-grey">Daily PDPM Rate</div>
                  </div>
                </div>

                {/* Monthly and Annual Projections */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-simpl-grey rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-simpl-black">${monthlyRevenue.toLocaleString()}</div>
                    <div className="text-sm text-simpl-dark-grey">Monthly Revenue</div>
                  </div>
                  <div className="bg-simpl-grey rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-simpl-black">${annualRevenue.toLocaleString()}</div>
                    <div className="text-sm text-simpl-dark-grey">Annual Revenue</div>
                  </div>
                </div>

                {/* Rate Components */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-simpl-black mb-4">Rate Components</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Physical Therapy</span>
                      <span className="font-semibold">${(dailyRate * 0.25).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Occupational Therapy</span>
                      <span className="font-semibold">${(dailyRate * 0.20).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Speech-Language Pathology</span>
                      <span className="font-semibold">${(dailyRate * 0.15).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Nursing</span>
                      <span className="font-semibold">${(dailyRate * 0.30).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Non-Therapy Ancillary</span>
                      <span className="font-semibold">${(dailyRate * 0.10).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Optimization Tips */}
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Optimization Tip</h4>
                      <p className="text-sm text-yellow-700">
                        Accurate MDS assessments can increase reimbursement by up to 15%. 
                        Ensure thorough documentation of functional status and comorbidities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDPM Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Understanding PDPM
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              The Patient-Driven Payment Model revolutionizes Medicare reimbursement for skilled nursing facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">Patient-Driven</h3>
              <p className="text-sm text-simpl-dark-grey">Reimbursement based on patient characteristics and needs</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">Five Components</h3>
              <p className="text-sm text-simpl-dark-grey">PT, OT, SLP, Nursing, and Non-Therapy Ancillary</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">Variable Length</h3>
              <p className="text-sm text-simpl-dark-grey">No therapy minimums or maximums required</p>
            </div>

            <div className="text-center p-6 bg-simpl-grey rounded-xl">
              <div className="w-16 h-16 bg-simpl-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-simpl-green" />
              </div>
              <h3 className="text-lg font-bold text-simpl-black mb-2 font-manrope">Quality Focus</h3>
              <p className="text-sm text-simpl-dark-grey">Emphasis on patient outcomes and satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              PDPM Key Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Classification Variables</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Primary diagnosis and comorbidities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Cognitive and functional status</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Special care treatments and services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Admission source (hospital vs. community)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <h3 className="text-2xl font-bold text-simpl-black mb-4 font-manrope">Payment Components</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Physical Therapy (PT) Component</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Occupational Therapy (OT) Component</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Speech-Language Pathology (SLP) Component</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Nursing Component</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-simpl-green mr-3" />
                  <span className="text-simpl-dark-grey">Non-Therapy Ancillary (NTA) Component</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-simpl-green to-simpl-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-manrope">
            Optimize Your PDPM Reimbursements
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 font-manrope">
            Simpl Healthcare's integrated platform helps you maximize PDPM reimbursements through accurate assessments and comprehensive documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-white text-simpl-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors font-manrope"
            >
              Schedule Demo
            </Link>
            <Link
              href="/roi-analysis"
              className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-manrope"
            >
              View ROI Analysis
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 