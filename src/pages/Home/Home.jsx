import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "./Home.css";



export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    {
      src: "/images/impact-1.jpg",
      caption: "Providing books to pupils to support access to education.",
    },
    {
      src: "/images/impact-2.jpg",
      caption: "Supporting students with learning materials to stay in school.",
    },
    {
      src: "/images/impact-3.jpg",
      caption: "Helping children in village communities continue their education.",
    },
  ];

  return (
    <section className="page">
      {/* HERO */}
      <section className="home-hero">
        <h1>Mendi Stephen and Margaret Chuo Memorial Foundation</h1>
        <p>
          Honoring a legacy of service, empowering lives, and supporting meaningful initiatives through
          thoughtful giving and community-focused impact.
        </p>
      </section>

                  {/* ABOUT FOUNDATION */}
      <section className="home-about">
        <div className="home-about-grid">
          {/* LEFT: TEXT */}
          <div className="home-about-text">
            <h2>About the Foundation</h2>
            <p>
              The Mendi Stephen and Margaret Chuo Memorial Foundation is a
              purpose-driven organization established to honor a legacy of
              service, compassion, and responsibility to community. Through
              thoughtful giving and carefully selected initiatives, the
              foundation seeks to support education and community development
              efforts that create lasting impact.
            </p>

            <Link to="/about/history" className="learn-more-btn">
              Learn More
            </Link>
          </div>

          {/* RIGHT: DECORATIVE IMAGE */}
          <div className="home-about-image">
            <div className="image-frame">
              <img
                src="/images/about-foundation.jpg"
                alt="Foundation outreach and education support"
              />
            </div>
          </div>
        </div>
      </section>



      {/* FOCUS AREAS */}
      <section className="home-focus">
        <h2>Our Focus Areas</h2>
        <p>
          The foundation supports carefully selected initiatives that align with
          our mission of long-term impact and responsible stewardship.
        </p>
      </section>

      {/* IMPACT IN ACTION */}
      <section className="home-impact">
        <div className="home-impact-header">
          <h2>Impact in Action</h2>
          <p>
            Through education support and community outreach, the foundation works to expand access
            to learning resources and opportunities, particularly for pupils and students in underserved communities.
          </p>
        </div>

        <div className="home-impact-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className="impact-card"
              onClick={() => setLightboxImage(img.src)}
              style={{ cursor: "pointer" }}
            >
              <img src={img.src} alt={img.caption} />
              <p>{img.caption}</p>
            </div>
          ))}
        </div>
      </section>

            {/* OUR WORK */}
      <section className="home-work">
        <div className="home-work-header">
          <h2>Our Work</h2>
          <p>
            The foundation’s programs are designed to honor legacy through
            thoughtful, sustainable support for education and community
            development.
          </p>
        </div>

        <div className="home-work-grid">
          <div className="work-card">
            <h3>Education Support</h3>
            <p>
              Providing books, learning materials, and educational assistance to
              pupils and students, particularly in underserved communities.
            </p>
          </div>

          <div className="work-card">
            <h3>Community Development</h3>
            <p>
              Supporting initiatives that strengthen families, expand access to opportunity,
              and contribute to long-term community wellbeing.
            </p>
          </div>

          <div className="work-card">
            <h3>Targeted Assistance</h3>
            <p>
              Offering timely support in special circumstances where help can
              make a meaningful and lasting difference.
            </p>
          </div>
        </div>
      </section>


      {/* LIGHTBOX */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
            <img src={lightboxImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
}
