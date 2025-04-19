import { calculateCreditScore } from "../utils/creditScoreUtils";

export default function FarmerRow({ farmer, deleteFarmer }) {
  const {
    creditScore,
    scoreClass,
    averageRatio,
    costToSalesRatio,
    liabilitiesToAssetsRatio,
  } = calculateCreditScore(
    farmer.monthlySales,
    farmer.monthlyCosts,
    farmer.farmAssetValue,
    farmer.currentLiabilities
  );

  return (
    <tr data-id={farmer.id}>
      <td>{farmer.name}</td>
      <td>{farmer.location}</td>
      <td>{farmer.monthlySales.toLocaleString()}</td>
      <td>{farmer.monthlyCosts.toLocaleString()}</td>
      <td>{costToSalesRatio.toFixed(2)}%</td>
      <td>{liabilitiesToAssetsRatio.toFixed(2)}%</td>
      <td>{averageRatio.toFixed(2)}%</td>
      <td className={scoreClass}>{creditScore} pts</td>
      <td>
        <button
          className="delete-btn btn btn-sm btn-danger rounded"
          onClick={() => deleteFarmer(farmer.id)}
        >
          x
        </button>
      </td>
    </tr>
  );
}
