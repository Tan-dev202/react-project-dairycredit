import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { calculateCreditScore } from "../utils/creditScoreUtils";

export default function FarmerModal({ farmer, onClose, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: farmer.name,
    location: farmer.location,
    monthlySales: farmer.monthlySales,
    monthlyCosts: farmer.monthlyCosts,
    farmAssetValue: farmer.farmAssetValue,
    currentLiabilities: farmer.currentLiabilities,
  });

  const {
    creditScore,
    averageRatio,
    costToSalesRatio,
    liabilitiesToAssetsRatio,
  } = calculateCreditScore(
    farmer.monthlySales,
    farmer.monthlyCosts,
    farmer.farmAssetValue,
    farmer.currentLiabilities
  );

  const financialData = [
    { name: "Monthly Sales", value: farmer.monthlySales, color: "#4CAF50" },
    { name: "Monthly Costs", value: farmer.monthlyCosts, color: "#F44336" },
  ];

  const ratioData = [
    {
      name: "Cost/Sales",
      value: parseFloat(costToSalesRatio),
      color: "#2196F3",
    },
    {
      name: "Liabilities/Assets",
      value: parseFloat(liabilitiesToAssetsRatio),
      color: "#FF9800",
    },
  ];

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFarmer = {
      ...formData,
      monthlySales: Number(formData.monthlySales),
      monthlyCosts: Number(formData.monthlyCosts),
      farmAssetValue: Number(formData.farmAssetValue),
      currentLiabilities: Number(formData.currentLiabilities),
    };

    onEdit(updatedFarmer, farmer.id);
    setIsEditing(false);
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this farmer?")) {
      onDelete(farmer.id);
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={handleBackdropClick}>
        <div className="modal-header">
          <h4>{isEditing ? "Edit Farmer" : `${farmer.name}'s Details`}</h4>
          <button
            onClick={onClose}
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>

        <div className="modal-body">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="monthlySales" className="form-label">
                  Monthly Sales
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="monthlySales"
                  value={formData.monthlySales}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="monthlyCosts" className="form-label">
                  Monthly Costs
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="monthlyCosts"
                  value={formData.monthlyCosts}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="farmAssetValue" className="form-label">
                  Farm Asset Value
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="farmAssetValue"
                  value={formData.farmAssetValue}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="currentLiabilities" className="form-label">
                  Current Liabilities
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="currentLiabilities"
                  value={formData.currentLiabilities}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <h5>Financial Information</h5>
                  <p>
                    <strong>Monthly Sales:</strong> {farmer.monthlySales}
                  </p>
                  <p>
                    <strong>Monthly Costs:</strong> {farmer.monthlyCosts}
                  </p>
                  <p>
                    <strong>Farm Asset Value:</strong> {farmer.farmAssetValue}
                  </p>
                  <p>
                    <strong>Current Liabilities:</strong>{" "}
                    {farmer.currentLiabilities}
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>Credit Analysis</h5>
                  <p>
                    <strong>Cost/Sales Ratio:</strong>{" "}
                    {costToSalesRatio.toFixed(2)}%
                  </p>
                  <p>
                    <strong>Liabilities/Assets Ratio:</strong>{" "}
                    {liabilitiesToAssetsRatio.toFixed(2)}%
                  </p>
                  <p>
                    <strong>Average Ratio:</strong> {averageRatio.toFixed(2)}%
                  </p>
                  <p>
                    <strong>Credit Score:</strong> {creditScore}%
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <h5>Financial Breakdown</h5>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={financialData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {financialData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>Ratio Analysis</h5>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={ratioData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {ratioData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => `${value.toFixed(2)}%`}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {!isEditing && (
          <div className="modal-footer">
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-primary me-2"
            >
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
