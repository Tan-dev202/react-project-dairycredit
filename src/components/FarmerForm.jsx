import { useState, useEffect } from "react";

export default function FarmerForm({
  addOrUpdateFarmer,
  farmerToEdit,
  setFarmerToEdit,
}) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    monthlySales: "",
    monthlyCosts: "",
    farmAssetValue: "",
    currentLiabilities: "",
  });

  useEffect(() => {
    if (farmerToEdit) {
      setFormData({
        name: farmerToEdit.name,
        location: farmerToEdit.location,
        monthlySales: farmerToEdit.monthlySales,
        monthlyCosts: farmerToEdit.monthlyCosts,
        farmAssetValue: farmerToEdit.farmAssetValue,
        currentLiabilities: farmerToEdit.currentLiabilities,
      });
    }
  }, [farmerToEdit]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFarmer = {
      name: formData.name.trim(),
      location: formData.location.trim(),
      monthlySales: Number(formData.monthlySales),
      monthlyCosts: Number(formData.monthlyCosts),
      farmAssetValue: Number(formData.farmAssetValue),
      currentLiabilities: Number(formData.currentLiabilities),
    };

    const farmerId = farmerToEdit ? farmerToEdit.id : null;
    addOrUpdateFarmer(newFarmer, farmerId);

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      location: "",
      monthlySales: "",
      monthlyCosts: "",
      farmAssetValue: "",
      currentLiabilities: "",
    });

    if (setFarmerToEdit) {
      setFarmerToEdit(null);
    }
  };

  return (
    <div className="details form-group my-4 justify-content-center">
      <h4 id="Farmers Data">Farmer Details</h4>
      <form id="farmer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          className="form-control m-2"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="location"
          className="form-control m-2"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          id="monthlySales"
          className="form-control m-2"
          placeholder="Enter monthly sales"
          value={formData.monthlySales}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          id="monthlyCosts"
          className="form-control m-2"
          placeholder="Enter monthly costs"
          value={formData.monthlyCosts}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          id="farmAssetValue"
          className="form-control m-2"
          placeholder="Enter farm asset value"
          value={formData.farmAssetValue}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          id="currentLiabilities"
          className="form-control m-2"
          placeholder="Enter current liabilities"
          value={formData.currentLiabilities}
          onChange={handleChange}
          required
        />
        <div className="d-flex">
          <button
            type="submit"
            className="btn bg-success text-white rounded-pill me-2"
          >
            {farmerToEdit ? "Save" : "Add"}
          </button>
          {farmerToEdit && (
            <button
              type="button"
              className="btn bg-secondary text-white rounded-pill"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
