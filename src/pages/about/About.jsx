/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    document.title = "About Halal Jibika Jobs";
  });

  return (
    <>
      {/* <div className="about-container">
        <h2 className="title">About Halal Jibika Jobs</h2>
        <div className="first-section">
          <div>
            <img src="./aboutUs.png" alt="" />
          </div>
          <div className="description-div">
            <p className="description">
              Welcome to Halal Jibika Jobs, where your career journey aligns
              seamlessly with your values. We understand the importance of
              pursuing meaningful work in an environment that respects your
              ethical and halal principles. 
            </p>
          </div>
        </div>

        <div className="socond-secton">
          <p className="p">
            Our mission is to connect job seekers with employers who align with
            ethical and halal business practices. We believe in fostering a
            community where individuals can pursue meaningful careers while
            adhering to their values.
          </p>
          <p className="p">
            At Halal Jibika Jobs, we are committed to providing a seamless and
            secure job search experience. Our platform is designed to empower
            you in finding employment opportunities that resonate with your
            principles.
          </p>
          <p className="p">
            Thank you for choosing Halal Jibika Jobs as your trusted resource
            for halal and ethical employment. We are dedicated to supporting you
            on your journey to a fulfilling career that aligns with your
            beliefs.
          </p>
        </div>

        <button onClick={goBackToHome}>Back to home</button>
      </div> */}
     


    <div className="about-page">
      <header>
        <h1>About Us</h1>
      </header>

      <section className="intro">
        <img src="https://picsum.photos/200" alt="Website Logo" />
        <p>
          Welcome to <strong>[Your Website Name]</strong>! We are dedicated to providing [brief description of your website's purpose and mission].
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At <em>[Your Website Name]</em>, our mission is to <strong>[describe your mission and goals]</strong>. We aim to <em>[mention specific objectives or values]</em>.
        </p>
      </section>

      <section className="offerings">
        <h2>What We Offer</h2>
        <img src="https://picsum.photos/200" alt="Offerings Image" />
        <p>
          [Describe the key features, services, or products offered on your website].
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <img src="https://picsum.photos/200" alt="Team Image" />
        <p>
          Meet the passionate individuals behind <strong>[Your Website Name]</strong>. Our team is committed to <em>[briefly describe the team's commitment or expertise]</em>.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <img src="https://picsum.photos/200" alt="Contact Image" />
        <p>
          Have questions or feedback? Feel free to reach out to us at <a href="mailto:info@example.com">info@example.com</a> or through our <a href="/contact">contact form</a>.
        </p>
      </section>
    </div>
 



    </>
  );
}
