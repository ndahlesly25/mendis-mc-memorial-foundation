import { useEffect, useRef, useState } from "react";
import "./Categories.css";

export default function Categories() {
  const chartRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = [
    {
      title: "Education Support",
      description:
        "Scholarships, learning resources, and educational initiatives that empower students and lifelong learners.",
      percentage: 40,
      color: "#1f4d7a",
    },
    {
      title: "Community Development",
      description:
        "Programs that strengthen communities through social, economic, and capacity-building initiatives.",
      percentage: 25,
      color: "#3a7ca5",
    },
    {
      title: "Health & Wellbeing",
      description:
        "Support for healthcare access, wellness programs, and initiatives that improve quality of life.",
      percentage: 15,
      color: "#6b9ac4",
    },
    {
      title: "Faith & Values",
      description:
        "Initiatives that promote ethical values, faith-based support, and moral development.",
      percentage: 10,
      color: "#b89b5e",
    },
    {
      title: "Emergency & Special Causes",
      description:
        "Timely assistance for urgent needs, humanitarian relief, and special circumstances.",
      percentage: 10,
      color: "#d1b982",
    },
  ];

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  let cumulative = 0;

  return (
    <section className="page">
      <section className="categories">
        {/* HEADER */}
        <div className="categories-header">
          <h1>Categories of Giving</h1>
          <p>
            The Mendi Stephen and Margaret Chuo Memorial Foundation directs its
            resources thoughtfully to areas of greatest and most sustainable
            impact.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="categories-summary">
          {/* DONUT CHART */}
          <div className="donut-chart" ref={chartRef}>
            <svg viewBox="0 0 36 36" className={`donut ${visible ? "draw" : ""}`}>
              {categories.map((item, index) => {
                const dashArray = `${item.percentage} ${
                  100 - item.percentage
                }`;
                const dashOffset = 25 - cumulative;
                cumulative += item.percentage;

                return (
                  <circle
                    key={index}
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="transparent"
                    stroke={item.color}
                    strokeWidth={activeIndex === index ? "4.2" : "3.5"}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    className={
                      activeIndex === index ? "donut-active" : "donut-slice"
                    }
                  />
                );
              })}
            </svg>

            <div className="donut-center">
              <span>Grant</span>
              <strong>Allocation</strong>
            </div>
          </div>

          {/* LEGEND */}
          <div className="donut-legend">
            {categories.map((item, index) => (
              <div
                key={index}
                className="legend-item"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <span
                  className="legend-color"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="legend-label">
                  {item.title} — <strong>{item.percentage}%</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEW PROCESS */}
        <div className="categories-review">
          <h2>How Grant Funds Are Reviewed</h2>
          <p>
            Grant allocations reflect the foundation’s mission, priorities, and
            available resources. Funding decisions are guided by careful review,
            accountability, and a commitment to long-term community impact.
          </p>
          <p>
            Percentages shown represent a general overview of funding focus and
            may vary from year to year based on needs, opportunities, and
            strategic considerations.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="categories-grid">
          {categories.map((item, index) => (
            <div key={index} className="category-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
