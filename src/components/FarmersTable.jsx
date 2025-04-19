export default function FarmersTable({ isLoading }) {
  if (isLoading) {
    return <div className="text-center mt-4">Loading farmer data...</div>;
  }

  return (
    <div className="table-responsive mt-4">
      <h4 id="Credit Scores">Credit Scores</h4>
      <table id="farmers-table" className="table bg-light table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Monthly Sales</th>
            <th>Monthly Costs</th>
            <th>Cost/Sales Ratio</th>
            <th>Liabilities/Assets Ratio</th>
            <th>Average Ratio</th>
            <th>Credit Score (points)</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="farmers-tbody">
          
        </tbody>
      </table>
    </div>
  );
}
