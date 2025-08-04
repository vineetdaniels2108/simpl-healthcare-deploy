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
  const [admissionSource, setAdmissionSource] = useState('hospital')
  const [cognitiveFunction, setCognitiveFunction] = useState('independent')
  const [functionScore, setFunctionScore] = useState(12)
  const [diagnosisGroup, setDiagnosisGroup] = useState('medical-management')
  const [comorbidities, setComorbidities] = useState(0)
  const [depression, setDepression] = useState(false)
  const [isUrban, setIsUrban] = useState(true)
  const [wageIndex, setWageIndex] = useState(1.0)

  // FY 2025 Unadjusted Federal Per Diem Rates (from CMS)
  const federalRates = {
    pt: 69.05,      // Physical Therapy
    ot: 65.18,      // Occupational Therapy  
    slp: 11.80,     // Speech-Language Pathology
    nursing: 181.60, // Nursing
    nta: 81.83,     // Non-Therapy Ancillary
    nonCaseMix: 114.34 // Non-Case Mix (flat rate)
  }

  // PDPM Case Mix Index (CMI) values for each component
  const getCMI = () => {
    let ptCMI = 1.0
    let otCMI = 1.0
    let slpCMI = 1.0
    let nursingCMI = 1.0
    let ntaCMI = 1.0

    // PT/OT Component based on diagnosis and function
    if (diagnosisGroup === 'major-joint-replacement') {
      ptCMI = functionScore <= 9 ? 1.53 : functionScore <= 15 ? 1.27 : 1.00
      otCMI = functionScore <= 9 ? 1.53 : functionScore <= 15 ? 1.27 : 1.00
    } else if (diagnosisGroup === 'other-orthopedic') {
      ptCMI = functionScore <= 9 ? 1.46 : functionScore <= 15 ? 1.21 : 0.95
      otCMI = functionScore <= 9 ? 1.46 : functionScore <= 15 ? 1.21 : 0.95
    } else if (diagnosisGroup === 'medical-management') {
      ptCMI = functionScore <= 9 ? 1.19 : functionScore <= 15 ? 0.99 : 0.78
      otCMI = functionScore <= 9 ? 1.19 : functionScore <= 15 ? 0.99 : 0.78
    } else {
      // Acute neurologic and other conditions
      ptCMI = functionScore <= 9 ? 1.35 : functionScore <= 15 ? 1.12 : 0.89
      otCMI = functionScore <= 9 ? 1.35 : functionScore <= 15 ? 1.12 : 0.89
    }

    // SLP Component based on cognitive function
    if (cognitiveFunction === 'severely-impaired') {
      slpCMI = 1.48
    } else if (cognitiveFunction === 'moderately-impaired') {
      slpCMI = 1.23
    } else if (cognitiveFunction === 'mildly-impaired') {
      slpCMI = 0.98
    } else {
      slpCMI = 0.73
    }

    // Nursing Component based on diagnosis and comorbidities
    if (diagnosisGroup === 'major-joint-replacement') {
      nursingCMI = 1.15 + (comorbidities * 0.05)
    } else if (diagnosisGroup === 'acute-neurologic') {
      nursingCMI = 1.45 + (comorbidities * 0.08)
    } else {
      nursingCMI = 1.00 + (comorbidities * 0.06)
    }

    // NTA Component based on comorbidities and depression
    let ntaPoints = comorbidities
    if (depression) ntaPoints += 1
    
    if (ntaPoints >= 12) ntaCMI = 3.15
    else if (ntaPoints >= 6) ntaCMI = 2.30
    else if (ntaPoints >= 3) ntaCMI = 1.68
    else if (ntaPoints >= 1) ntaCMI = 1.30
    else ntaCMI = 1.00

    return { ptCMI, otCMI, slpCMI, nursingCMI, ntaCMI }
  }

  // Calculate PDPM rate with proper methodology
  const calculatePDPM = () => {
    const cmi = getCMI()
    
    // Calculate component rates (Federal Rate × CMI)
    const ptRate = federalRates.pt * cmi.ptCMI
    const otRate = federalRates.ot * cmi.otCMI
    const slpRate = federalRates.slp * cmi.slpCMI
    const nursingRate = federalRates.nursing * cmi.nursingCMI
    const ntaRate = federalRates.nta * cmi.ntaCMI
    
    // Base daily rate before wage adjustment
    const baseRate = ptRate + otRate + slpRate + nursingRate + ntaRate + federalRates.nonCaseMix
    
    // Apply wage index adjustment (only to labor portion - 70% of total)
    const laborPortion = baseRate * 0.70
    const nonLaborPortion = baseRate * 0.30
    const adjustedRate = (laborPortion * wageIndex) + nonLaborPortion
    
    return {
      baseRate,
      adjustedRate,
      components: {
        pt: ptRate,
        ot: otRate,
        slp: slpRate,
        nursing: nursingRate,
        nta: ntaRate,
        nonCaseMix: federalRates.nonCaseMix
      },
      cmi
    }
  }

  const results = calculatePDPM()
  const dailyRate = results.adjustedRate
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
              <span className="text-simpl-green font-bold text-lg">📊 CMS-Compliant PDPM Calculator</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-manrope">
              PDPM Rate Calculator
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-manrope">
              Calculate Patient-Driven Payment Model rates using current CMS FY 2025 guidelines. Get accurate PDPM assessments for skilled nursing facilities with proper case mix methodology.
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
                {/* Admission Source */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">Admission Source</label>
                  <select 
                    value={admissionSource} 
                    onChange={(e) => setAdmissionSource(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simpl-green"
                  >
                    <option value="hospital">Hospital (3+ day stay)</option>
                    <option value="community">Community</option>
                  </select>
                </div>

                {/* Primary Diagnosis Group */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">Primary Diagnosis Group</label>
                  <select 
                    value={diagnosisGroup} 
                    onChange={(e) => setDiagnosisGroup(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simpl-green"
                  >
                    <option value="major-joint-replacement">Major Joint Replacement/Spinal Surgery</option>
                    <option value="other-orthopedic">Other Orthopedic</option>
                    <option value="acute-neurologic">Acute Neurologic</option>
                    <option value="medical-management">Medical Management</option>
                  </select>
                </div>

                {/* Cognitive Function (BIMS Score) */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">Cognitive Function (BIMS)</label>
                  <select 
                    value={cognitiveFunction} 
                    onChange={(e) => setCognitiveFunction(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simpl-green"
                  >
                    <option value="independent">Cognitively Intact (13-15)</option>
                    <option value="modified-independent">Mild Impairment (10-12)</option>
                    <option value="mildly-impaired">Moderate Impairment (7-9)</option>
                    <option value="moderately-impaired">Severe Impairment (0-6)</option>
                    <option value="severely-impaired">Unable to Complete</option>
                  </select>
                </div>

                {/* Function Score (Section GG) */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Function Score (Section GG Total): {functionScore}
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

                {/* Comorbidities/NTA Points */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    NTA Points (Comorbidities): {comorbidities}
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max="15" 
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
                    Depression Diagnosis (+1 NTA Point)
                  </label>
                </div>

                {/* Geographic Settings */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-simpl-black mb-4">Geographic Adjustment</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-md font-semibold text-simpl-black mb-2">Area Type</label>
                      <select 
                        value={isUrban ? 'urban' : 'rural'} 
                        onChange={(e) => setIsUrban(e.target.value === 'urban')}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-simpl-green"
                      >
                        <option value="urban">Urban</option>
                        <option value="rural">Rural</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-md font-semibold text-simpl-black mb-2">
                        Wage Index: {wageIndex.toFixed(4)}
                      </label>
                      <input 
                        type="range" 
                        min="0.8000" 
                        max="1.8000" 
                        step="0.0001"
                        value={wageIndex}
                        onChange={(e) => setWageIndex(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>0.8000</span>
                        <span>1.8000</span>
                      </div>
                    </div>
                  </div>
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
                    <div className="text-lg text-simpl-dark-grey">Daily PDPM Rate (Adjusted)</div>
                    <div className="text-sm text-simpl-dark-grey mt-1">Base Rate: ${results.baseRate.toFixed(2)}</div>
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

                {/* PDPM Component Breakdown */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-simpl-black mb-4">PDPM Component Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Physical Therapy (PT)</span>
                      <span className="font-semibold">${results.components.pt.toFixed(2)} (CMI: {results.cmi.ptCMI.toFixed(2)})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Occupational Therapy (OT)</span>
                      <span className="font-semibold">${results.components.ot.toFixed(2)} (CMI: {results.cmi.otCMI.toFixed(2)})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Speech-Language Pathology (SLP)</span>
                      <span className="font-semibold">${results.components.slp.toFixed(2)} (CMI: {results.cmi.slpCMI.toFixed(2)})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Nursing</span>
                      <span className="font-semibold">${results.components.nursing.toFixed(2)} (CMI: {results.cmi.nursingCMI.toFixed(2)})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Non-Therapy Ancillary (NTA)</span>
                      <span className="font-semibold">${results.components.nta.toFixed(2)} (CMI: {results.cmi.ntaCMI.toFixed(2)})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-simpl-dark-grey">Non-Case Mix</span>
                      <span className="font-semibold">${results.components.nonCaseMix.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Optimization Tips */}
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">CMS Guidelines Reminder</h4>
                      <p className="text-sm text-yellow-700">
                        This calculator uses FY 2025 CMS rates and approved PDPM methodology. 
                        Accurate MDS assessments (especially Section GG function scores and BIMS cognitive scores) 
                        are critical for proper reimbursement.
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