import SEO from "../../components/SEO";
import "./Mission.css";

export default function Mission() {
  return (
    <section className="page">
      <SEO
        title="Our Mission | MS & MC Memorial Foundation"
        description="Learn about the mission and core commitments of the Mendi Stephen and Margaret Chuo Memorial Foundation."
      />

      <section className="mission">
        <div className="mission-header">
          <h1>Our Mission</h1>
          <p>
            Guided by legacy, driven by purpose, and committed to responsible
            stewardship.
          </p>
        </div>

        <div className="mission-content">
          <p>
            Our mission is to support initiatives that uplift individuals,
            strengthen communities, and reflect the values of compassion,
            accountability, and service.
          </p>

          <h2>Our Core Commitments</h2>
          <ul>
            <li>Promoting access to education and learning</li>
            <li>Supporting community development initiatives</li>
            <li>Encouraging ethical leadership and faith-based values</li>
            <li>Ensuring transparency and accountability in all grants</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
