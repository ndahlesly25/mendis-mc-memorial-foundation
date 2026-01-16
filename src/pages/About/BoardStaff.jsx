import "./BoardStaff.css";

export default function BoardStaff() {
  return (
    <section className="page">
      <section className="board-staff">
        {/* HEADER */}
        <div className="board-staff-header">
          <h1>Board & Staff</h1>
          <p>
            Leadership guided by purpose, integrity, and a shared commitment to
            service.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="board-staff-grid">
          {/* TEXT */}
          <div className="board-staff-text">
            <p>
              The Mendi Stephen and Margaret Chuo Memorial Foundation is governed
              by a dedicated Board and supported by individuals who share a deep
              commitment to the foundation’s mission and values.
            </p>

            <p>
              Together, the Board and staff provide strategic direction,
              oversight, and stewardship to ensure that the foundation’s work is
              carried out with transparency, responsibility, and long-term
              impact. Their collective experience and service-oriented mindset
              help guide thoughtful decision-making across all initiatives.
            </p>

            <div className="board-staff-highlight">
              Profiles of board members and staff, along with their roles and
              areas of responsibility, will be shared here as the foundation
              continues to grow.
            </div>
          </div>

          {/* IMAGE */}
          <div className="board-staff-image">
            <div className="image-frame live">
              <img
                src="/images/board-staff.jpg"
                alt="Foundation leadership and governance"
              />
              <span className="image-caption">
                Stewardship, guidance, and collective responsibility
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
