import "./privacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <section className="privacy">
        <h2>Introduction</h2>
        <p>
          Welcome to Halal Jibika, a job website dedicated to providing
          opportunities in compliance with halal principles.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information that you provide when creating an account,
          submitting a job application, or using our services. This may include
          personal and professional details.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information collected to match job seekers with relevant
          opportunities, improve our services, and ensure compliance with halal
          principles.
        </p>

        {/* Add more sections based on your specific data processing practices */}

        <h2>Security</h2>
        <p>
          We take appropriate measures to protect your information from
          unauthorized access or disclosure.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices.
          Please review it periodically for any updates.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
