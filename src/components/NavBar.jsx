import { NavLink } from "react-router-dom";
import logo from "../assets/dairy-cow-white.png";

export default function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-dark text-light navbar sticky-top navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="logo" className="logo" /> DairyCredit
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
