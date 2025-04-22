import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { calculateCreditScore } from "../utils/creditScoreUtils";

export default function TopPerformers({ farmers }) {
  const farmersWithScores = farmers.map((farmer) => {
    const scoreInfo = calculateCreditScore(
      farmer.monthlySales,
      farmer.monthlyCosts,
      farmer.farmAssetValue,
      farmer.currentLiabilities
    );

    return {
      ...farmer,
      creditScore: parseFloat(scoreInfo.creditScore),
      scoreClass: scoreInfo.scoreClass,
    };
  });

  const topPerformers = farmersWithScores
    .sort((a, b) => b.creditScore - a.creditScore)
    .slice(0, 5);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  const pieData = topPerformers.map((farmer) => ({
    name: farmer.name,
    value: farmer.creditScore,
    location: farmer.location,
    monthlySales: farmer.monthlySales,
  }));

  return (
    <section id="top-performers" className="top-performers my-5">
      <div className="container">
        <h4 id="Top Performers" className="text-center mb-3">
          Top Performers
        </h4>
        <div className="row">
          <div className="col-md-6">
            <div className="chart-container" style={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, value }) => `${name}: ${value} pts`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value} points`,
                      props.payload.name,
                    ]}
                    labelFormatter={() => "Credit Score"}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="top-performers-details">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Credit Score</th>
                      <th>Monthly Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPerformers.map((farmer, index) => (
                      <tr key={farmer.id}>
                        <td>{index + 1}</td>
                        <td>{farmer.name}</td>
                        <td>{farmer.location}</td>
                        <td className={farmer.scoreClass}>
                          {farmer.creditScore.toFixed(2)}%
                        </td>
                        <td>Ksh. {farmer.monthlySales}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
