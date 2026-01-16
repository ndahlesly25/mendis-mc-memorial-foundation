import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="nav">
      {/* LOGO (CLICKABLE) */}
      <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
        <div className="logo-mark">
          <img src="/images/logo1.png" alt="MS & MC Foundation Logo" />
        </div>

        {/* Desktop name */}
        <h2 className="logo-full">
          Mendi Stephen & Margaret Chuo Memorial Foundation
        </h2>

        {/* Mobile name */}
        <h2 className="logo-short">MS & MC</h2>
      </Link>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        {/* ABOUT US */}
        <li className="dropdown">
          <span>About Us ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/about/history" onClick={() => setMenuOpen(false)}>History</Link></li>
            <li><Link to="/about/mission" onClick={() => setMenuOpen(false)}>Mission</Link></li>
            <li><Link to="/about/annual-reports" onClick={() => setMenuOpen(false)}>Annual Reports</Link></li>
            <li><Link to="/about/quarterly-news" onClick={() => setMenuOpen(false)}>Quarterly News</Link></li>
            <li><Link to="/about/board-staff" onClick={() => setMenuOpen(false)}>Board & Staff</Link></li>
          </ul>
        </li>

        <li>
          <Link
            to="/categories"
            className={location.pathname.startsWith("/categories") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Categories of Giving
          </Link>
        </li>

        {/* APPLICATION GUIDELINES */}
        <li className="dropdown">
          <span>Application Guidelines ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/guidelines/overview" onClick={() => setMenuOpen(false)}>Overview</Link></li>
            <li><Link to="/guidelines/how-to-apply" onClick={() => setMenuOpen(false)}>How to Apply</Link></li>
            <li><Link to="/guidelines/decision-process" onClick={() => setMenuOpen(false)}>Decision Process</Link></li>
            <li><Link to="/guidelines/grant-reporting" onClick={() => setMenuOpen(false)}>Grant Reporting</Link></li>
          </ul>
        </li>

        <li>
          <Link
            to="/grants"
            className={location.pathname.startsWith("/grants") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Grant Directory
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={location.pathname.startsWith("/contact") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
