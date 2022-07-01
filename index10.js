// CHALLENGE MONTHLY PRODUCTION PLAN

function getPlan(startProduction, numberOfMonths, percent) {
  let productionPlan = [];
  let monthlyProduction = startProduction;
  for (let i = 1; i <= numberOfMonths; i++) {
    monthlyProduction = Math.floor(
      monthlyProduction + (monthlyProduction * percent) / 100
    );
    productionPlan.push(monthlyProduction);
  }
  console.log(productionPlan);
  return productionPlan;
}

getPlan(200, 3, 50);
//  [300, 450, 675]
getPlan(10, 4, 30);
//  [13, 16, 20, 26]
getPlan(1000, 6, 20);
// [1200, 1440, 1728, 2073, 2487, 2984]
