import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      {/* LOGO */}
      <div className="logo">
        <div className="logo-mark">
          <img src="/images/logo1.png" alt="MS & MC Foundation Logo" />
        </div>
        <h2>MS & MC</h2>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        {/* ABOUT US */}
        <li className="dropdown">
          <span>About Us ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about/history" onClick={() => setMenuOpen(false)}>
                History
              </Link>
            </li>
            <li>
              <Link to="/about/mission" onClick={() => setMenuOpen(false)}>
                Mission
              </Link>
            </li>
            <li>
              <Link to="/about/annual-reports" onClick={() => setMenuOpen(false)}>
                Annual Reports
              </Link>
            </li>
            <li>
              <Link to="/about/quarterly-news" onClick={() => setMenuOpen(false)}>
                Quarterly News
              </Link>
            </li>
            <li>
              <Link to="/about/board-staff" onClick={() => setMenuOpen(false)}>
                Board & Staff
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/categories" onClick={() => setMenuOpen(false)}>
            Categories of Giving
          </Link>
        </li>

        {/* APPLICATION GUIDELINES */}
        <li className="dropdown">
          <span>Application Guidelines ▾</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/guidelines/overview" onClick={() => setMenuOpen(false)}>
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/guidelines/how-to-apply"
                onClick={() => setMenuOpen(false)}
              >
                How to Apply
              </Link>
            </li>
            <li>
              <Link
                to="/guidelines/decision-process"
                onClick={() => setMenuOpen(false)}
              >
                Decision Process
              </Link>
            </li>
            <li>
              <Link
                to="/guidelines/grant-reporting"
                onClick={() => setMenuOpen(false)}
              >
                Grant Reporting
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/grants" onClick={() => setMenuOpen(false)}>
            Grant Directory
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* NAV ICONS (DESKTOP ONLY) */}
      <div className="nav-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="mailto:info@msmcfoundation.org">
          <FaEnvelope />
        </a>
        <a href="tel:+237000000000">
          <FaPhoneAlt />
        </a>
      </div>
    </nav>
  );
}
