import FarmerRow from "./FarmerRow";
export default function FarmersTable({ farmers, isLoading, deleteFarmer, editFarmer, searchTerm, handleSearch }) {
  if (isLoading) {
    return <div className="text-center mt-4">Loading farmer data...</div>;
  }

  return (
    <div className="table-responsive mt-0">
      <h4 id="Credit Scores" className="text-center">Credit Scores</h4>
      <div className="search-container d-flex mb-0">
        <input
          id="farmer-search"
          type="search"
          className="form-control search-input"
          style={{ width: "300px" }}
          placeholder="Search by name or location"
          value={searchTerm}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="farmers-tbody">
          {farmers.length > 0 ? (
            farmers.map((farmer) => (
              <FarmerRow
                key={farmer.id}
                farmer={farmer}
                editFarmer={editFarmer}
                deleteFarmer={deleteFarmer}
              />
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">
                No farmers found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
