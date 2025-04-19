export function calculateCreditScore(
  monthlySales,
  monthlyCosts,
  farmAssetValue,
  currentLiabilities
) {
  const costToSalesRatio = (monthlyCosts / monthlySales) * 100;
  const liabilitiesToAssetsRatio = (currentLiabilities / farmAssetValue) * 100;
  const averageRatio = (costToSalesRatio + liabilitiesToAssetsRatio) / 2;
  let creditScore = 100 - averageRatio;
  let scoreClass;
  if (averageRatio < 49) {
    scoreClass = "credit-score-high";
  } else if (averageRatio >= 50 && averageRatio < 70) {
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
