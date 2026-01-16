import SEO from "../components/SEO";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="page">
      <SEO
        title="Contact Us | MS & MC Memorial Foundation"
        description="Get in touch with the Mendi Stephen and Margaret Chuo Memorial Foundation for inquiries, grant-related questions, and general communication."
      />

      <section className="contact">
        {/* HEADER */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We welcome inquiries, grant-related questions, and general
            communication regarding the work of the foundation.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="contact-grid">
          {/* CONTACT INFO */}
          <div className="contact-info">
            <h3>Foundation Office</h3>
            <p>Mendi Stephen and Margaret Chuo Memorial Foundation</p>
            <p>Email: info@msmcfoundation.org</p>
            <p>Phone: +237 675 405 919</p>
            <p>Location: Cameroon</p>
          </div>

          {/* CONTACT FORM */}
          <form className="contact-form">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" required />

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* MAP SECTION */}
        <div className="contact-map">
          <h2>Our Location</h2>
          <p>
            The Mendi Stephen and Margaret Chuo Memorial Foundation operates
            within Cameroon, supporting initiatives across communities and
            regions.
          </p>

          <div className="map-wrapper">
            <iframe
              title="Cameroon Map"
              src="https://www.google.com/maps?q=Cameroon&z=6&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
}
