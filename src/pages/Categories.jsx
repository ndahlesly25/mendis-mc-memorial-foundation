import "./Categories.css";

export default function Categories() {
  const categories = [
    {
      title: "Education Support",
      description:
        "Scholarships, learning resources, and educational initiatives that empower students and lifelong learners."
    },
    {
      title: "Community Development",
      description:
        "Programs that strengthen communities through social, economic, and capacity-building initiatives."
    },
    {
      title: "Health & Wellbeing",
      description:
        "Support for healthcare access, wellness programs, and initiatives that improve quality of life."
    },
    {
      title: "Faith & Values",
      description:
        "Initiatives that promote ethical values, faith-based support, and moral development."
    },
    {
      title: "Emergency & Special Causes",
      description:
        "Timely assistance for urgent needs, humanitarian relief, and special circumstances."
    }
  ];

  return (
    <section className="page">
      <section className="categories">
        <div className="categories-header">
          <h1>Categories of Giving</h1>
          <p>
            The Mendi Stephen and Margaret Chuo Memorial Foundation supports
            carefully selected initiatives that align with its mission and
            long-term vision.
          </p>
        </div>

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
