import { FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO + NAME */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/logo1.png" alt="MS & MC Foundation Logo" />
          </div>
          <h3>MS & MC Memorial Foundation</h3>
          <p>
            Honoring legacy through education, community development, and
            meaningful impact.
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF /> Facebook
          </a>

          <a href="mailto:info@msmcfoundation.org">
            <FaEnvelope /> info@msmcfoundation.org
          </a>

          <a href="tel:+237000000000">
            <FaPhoneAlt /> +237 XXX XXX XXX
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Mendi Stephen & Margaret Chuo Memorial Foundation
      </div>
    </footer>
  );
}
