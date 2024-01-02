/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./home.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";

export default function Home() {
  useEffect(() => {
    document.title = "Home || Halal Jibika";
  });
  const jobdetails = useLoaderData();

  const { addTofavorit, isfavorit, addApply, isApply } =
    useContext(glovalContext);

  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-img">
            <img src="./hero.png" alt="" />
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
            <Link to="/postjob" className="explor-button">
              Post A Job
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
                  <>
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
                        {/* <button onClick={() => addApply(job)}>Apply</button> */}

                        <button
                          disabled={isApply(job.id)}
                          onClick={() => addApply(job)}
                        >
                          {!isApply(job.id) ? "Apply" : "Applied"}
                        </button>

                        {/* {!isApply(job.id) ? (
                          <button onClick={() => addApply(job)}>Apply</button>
                        ) : (
                          <button onClick={() => addApply(job)}>Applied</button>
                        )} */}

                        {!isfavorit(job.id) ? (
                          <FaRegHeart
                            className="love"
                            onClick={() => addTofavorit(job)}
                          />
                        ) : (
                          <FaHeart
                            className="love"
                            onClick={() => addTofavorit(job)}
                          />
                        )}
                      </div>
                    </div>
                  </>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
