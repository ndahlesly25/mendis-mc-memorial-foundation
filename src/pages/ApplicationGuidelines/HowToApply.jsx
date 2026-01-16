import "./HowToApply.css";

export default function HowToApply() {
  return (
    <section className="page">
      <section className="how-to-apply">
        <div className="how-to-apply-header">
          <h1>How to Apply</h1>
          <p>Follow the steps below to submit a complete application.</p>
        </div>

        <div className="how-to-apply-step">
          <div className="step-number">1</div>
          <p>Review the Categories of Giving to confirm eligibility.</p>
        </div>

        <div className="how-to-apply-step">
          <div className="step-number">2</div>
          <p>Prepare all required documents and supporting information.</p>
        </div>

        <div className="how-to-apply-step">
          <div className="step-number">3</div>
          <p>Submit the application through the designated process.</p>
        </div>

        <div className="how-to-apply-step">
          <div className="step-number">4</div>
          <p>Await acknowledgment and further communication if required.</p>
        </div>
      </section>
    </section>
  );
}
