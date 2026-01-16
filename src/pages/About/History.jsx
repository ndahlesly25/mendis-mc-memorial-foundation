import "./History.css";

<SEO
  title="Our History | MS & MC Memorial Foundation"
  description="Learn about the history and legacy of the Mendi Stephen and Margaret Chuo Memorial Foundation."
/>


export default function History() {
  return (
    <section className="page">
      <section className="history">
        {/* HEADER */}
        <div className="history-header">
          <h1>Our History</h1>
          <p>
            The foundation was established in loving memory of Mendi Stephen and
            Margaret Chuo, whose lives were defined by service, compassion, and
            commitment to community.
          </p>
        </div>

        {/* MAIN HISTORY CONTENT */}
        <div className="history-content">
          <p>
            The Mendi Stephen and Margaret Chuo Memorial Foundation was created to
            honor a legacy rooted in generosity, integrity, and faith. Their lives
            touched many, and this foundation continues that impact through
            intentional and sustainable giving.
          </p>

          <div className="history-highlight">
            This foundation exists not only to remember, but to actively build a
            better future for individuals and communities.
          </div>

          <p>
            Over time, the foundation has grown to support initiatives that align
            with its core values, focusing on long-term impact rather than
            short-term solutions.
          </p>
        </div>

        {/* LEGACY & FAMILY */}
        <div className="history-family">
          <div className="history-family-header">
            <h2>A Legacy Carried Forward</h2>
            <p>
              The legacy of Mendi Stephen and Margaret Chuo is carried forward by
              family members who continue to uphold their values of service,
              education, and community responsibility.
            </p>
          </div>

          {/* FAMILY IMAGE GRID */}
          <div className="history-family-grid">
            {/* Repeat this block for each person */}
            <div className="family-card">
              <img src="/images/family-1.jpg" alt="Family member" />
              <p className="family-name">Mme. Mendi Alice</p>
            </div>

            <div className="family-card">
              <img src="/images/family-2.jpg" alt="Family member" />
              <p className="family-name">Mme. Mendi Florence</p>
            </div>

            <div className="family-card">
              <img src="/images/family-3.jpg" alt="Family member" />
              <p className="family-name">Mr. Mendi Kenneth</p>
            </div>

            <div className="family-card">
              <img src="/images/family-4.jpg" alt="Family member" />
              <p className="family-name">Mme. Mendi Prisca</p>
            </div>

            <div className="family-card">
              <img src="/images/family-5.jpg" alt="Family member" />
              <p className="family-name">Mr. Mendi Valery</p>
            </div>

            <div className="family-card">
              <img src="/images/family-6.jpg" alt="Family member" />
              <p className="family-name">Mr. Mendi Roland</p>
            </div>

            <div className="family-card">
              <img src="/images/family-7.jpg" alt="Family member" />
              <p className="family-name">Mme. Mendi Violet</p>
            </div>

            <div className="family-card">
              <img src="/images/family-8.jpg" alt="Family member" />
              <p className="family-name">Mr. Mendi Adolf</p>
            </div>

            {/* Continue up to family-10 */}
          </div>
        </div>
      </section>
    </section>
  );
}
