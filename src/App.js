import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import About from "./components/About";
// import Faqs from "./components/Faqs";

export default function App() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4">
        Transform Your Dairy Farm's Potential into Financial Opportunity
      </h1>
      <p className="mb-3">
        <strong>Your production data is worth more than you think.</strong>
      </p>
      <p className="mb-3">
        Every liter of milk, every feed purchase, every healthy cow in your herd
        tells a story about your farm's financial health. DairyCredit helps you
        turn that story into opportunities.
      </p>
      <h4>Break Free from Traditional Credit Barriers</h4>
      <p className="mb-3">
        Without credit history or collateral, getting financing for your dairy
        operation can seem impossible. DairyCredit changes the game by showing
        lenders what really matters: your farm's actual performance and
        potential.
      </p>
      <h4>How It Works:</h4>
      <ol>
        <li>
          <strong>Record your farm activities</strong>- Track milk production,
          input costs, and assets with our simple dashboard
        </li>
        <li>
          <strong>Watch your credit score develop</strong>- See how your farm
          management translates to creditworthiness
        </li>
        <li>
          <strong>Connect with informed lenders</strong>- Access financing
          options from partners who understand dairy farming
        </li>
      </ol>
      <div className="row">
        <div id="farmer-details-form" className="col-md-4 mb-4">
          {/* Input Form */}
        </div>
        <div id="credit-scores-table" className="col-md-8">
          <div className="card">
            <div className="card-body">
              {/* Credit Scores Table */}
            </div>
          </div>
        </div>
      </div>
      {/* <About /> */}
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
      {/* <Faqs /> */}
      <div className="mt-5 mb-5">
        <h4 className="mb-3 text-center">Get Started Today</h4>
        <p className="mb-3 text-center">
          Your farm's data is already valuable. Start putting it to work by
          using DairyCredit App for free.
        </p>
        <p className="mb-3 text-center">
          <em>Empowering dairy producers through smarter financial tools.</em>
        </p>
      </div>
    </div>
  );
}
