import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import Card from "../../componets/cardDesign/Card";
// import Hero from "../../componets/Hero/Hero";

export default function Home() {
  useEffect(() => {
    document.title = "Home || Halal Jibika";
  });

  return (
    <>
      {/* <Hero /> */}
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-img">
            <img src="/public/hero.png" alt="" />
          </div>
          <div className="hero-content">
            <div className="title">
              <h2>Welcome To Halal Jibika</h2>
            </div>
            <p className="description">
              At Halal Jibika, we are committed to providing you with a seamless
              and user-friendly experience as you navigate through the exciting
              world of halal job opportunities. Our interface is thoughtfully
              designed to make your job search easy, efficient, and enjoyable.
            </p>
            <Link to="/singup" className="explor-button">
              Explore All Jobs
            </Link>
          </div>
        </div>

        <div className="home-features">
          <div className="feature">
            <h3>
              <b>Company Name:</b> Microsoft
            </h3>
            <p>
              <b>Position:</b> Senior Developer
            </p>
            <p>
              <b>Title:</b> Microsoft Senior Development Program
            </p>
            <p>
              <b>Description: </b> This is a junior developer recruitment from
              Microsoft
            </p>{" "}
            <button className="btn-primary">Apply Now</button>
          </div>

          <div className="feature">
            <h3>
              <b>Company Name:</b> Microsoft
            </h3>
            <p>
              <b>Position:</b> Senior Developer
            </p>
            <p>
              <b>Title:</b> Microsoft Senior Development Program
            </p>
            <p>
              <b>Description: </b> This is a junior developer recruitment from
              Microsoft
            </p>{" "}
            <button className="btn-primary">Apply Now</button>
          </div>
          <div className="feature">
            <h3>
              <b>Company Name:</b> Microsoft
            </h3>
            <p>
              <b>Position:</b> Senior Developer
            </p>
            <p>
              <b>Title:</b> Microsoft Senior Development Program
            </p>
            <p>
              <b>Description: </b> This is a junior developer recruitment from
              Microsoft
            </p>{" "}
            <button className="btn-primary">Apply Now</button>
          </div>
        </div>
        {/* <div className="btn-div">
          <Link to="/singup" className="home-button">
            Explore All Jobs
          </Link>
          <Link to="/jobs" className="home-button">
            Job History
          </Link>
        </div> */}
        {/* <Card /> */}
      </div>
    </>
  );
}
