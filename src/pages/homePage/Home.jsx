import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./home.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Halal Jibik Jobs";
  });

  return (
    <>
      <div className="home-container">
        <h2 className="title">Welcome To Halal Jibika Jobs</h2>
        <p className="description">
          Explore exciting job opportunities and manage your career with our
          innovative job platform.
        </p>
        <div className="home-features">
          <div className="feature">
            <h3>User-Friendly Interface</h3>
            <p>
              Navigate seamlessly through our platform for a hassle-free job
              search experience.
            </p>
          </div>
          <div className="feature">
            <h3>Advanced Job Search</h3>
            <p>
              Access a range of advanced tools to find and apply for your dream
              job.
            </p>
          </div>
          <div className="feature">
            <h3>Privacy and Security</h3>
            <p>
              Your personal information is kept secure and private as you
              explore new career opportunities.
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
      </div>
    </>
  );
}
