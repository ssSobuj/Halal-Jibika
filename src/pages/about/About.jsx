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
      <div className="about-container">
        <h2 className="title">About Halal Jibika Jobs</h2>
        <div className="first-section">
          <div>
            <img src="/public/aboutUs.png" alt="" />
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
      </div>
    </>
  );
}
