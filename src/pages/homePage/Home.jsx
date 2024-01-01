import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./home.css";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    document.title = "Home || Halal Jibika";
    console.log(jobdetails);
  });
  const jobdetails = useLoaderData();

  return (
    <>
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

        <div className="home-cards-container">
          <div className="cards-heading">
            <h1>Latest Jobs</h1>
          </div>
          <div className="cards">
            {jobdetails &&
              jobdetails.slice(0, 4).map((job) => (
                // eslint-disable-next-line react/jsx-key
                <div className="card" key={job.id}>
                  <Link to={`/job/${job.id}`}>
                    <div className="card-img">
                      <img src={job.logo} alt="" />
                    </div>
                  </Link>
                  <div className="card-content">
                    <Link to={`/job/${job.id}`}>
                      <h4>
                        <b>Company Name:</b> {job.companyName}
                      </h4>
                      <p>
                        <b>Job Title:</b> {job.title}
                      </p>
                      <p>
                        <b>Job Positon:</b> {job.position}
                      </p>
                      <p>
                        <b>Job Dsc:</b> {job.description}
                      </p>
                    </Link>
                    <div className="card-deteils-button">
                      <button className="deteils-button">Apply</button>
                      <FaHeart className="love" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
