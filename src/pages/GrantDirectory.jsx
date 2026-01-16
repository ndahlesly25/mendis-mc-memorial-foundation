import SEO from "../components/SEO";
import "./GrantDirectory.css";

export default function GrantDirectory() {
  const grants = [
    {
      name: "Education Scholarship Program",
      category: "Education",
      year: "2024",
      status: "Open",
    },
    {
      name: "Community Health Initiative",
      category: "Health",
      year: "2023",
      status: "Closed",
    },
    {
      name: "Youth Development Grant",
      category: "Community",
      year: "2024",
      status: "Open",
    },
  ];

  /* SUMMARY DATA */
  const totalGrants = grants.length;
  const openGrants = grants.filter((g) => g.status === "Open").length;
  const closedGrants = grants.filter((g) => g.status === "Closed").length;

  const categorySummary = {
    Education: 2,
    Community: 1,
    Health: 1,
  };

  return (
    <section className="page">
      <SEO
        title="Grant Directory | MS & MC Memorial Foundation"
        description="Explore current and past grant opportunities supported by the Mendi Stephen and Margaret Chuo Memorial Foundation."
      />

      <section className="grant-directory">
        {/* HEADER */}
        <div className="grant-directory-header">
          <h1>Grant Directory</h1>
          <p>
            A record of grant opportunities and supported initiatives under the
            foundation.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="grant-summary">
          <div className="summary-card">
            <h3>Total Grants</h3>
            <span>{totalGrants}</span>
          </div>

          <div className="summary-card">
            <h3>Open Grants</h3>
            <span>{openGrants}</span>
          </div>

          <div className="summary-card">
            <h3>Closed Grants</h3>
            <span>{closedGrants}</span>
          </div>
        </div>

        {/* CATEGORY SNAPSHOT */}
        <div className="grant-category-summary">
          <h2>Grant Focus Overview</h2>

          {Object.entries(categorySummary).map(([category, count], index) => (
            <div key={index} className="category-bar">
              <span>{category}</span>
              <div className="bar">
                <div
                  className="bar-fill"
                  style={{ width: `${count * 30}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP TABLE */}
        <div className="grant-table-wrapper">
          <table className="grant-table">
            <thead>
              <tr>
                <th>Grant Name</th>
                <th>Category</th>
                <th>Year</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {grants.map((grant, index) => (
                <tr key={index}>
                  <td>{grant.name}</td>
                  <td>{grant.category}</td>
                  <td>{grant.year}</td>
                  <td
                    className={`grant-status ${
                      grant.status === "Open"
                        ? "status-open"
                        : "status-closed"
                    }`}
                  >
                    {grant.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="grant-cards">
          {grants.map((grant, index) => (
            <div key={index} className="grant-card">
              <h3>{grant.name}</h3>
              <p>
                <strong>Category:</strong> {grant.category}
              </p>
              <p>
                <strong>Year:</strong> {grant.year}
              </p>
              <p className="grant-status">
                <strong>Status:</strong> {grant.status}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
