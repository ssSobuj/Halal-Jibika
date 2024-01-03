/* eslint-disable react/no-unescaped-entities */
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
      <div className="about-page">
        <header>
          <h1>About Us</h1>
        </header>

        <section className="intro">
          <img src="/aboutUs.png" alt="Website Logo" />
          <p>
            Welcome to <strong>Halal Jibika Jobs</strong>! We are dedicated to
            providing where dreams transcend the ordinary, and possibilities
            unfold with each heartbeat. In the tapestry of our journey, we
            envisage a world where aspirations are not merely chased but
            transformed into tangible realities.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At <em>Halal Jibika Jobs</em>, our mission is to empower lives by
            embracing innovation as a catalyst for positive change. We are
            committed to pioneering solutions that transcend conventional
            boundaries, fostering a world where every individual's potential is
            unlocked and celebrated.
          </p>
        </section>

        <section className="offerings">
          <h2>What We Offer</h2>
          <img src="/what-we-offer-icon-button.png" alt="Offerings Image" />
          <p>
            At Halal Jibika, we take pride in offering a distinctive and
            enriching environment where talent thrives, dreams are realized, and
            careers ascend to new heights. Discover the unparalleled benefits of
            joining our community of dedicated professionals.
          </p>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <img
            src="https://www.clipartmax.com/png/full/240-2403053_culture-our-team-icon-png.png"
            alt="Team Image"
          />
          <p>
            Meet the passionate individuals behind{" "}
            <strong>Halal Jibika Jobs</strong>. Our team is committed to
            excellence, bringing a wealth of expertise and dedication to every
            endeavor. We are united by a shared passion for innovation, a
            commitment to delivering exceptional results, and a relentless
            pursuit of excellence. Through collaborative efforts and a focus on
            continuous improvement, we strive to exceed expectations, setting
            new standards in our field.
          </p>
        </section>
      </div>
    </>
  );
}
