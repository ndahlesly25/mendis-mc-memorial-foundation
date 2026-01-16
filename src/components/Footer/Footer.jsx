import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Mendi Stephen and Margaret Chuo Memorial Foundation</h3>

        <p className="footer-legacy">
          Honoring a legacy of service, compassion, and commitment by supporting
          education, community development, and meaningful impact.
        </p>

        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about/history">About Us</Link>
          <Link to="/categories">Categories of Giving</Link>
          <Link to="/grants">Grant Directory</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} Mendi Stephen and Margaret Chuo Memorial Foundation
        </p>
      </div>
    </footer>
  );
}
