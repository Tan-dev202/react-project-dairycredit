import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useEffect, useRef } from "react";
import FarmerForm from "./components/FarmerForm";
import FarmersTable from "./components/FarmersTable";
import TopPerformers from "./components/TopPerformers";

export default function App() {
  const [farmers, setFarmers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [farmerToEdit, setFarmerToEdit] = useState(null);

  useEffect(() => {
    fetchFarmers();
  }, []);

  const fetchFarmers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/farmers");
      const data = await response.json();
      setFarmers(data);
    } catch (error) {
      console.error("Error fetching farmers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addOrUpdateFarmer = async (newFarmer, farmerId = null) => {
    try {
      let response;
      if (farmerId) {
        response = await fetch(`http://localhost:4000/farmers/${farmerId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newFarmer),
        });
      } else {
        response = await fetch("http://localhost:4000/farmers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newFarmer),
        });
      }
      await response.json();
      fetchFarmers(); // Refresh the farmers list
      setFarmerToEdit(null); // Clear the edit state
    } catch (error) {
      console.error("Error adding/updating farmer:", error);
    }
  };

  const deleteFarmer = async (farmerId) => {
    try {
      await fetch(`http://localhost:4000/farmers/${farmerId}`, {
        method: "DELETE",
      });
      fetchFarmers();
    } catch (error) {
      console.error("Error deleting farmer:", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredFarmers = farmers.filter(
    (farmer) =>
      farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formRef = useRef(null);
  const tableRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTable = () => {
    tableRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="hero-section mb-5">
        <div className="hero-overlay container">
          <h1 className="mb-4">
            Transform Your Dairy Farm's Potential into Financial Opportunity
          </h1>
          <p className="mb-3">
            <strong>Your production data is worth more than you think.</strong>
          </p>
          <div className="row justify-content-center">
            <p className="col-md-8 m-5 text-center">
              Every liter of milk, every feed purchase, every healthy cow in
              your herd tells a story about your farm's financial health.
              DairyCredit helps you turn that story into opportunities.
            </p>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <button className="btn btn-primary" onClick={scrollToForm}>
              Farmer Records
            </button>
            <button className="btn btn-outline-light" onClick={scrollToTable}>
              Credit Scores
            </button>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h4 className="text-center my-5">
          Break Free from Traditional Credit Barriers
        </h4>
        <p className="text-center my-3">
          Without credit history or collateral, getting financing for your dairy
          operation can seem impossible. DairyCredit changes the game by showing
          lenders what really matters: your farm's actual performance and
          potential.
        </p>
        <div className="d-grid justify-content-center my-4">
          <h4 className="text-center my-4">How It Works:</h4>
          <ul className="my-8">
            <li>
              <strong>Record your farm activities</strong>- Track milk
              production, input costs, and assets with our simple dashboard
            </li>
            <li>
              <strong>Watch your credit score develop</strong>- See how your
              farm management translates to creditworthiness
            </li>
            <li>
              <strong>Connect with informed lenders</strong>- Access financing
              options from partners who understand dairy farming
            </li>
          </ul>
        </div>
        <div
          id="farmer-details-form"
          className="card mt-5 d-flex justify-content-center align-items-center"
          ref={formRef}
        >
          <div className="col-md-6 my-4">
            <h4 className="text-center mt-3">Farmer Records</h4>
            <FarmerForm
              addOrUpdateFarmer={addOrUpdateFarmer}
              farmerToEdit={farmerToEdit}
              setFarmerToEdit={setFarmerToEdit}
            />
          </div>
        </div>
        <div
          id="credit-scores-table"
          className="card mt-5 d-flex justify-content-center align-items-center"
          ref={tableRef}
        >
          <h4 className="text-center mt-5">Credit Scores</h4>
          <div className="col-md-10 mt-2">
            <div className="card-body">
              <FarmersTable
                farmers={filteredFarmers}
                isLoading={isLoading}
                editFarmer={addOrUpdateFarmer}
                deleteFarmer={deleteFarmer}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
              />
            </div>
          </div>
        </div>
        <TopPerformers farmers={farmers} />
        <div className="mt-5 mb-5">
          <h4 className="mb-3 text-center">Why Dairy Farmers Trust Us:</h4>
          <p className="mb-3 text-center">
            "DairyCredit showed my bank what I already knew—that my farm is a
            solid investment. I secured funding for a cooling system that's
            increased my milk quality and income."
          </p>
          <p className="mb-3 text-center">
            - <em>Sarah M., Dairy Farmer</em>
          </p>
        </div>
        <div className="mt-5 mb-5">
          <h4 className="mb-3 text-center">Get Started Today</h4>
          <p className="mb-3 text-center">
            Your farm's data is already valuable. Start putting it to work by
            using DairyCredit App for free.
          </p>
          <p className="mb-3 text-center">
            <em>
              - Empowering Dairy Producers Through Smarter Financial Tools -
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
