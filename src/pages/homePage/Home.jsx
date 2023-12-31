import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import Hero from "../../componets/Hero/Hero";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Halal Jibik Jobs";
  });

  return (
    <>
    <Hero />
      {/* <div className="home-container">
        <h2 className="title">Welcome To Halal Jibika</h2>
        <p className="description">
          At Halal Jibika, we are committed to providing you with a seamless and
          user-friendly experience as you navigate through the exciting world of
          halal job opportunities. Our interface is thoughtfully designed to
          make your job search easy, efficient, and enjoyable.
        </p>
        <div className="home-features">
          <div className="feature">
            <h3>User-Friendly Interface</h3>
            <p>
              Navigate seamlessly through our platform for a hassle-free job
              search experience.
            </p>
            <p>
              {" "}
              Explore job listings effortlessly with our intuitive navigation
              system. Find the perfect job that aligns with your skills and
              values in just a few clicks.
            </p>
          </div>
          <div className="feature">
            <h3>Advanced Job Search</h3>
            <p>
              Access a range of advanced tools to find and apply for your dream
              job.
            </p>
            <p>
              We believe in transparency. Each job listing comes with a clear
              and detailed description, ensuring you have all the information.
            </p>
          </div>
          <div className="feature">
            <h3>Privacy and Security</h3>
            <p>
              Your personal information is kept secure and private as you
              explore new career opportunities.
            </p>
            <p>
              We have a comprehensive Privacy Policy that details how we
              collect, use, and protect your personal information.
            </p>
          </div>
        </div>
        <div className="btn-div">
          <Link to="/singup" className="home-button">
            Explore All Jobs
          </Link>
          <Link to="/jobs" className="home-button">
            Job History
          </Link>
        </div>
      </div> */}
    </>
  );
}
