import { calculateCreditScore } from "../utils/creditScoreUtils";

export default function FarmerRow({ farmer, onClick }) {
  const {
    creditScore,
    scoreClass,
    costToSalesRatio,
    liabilitiesToAssetsRatio,
  } = calculateCreditScore(
    farmer.monthlySales,
    farmer.monthlyCosts,
    farmer.farmAssetValue,
    farmer.currentLiabilities
  );

  return (
    <tr
      data-id={farmer.id}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className="farmer-row"
    >
      <td>{farmer.name}</td>
      <td>{farmer.location}</td>
      <td>{costToSalesRatio.toFixed(2)}%</td>
      <td>{liabilitiesToAssetsRatio.toFixed(2)}%</td>
      <td className={scoreClass}>{creditScore}%</td>
    </tr>
  );
}
