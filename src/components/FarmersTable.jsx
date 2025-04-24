import { useState } from "react";
import FarmerRow from "./FarmerRow";
import FarmerModal from "./FarmerModal";

export default function FarmersTable({
  farmers,
  isLoading,
  deleteFarmer,
  editFarmer,
  searchTerm,
  handleSearch,
}) {
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRowClick = (farmer) => {
    setSelectedFarmer(farmer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFarmer(null);
  };

  if (isLoading) {
    return <div className="text-center mt-4">Loading farmer data...</div>;
  }

  return (
    <div className="farmers-table-container">
      <div className="search-container d-flex my-4">
        <input
          id="farmer-search"
          type="search"
          className="form-control search-input rounded mx-2"
          style={{ width: "300px" }}
          placeholder="Search by name or location"
          value={searchTerm}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table id="farmers-table" className="table bg-light table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Cost/Sales Ratio</th>
              <th>Liabilities/Assets Ratio</th>
              <th>Credit Score</th>
            </tr>
          </thead>
          <tbody id="farmers-tbody">
            {farmers.length > 0 ? (
              farmers.map((farmer) => (
                <FarmerRow
                  key={farmer.id}
                  farmer={farmer}
                  onClick={() => handleRowClick(farmer)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No farmers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {showModal && selectedFarmer && (
        <FarmerModal
          farmer={selectedFarmer}
          onClose={handleCloseModal}
          onDelete={deleteFarmer}
          onEdit={editFarmer}
        />
      )}
    </div>
  );
}
