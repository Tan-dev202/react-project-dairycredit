import { NavLink } from "react-router-dom";

export default function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-light navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img src="../assets/dairy-cow.ico" alt="logo" className="logo" />{" "}
          DairyCredit
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <NavLink
              to="/farmer-details"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Farmers
            </NavLink>
            <NavLink
              to="/credit-scores"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Credit Scores
            </NavLink>
            <NavLink
              to="/top-performers"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Top Performers
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
            <div className="ms-auto">
              <button
                id="dark-mode-toggle"
                className="btn btn-outline-none rounded-circle"
                onClick={toggleDarkMode}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
