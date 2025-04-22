export function calculateCreditScore(
  monthlySales,
  monthlyCosts,
  farmAssetValue,
  currentLiabilities
) {
  const costToSalesRatio = (monthlyCosts / monthlySales) * 100;
  const liabilitiesToAssetsRatio = (currentLiabilities / farmAssetValue) * 100;
  const averageRatio = (costToSalesRatio + liabilitiesToAssetsRatio) / 2;
  
  let creditScore = Math.max(0, Math.min(100, 100 - averageRatio));
  
  let scoreClass;
  if (creditScore >= 70) {
    scoreClass = "credit-score-high";
  } else if (creditScore >= 40 && creditScore < 70) {
    scoreClass = "credit-score-medium";
  } else {
    scoreClass = "credit-score-low";
  }
  
  return {
    creditScore: creditScore.toFixed(2),
    scoreClass,
    averageRatio,
    costToSalesRatio,
    liabilitiesToAssetsRatio,
  };
}
