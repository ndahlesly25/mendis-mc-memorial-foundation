import "./Contact.css";
import SEO from "../../components/SEO";

export default function Contact() {
  return (
    <section className="page">
      <SEO
        title="Contact Us | MS & MC Memorial Foundation"
        description="Get in touch with the Mendi Stephen and Margaret Chuo Memorial Foundation for inquiries, grant-related questions, and general communication."
      />

      <section className="contact">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We welcome inquiries, grant-related questions, and general
            communication regarding the work of the foundation.
          </p>
        </div>

        <div className="contact-grid">
          {/* CONTACT INFO */}
          <div className="contact-info">
            <h3>Foundation Office</h3>
            <p>Mendi Stephen and Margaret Chuo Memorial Foundation</p>
            <p>Email: info@msmcfoundation.org</p>
            <p>Phone: +237 XXX XXX XXX</p>
            <p>Address: Cameroon</p>
          </div>

          {/* CONTACT FORM */}
          <form className="contact-form">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" required />

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </section>
  );
}
