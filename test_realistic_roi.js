// Test REALISTIC ROI Calculator Logic
function testRealisticROI() {
  // Test Scenario 1: Medium facility
  const facilitySize = 120;
  const currentOccupancy = 85; // 85%
  const avgDailyRate = 350;
  const currentDocTime = 45; // minutes
  const currentEfficiency = 75; // %
  const implementationCost = 75000;

  const occupiedBeds = Math.round(facilitySize * (currentOccupancy / 100));
  const currentAnnualRevenue = occupiedBeds * avgDailyRate * 365;
  
  // Very conservative improvements
  const newDocTime = currentDocTime * 0.8; // 20% reduction
  const newEfficiency = Math.min(currentEfficiency * 1.10, 95); // 10% improvement
  const newOccupancy = Math.min(currentOccupancy * 1.02, 98); // 2% improvement
  const newDailyRate = avgDailyRate * 1.015; // 1.5% increase
  
  const newOccupiedBeds = Math.round(facilitySize * (newOccupancy / 100));
  const newAnnualRevenue = newOccupiedBeds * newDailyRate * 365;
  
  const annualSavings = newAnnualRevenue - currentAnnualRevenue;
  
  // Time savings calculation - much more conservative
  const effectiveTimeSavingsPerResident = Math.min((currentDocTime - newDocTime) * 0.6, 15);
  const timeSavingsMinutesPerDay = effectiveTimeSavingsPerResident * occupiedBeds;
  const timeSavingsHoursPerYear = (timeSavingsMinutesPerDay / 60) * 365;
  const staffSavings = (timeSavingsHoursPerYear / 2080) * 32000; // $32k/year per FTE
  
  const ongoingAnnualCost = implementationCost * 0.20; // 20% annual cost
  const totalAnnualBenefit = annualSavings + staffSavings - ongoingAnnualCost;
  
  const roi = totalAnnualBenefit > 0 ? ((totalAnnualBenefit) / implementationCost) * 100 : -100;
  const paybackMonths = totalAnnualBenefit > 0 ? (implementationCost / (totalAnnualBenefit / 12)) : 999;
  
  console.log("REALISTIC ROI Test - Medium Facility:");
  console.log(`Facility Size: ${facilitySize} beds`);
  console.log(`Current Occupancy: ${currentOccupancy}% = ${occupiedBeds} beds`);
  console.log(`New Occupancy: ${newOccupancy.toFixed(1)}% = ${newOccupiedBeds} beds (+${(newOccupancy - currentOccupancy).toFixed(1)}%)`);
  console.log(`Doc Time: ${currentDocTime}min → ${newDocTime.toFixed(0)}min (saved: ${(currentDocTime - newDocTime).toFixed(0)}min, effective: ${effectiveTimeSavingsPerResident.toFixed(1)}min)`);
  console.log(`Daily Rate: $${avgDailyRate} → $${newDailyRate.toFixed(2)} (+${((newDailyRate/avgDailyRate - 1) * 100).toFixed(1)}%)`);
  console.log(`Effective hours saved per year: ${timeSavingsHoursPerYear.toFixed(0)}`);
  console.log(`Current Annual Revenue: $${currentAnnualRevenue.toLocaleString()}`);
  console.log(`New Annual Revenue: $${newAnnualRevenue.toLocaleString()}`);
  console.log(`Annual Revenue Increase: $${annualSavings.toLocaleString()}`);
  console.log(`Staff Cost Savings: $${staffSavings.toLocaleString()}`);
  console.log(`Ongoing Annual Cost: $${ongoingAnnualCost.toLocaleString()}`);
  console.log(`Total Annual Benefit: $${totalAnnualBenefit.toLocaleString()}`);
  console.log(`ROI: ${roi.toFixed(1)}%`);
  console.log(`Payback Period: ${paybackMonths.toFixed(1)} months`);
  console.log(`Monthly Benefit: $${(totalAnnualBenefit/12).toLocaleString()}`);
  console.log("");
  
  // Verify the calculation is reasonable
  if (paybackMonths <= 0 || paybackMonths > 60) {
    console.log("⚠️  Payback period: " + (paybackMonths > 60 ? "Too long" : "Too fast"));
  } else {
    console.log("✅ Payback period appears realistic");
  }
  
  if (roi < 0) {
    console.log("⚠️  WARNING: Negative ROI");
  } else if (roi > 150) {
    console.log("⚠️  WARNING: ROI still high but more reasonable");
  } else {
    console.log("✅ ROI appears realistic");
  }
}

testRealisticROI();
