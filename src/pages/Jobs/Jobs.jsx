import { useEffect } from "react";
import "./jobs.css";
import { Link, useLoaderData } from "react-router-dom";

export default function Jobs() {
  useEffect(() => {
    document.title = "Jobs";
    console.log(jobs);
  });

  const jobs = useLoaderData();

  return (
    <>
      <div className="cards-container">
        <div className="cards">
          {jobs &&
            jobs.map((job) => (
              <div className="card" key={job.id}>
                <div className="card-img">
                  <img src={job.logo} alt="" />
                </div>
                <div className="card-content">
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
                  <Link to={`/job/${job.id}`}>
                    <button>Job Details</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
