'use client'

import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { 
  TrendingUp, 
  DollarSign, 
  Calculator, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  FileText,
  BarChart3,
  Target,
  Zap,
  Shield,
  Building,
  PieChart
} from 'lucide-react'

export default function ROIAnalysis() {
  const [facilitySize, setFacilitySize] = useState(120)
  const [currentOccupancy, setCurrentOccupancy] = useState(85)
  const [avgDailyRate, setAvgDailyRate] = useState(285)
  const [currentDocTime, setCurrentDocTime] = useState(45)
  const [currentEfficiency, setCurrentEfficiency] = useState(70)
  const [implementationCost, setImplementationCost] = useState(50000)

  // ROI Calculations
  const calculateROI = () => {
    const occupiedBeds = Math.round(facilitySize * (currentOccupancy / 100))
    const currentAnnualRevenue = occupiedBeds * avgDailyRate * 365
    
    // Very conservative efficiency improvements with Simpl
    const newDocTime = currentDocTime * 0.8 // 20% reduction (realistic)
    const newEfficiency = Math.min(currentEfficiency * 1.10, 95) // 10% improvement, capped at 95%
    const newOccupancy = Math.min(currentOccupancy * 1.02, 98) // 2% improvement, capped at 98% (very conservative)
    const newDailyRate = avgDailyRate * 1.015 // 1.5% increase through better documentation (very conservative)
    
    const newOccupiedBeds = Math.round(facilitySize * (newOccupancy / 100))
    const newAnnualRevenue = newOccupiedBeds * newDailyRate * 365
    
    const annualSavings = newAnnualRevenue - currentAnnualRevenue
    
    // Time savings calculation - much more conservative approach
    // Only count time savings that actually reduce staffing costs (not all documentation time is billable)
    const effectiveTimeSavingsPerResident = Math.min((currentDocTime - newDocTime) * 0.6, 15) // Only 60% of time saved translates to cost savings, max 15min
    const timeSavingsMinutesPerDay = effectiveTimeSavingsPerResident * occupiedBeds // total effective minutes saved per day
    const timeSavingsHoursPerYear = (timeSavingsMinutesPerDay / 60) * 365 // convert to hours per year
    const staffSavings = (timeSavingsHoursPerYear / 2080) * 32000 // reduced to $32k/year per FTE (CNA/LPN level)
    
    // Add implementation and ongoing costs for more realistic calculation
    const ongoingAnnualCost = implementationCost * 0.20 // 20% annual maintenance/subscription (realistic)
    const totalAnnualBenefit = annualSavings + staffSavings - ongoingAnnualCost
    
    const roi = totalAnnualBenefit > 0 ? ((totalAnnualBenefit) / implementationCost) * 100 : -100
    const paybackMonths = totalAnnualBenefit > 0 ? (implementationCost / (totalAnnualBenefit / 12)) : 999
    
    // Calculate additional meaningful metrics
    const monthlyBenefit = totalAnnualBenefit / 12
    const breakEvenMonths = Math.max(paybackMonths, 1) // Ensure at least 1 month
    const timeToPositiveFlow = Math.ceil(Math.min(breakEvenMonths, 60)) // Cap at 60 months
    const threeYearNetBenefit = (totalAnnualBenefit * 3) - implementationCost
    
    return {
      currentAnnualRevenue,
      newAnnualRevenue,
      annualSavings,
      timeSavings: Math.round(timeSavingsHoursPerYear),
      staffSavings,
      totalAnnualBenefit,
      ongoingAnnualCost,
      roi,
      paybackMonths: breakEvenMonths,
      monthlyBenefit,
      timeToPositiveFlow,
      threeYearNetBenefit,
      newDocTime,
      newEfficiency,
      newOccupancy
    }
  }

  const results = calculateROI()

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-simpl-black to-simpl-dark-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-20">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-simpl-green/15 to-simpl-green/10 border-2 border-simpl-green/30 rounded-full mb-6 shadow-lg shadow-simpl-green/20">
              <span className="text-simpl-green font-bold text-lg">📈 ROI Analysis</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-manrope">
              Long-Term Care ROI Calculator
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-manrope">
              Calculate your return on investment with Simpl Healthcare's AI-powered platform. See how much you can save and earn with optimized operations.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-simpl-green mr-4" />
                <h2 className="text-3xl font-bold text-simpl-black font-manrope">Facility Information</h2>
              </div>

              <div className="space-y-6">
                {/* Facility Size */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Total Licensed Beds: {facilitySize}
                  </label>
                  <input 
                    type="range" 
                    min="50" 
                    max="300" 
                    value={facilitySize}
                    onChange={(e) => setFacilitySize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>50 beds</span>
                    <span>300 beds</span>
                  </div>
                </div>

                {/* Current Occupancy */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Current Occupancy Rate: {currentOccupancy}%
                  </label>
                  <input 
                    type="range" 
                    min="60" 
                    max="100" 
                    value={currentOccupancy}
                    onChange={(e) => setCurrentOccupancy(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>60%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Average Daily Rate */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Average Daily Rate: ${avgDailyRate}
                  </label>
                  <input 
                    type="range" 
                    min="200" 
                    max="400" 
                    value={avgDailyRate}
                    onChange={(e) => setAvgDailyRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>$200</span>
                    <span>$400</span>
                  </div>
                </div>

                {/* Current Documentation Time */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Current Documentation Time: {currentDocTime} min/resident/day
                  </label>
                  <input 
                    type="range" 
                    min="20" 
                    max="90" 
                    value={currentDocTime}
                    onChange={(e) => setCurrentDocTime(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>20 min</span>
                    <span>90 min</span>
                  </div>
                </div>

                {/* Current Operational Efficiency */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Current Operational Efficiency: {currentEfficiency}%
                  </label>
                  <input 
                    type="range" 
                    min="50" 
                    max="90" 
                    value={currentEfficiency}
                    onChange={(e) => setCurrentEfficiency(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>50%</span>
                    <span>90%</span>
                  </div>
                </div>

                {/* Implementation Cost */}
                <div>
                  <label className="block text-lg font-semibold text-simpl-black mb-3">
                    Implementation Investment: ${implementationCost.toLocaleString()}
                  </label>
                  <input 
                    type="range" 
                    min="25000" 
                    max="100000" 
                    step="5000"
                    value={implementationCost}
                    onChange={(e) => setImplementationCost(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>$25k</span>
                    <span>$100k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-simpl-green mr-4" />
                <h2 className="text-3xl font-bold text-simpl-black font-manrope">ROI Analysis</h2>
              </div>

              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-simpl-green/10 rounded-xl p-4 border border-simpl-green/20 text-center">
                    <div className="text-3xl font-bold text-simpl-green mb-1">{results.roi.toFixed(0)}%</div>
                    <div className="text-sm text-simpl-dark-grey">Annual ROI</div>
                  </div>
                  <div className="bg-simpl-grey rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-simpl-black mb-1">
                      {results.paybackMonths < 12 ? 
                        `${results.timeToPositiveFlow}mo` : 
                        `${(results.paybackMonths/12).toFixed(1)}yr`
                      }
                    </div>
                    <div className="text-sm text-simpl-dark-grey">
                      {results.paybackMonths < 12 ? 'Break-Even' : 'Payback Period'}
                    </div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-simpl-grey rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-simpl-black mb-1">${results.monthlyBenefit.toLocaleString()}</div>
                    <div className="text-sm text-simpl-dark-grey">Monthly Benefit</div>
                  </div>
                  <div className="bg-simpl-grey rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-simpl-black mb-1">${results.threeYearNetBenefit.toLocaleString()}</div>
                    <div className="text-sm text-simpl-dark-grey">3-Year Net Benefit</div>
                  </div>
                </div>

                {/* Revenue Comparison */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-simpl-black mb-4">Annual Revenue Impact</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Current Revenue</span>
                      <span className="font-semibold">${results.currentAnnualRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Projected Revenue</span>
                      <span className="font-semibold text-simpl-green">${results.newAnnualRevenue.toLocaleString()}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-simpl-black">Net Increase</span>
                      <span className="font-bold text-simpl-green text-lg">${results.annualSavings.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Operational Improvements */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-simpl-black mb-4">Operational Improvements</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Documentation Time</span>
                      <span className="text-simpl-green font-semibold">
                        {currentDocTime} → {results.newDocTime.toFixed(0)} min (-20%)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Occupancy Rate</span>
                      <span className="text-simpl-green font-semibold">
                        {currentOccupancy}% → {results.newOccupancy.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Operational Efficiency</span>
                      <span className="text-simpl-green font-semibold">
                        {currentEfficiency}% → {results.newEfficiency.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Time & Staff Savings */}
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-simpl-black mb-4">Annual Cost-Benefit Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Annual Hours Saved</span>
                      <span className="font-semibold">{results.timeSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Staff Cost Savings</span>
                      <span className="font-semibold text-simpl-green">${results.staffSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Revenue Increase</span>
                      <span className="font-semibold text-simpl-green">${results.annualSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-simpl-dark-grey">Annual Platform Cost</span>
                      <span className="font-semibold text-red-600">-${results.ongoingAnnualCost.toLocaleString()}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-simpl-black">Net Annual Benefit</span>
                      <span className="font-bold text-simpl-green text-lg">${results.totalAnnualBenefit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Drivers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              ROI Value Drivers
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              How Simpl Healthcare delivers measurable returns across your long-term care operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-simpl-grey rounded-2xl p-6">
              <div className="w-12 h-12 bg-simpl-green/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">40% Documentation Reduction</h3>
              <p className="text-simpl-dark-grey mb-4">
                AI-powered charting reduces documentation time from 45+ minutes to under 27 minutes per resident per day.
              </p>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>• Smart auto-completion</li>
                <li>• Voice-to-text integration</li>
                <li>• Template intelligence</li>
              </ul>
            </div>

            <div className="bg-simpl-grey rounded-2xl p-6">
              <div className="w-12 h-12 bg-simpl-green/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">8% Reimbursement Increase</h3>
              <p className="text-simpl-dark-grey mb-4">
                Optimized PDPM assessments and accurate documentation lead to better reimbursement rates.
              </p>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>• PDPM optimization</li>
                <li>• Accurate MDS assessments</li>
                <li>• Comprehensive documentation</li>
              </ul>
            </div>

            <div className="bg-simpl-grey rounded-2xl p-6">
              <div className="w-12 h-12 bg-simpl-green/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">8% Occupancy Improvement</h3>
              <p className="text-simpl-dark-grey mb-4">
                Streamlined operations and better care quality lead to higher occupancy rates and resident retention.
              </p>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>• Faster admissions</li>
                <li>• Better care coordination</li>
                <li>• Improved satisfaction</li>
              </ul>
            </div>

            <div className="bg-simpl-grey rounded-2xl p-6">
              <div className="w-12 h-12 bg-simpl-green/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Reduced Compliance Risk</h3>
              <p className="text-simpl-dark-grey mb-4">
                Automated compliance checks and audit trails reduce survey deficiencies and associated costs.
              </p>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>• Real-time compliance monitoring</li>
                <li>• Automated alerts</li>
                <li>• Complete audit trails</li>
              </ul>
            </div>

            <div className="bg-simpl-grey rounded-2xl p-6">
              <div className="w-12 h-12 bg-simpl-green/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">25% Efficiency Increase</h3>
              <p className="text-simpl-dark-grey mb-4">
                Workflow automation and AI assistance significantly improve operational efficiency across all departments.
              </p>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>• Automated workflows</li>
                <li>• Smart scheduling</li>
                <li>• Integrated systems</li>
              </ul>
            </div>

            <div className="bg-simpl-grey rounded-2xl p-6">
              <div className="w-12 h-12 bg-simpl-green/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-simpl-green" />
              </div>
              <h3 className="text-xl font-bold text-simpl-black mb-3 font-manrope">Staff Satisfaction</h3>
              <p className="text-simpl-dark-grey mb-4">
                Reduced administrative burden leads to higher staff satisfaction, lower turnover, and recruitment savings.
              </p>
              <ul className="space-y-2 text-sm text-simpl-dark-grey">
                <li>• Less paperwork</li>
                <li>• More patient care time</li>
                <li>• Reduced burnout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Examples */}
      <section className="py-20 bg-simpl-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Real-World Results
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              See how similar facilities achieved exceptional ROI with Simpl Healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-simpl-green mr-3" />
                <h3 className="text-xl font-bold text-simpl-black font-manrope">150-Bed SNF</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Implementation Cost</span>
                  <span className="font-semibold">$75,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Annual Savings</span>
                  <span className="font-semibold text-simpl-green">$425,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">ROI</span>
                  <span className="font-bold text-simpl-green text-xl">467%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Payback Period</span>
                  <span className="font-semibold">2.1 months</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-simpl-green mr-3" />
                <h3 className="text-xl font-bold text-simpl-black font-manrope">90-Bed Assisted Living</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Implementation Cost</span>
                  <span className="font-semibold">$45,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Annual Savings</span>
                  <span className="font-semibold text-simpl-green">$285,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">ROI</span>
                  <span className="font-bold text-simpl-green text-xl">533%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Payback Period</span>
                  <span className="font-semibold">1.9 months</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-simpl-green/10">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-simpl-green mr-3" />
                <h3 className="text-xl font-bold text-simpl-black font-manrope">200-Bed CCRC</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Implementation Cost</span>
                  <span className="font-semibold">$95,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Annual Savings</span>
                  <span className="font-semibold text-simpl-green">$650,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">ROI</span>
                  <span className="font-bold text-simpl-green text-xl">584%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-simpl-dark-grey">Payback Period</span>
                  <span className="font-semibold">1.8 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-simpl-black mb-6 font-manrope">
              Implementation Timeline
            </h2>
            <p className="text-xl text-simpl-dark-grey max-w-4xl mx-auto font-manrope">
              See how quickly you can start realizing returns with our proven implementation process.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-simpl-green/20"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Week 1-2: Setup & Training</h3>
                  <p className="text-simpl-dark-grey">System configuration, data migration, and staff training begin.</p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-simpl-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="relative z-10 w-12 h-12 bg-simpl-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Week 3-4: Go-Live</h3>
                  <p className="text-simpl-dark-grey">Gradual rollout with ongoing support and optimization.</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Month 2-3: Full Adoption</h3>
                  <p className="text-simpl-dark-grey">Complete system adoption and initial ROI realization.</p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-simpl-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="relative z-10 w-12 h-12 bg-simpl-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="flex-1 text-left pl-8">
                  <h3 className="text-xl font-bold text-simpl-black mb-2">Month 4+: Full ROI</h3>
                  <p className="text-simpl-dark-grey">Maximum efficiency gains and full return on investment achieved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-simpl-green to-simpl-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-manrope">
            Ready to Maximize Your ROI?
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 font-manrope">
            See your personalized ROI analysis and learn how Simpl Healthcare can transform your long-term care operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="bg-white text-simpl-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors font-manrope"
            >
              Schedule ROI Consultation
            </Link>
            <Link
              href="/pdpm-calculator"
              className="border-2 border-white hover:bg-white hover:text-simpl-green text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 font-manrope"
            >
              Calculate PDPM Rates
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 