// Test ROI Calculator Logic
function testROICalculation() {
  // Test Scenario 1: Medium facility
  const facilitySize = 120;
  const currentOccupancy = 85; // 85%
  const avgDailyRate = 350;
  const currentDocTime = 45; // minutes
  const currentEfficiency = 75; // %
  const implementationCost = 75000;

  const occupiedBeds = Math.round(facilitySize * (currentOccupancy / 100));
  const currentAnnualRevenue = occupiedBeds * avgDailyRate * 365;
  
  // Conservative improvements
  const newDocTime = currentDocTime * 0.6; // 40% reduction
  const newEfficiency = Math.min(currentEfficiency * 1.25, 95); // 25% improvement
  const newOccupancy = Math.min(currentOccupancy * 1.08, 98); // 8% improvement
  const newDailyRate = avgDailyRate * 1.08; // 8% increase
  
  const newOccupiedBeds = Math.round(facilitySize * (newOccupancy / 100));
  const newAnnualRevenue = newOccupiedBeds * newDailyRate * 365;
  
  const annualSavings = newAnnualRevenue - currentAnnualRevenue;
  const timeSavings = (currentDocTime - newDocTime) * occupiedBeds * 365;
  const staffSavings = (timeSavings / 2080) * 45000;
  
  const ongoingAnnualCost = implementationCost * 0.15;
  const totalAnnualBenefit = annualSavings + staffSavings - ongoingAnnualCost;
  
  const roi = ((totalAnnualBenefit) / implementationCost) * 100;
  const paybackMonths = (implementationCost / (totalAnnualBenefit / 12));
  
  console.log("Test Scenario 1 - Medium Facility:");
  console.log(`Facility Size: ${facilitySize} beds`);
  console.log(`Current Occupancy: ${currentOccupancy}%`);
  console.log(`Current Occupied Beds: ${occupiedBeds}`);
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
    console.log("⚠️  WARNING: Payback period seems unrealistic");
  } else {
    console.log("✅ Payback period appears realistic");
  }
  
  if (roi < 0 || roi > 1000) {
    console.log("⚠️  WARNING: ROI seems unrealistic");
  } else {
    console.log("✅ ROI appears realistic");
  }
}

testROICalculation();
