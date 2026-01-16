import SEO from "../../components/SEO";
import "./Mission.css";

export default function Mission() {
  return (
    <section className="page">
      <SEO
        title="Our Mission | MS & MC Memorial Foundation"
        description="Learn about the mission, values, and guiding commitments of the Mendi Stephen and Margaret Chuo Memorial Foundation."
      />

      {/* FULL-WIDTH MISSION BANNER */}
      <div className="mission-banner">
        <div className="mission-banner-overlay">
          <h1>Our Mission</h1>
          <p>
            Guided by legacy, driven by purpose, and committed to meaningful,
            responsible impact.
          </p>
        </div>
      </div>

      <section className="mission">
        {/* INTRO HEADER (NO DUPLICATE H1) */}
        <div className="mission-header">
          <p>
            Guided by legacy, driven by purpose, and committed to responsible
            stewardship.
          </p>
        </div>

        {/* INTRO */}
        <div className="mission-block">
          <p>
            Our mission is to support initiatives that uplift individuals,
            strengthen communities, and reflect the values of compassion,
            accountability, and service. Every effort undertaken by the
            foundation is guided by a commitment to long-term impact and
            thoughtful giving.
          </p>
        </div>

        {/* IMAGE 1 — RIGHT */}
        <div className="mission-split right">
          <div className="mission-text">
            <p>
              Education remains a cornerstone of our mission. We believe that
              access to learning resources creates opportunities, nurtures
              potential, and builds resilient communities for generations to
              come.
            </p>
          </div>

          <div className="mission-image">
            <div className="image-frame">
              <img src="/images/mission-education.jpg" alt="Education support" />
              <span className="image-caption">
                Supporting access to education and learning
              </span>
            </div>
          </div>
        </div>

        {/* CORE COMMITMENTS */}
        <div className="mission-block">
          <h2>Our Core Commitments</h2>
          <ul>
            <li>Promoting access to education and learning</li>
            <li>Supporting community development initiatives</li>
            <li>Encouraging ethical leadership and faith-based values</li>
            <li>Ensuring transparency and accountability in all grants</li>
          </ul>
        </div>

        {/* IMAGE 2 — LEFT */}
        <div className="mission-split left">
          <div className="mission-image">
            <div className="image-frame">
              <img src="/images/mission-community.jpg" alt="Community support" />
              <span className="image-caption">
                Strengthening communities through purposeful action
              </span>
            </div>
          </div>

          <div className="mission-text">
            <p>
              Community development initiatives supported by the foundation are
              designed to foster dignity, resilience, and shared responsibility.
              We prioritize efforts that empower communities to thrive
              sustainably.
            </p>
          </div>
        </div>

        {/* IMAGE 3 — CENTER */}
        <div className="mission-center-image">
          <div className="image-frame">
            <img src="/images/mission-legacy.jpg" alt="Legacy and continuity" />
            <span className="image-caption">
              A legacy of service carried forward with purpose
            </span>
          </div>
        </div>

        {/* CLOSING */}
        <div className="mission-block">
          <p>
            Through all its work, the foundation remains committed to honoring
            the legacy of Mendi Stephen and Margaret Chuo by translating values
            into meaningful action and measurable impact.
          </p>
        </div>
      </section>
    </section>
  );
}
