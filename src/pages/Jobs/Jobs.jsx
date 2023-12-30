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
      <div className="cards">
        {jobs &&
          jobs.map((job) => (
            <div className="card" key={job.id}>
              <img src={job.logo} alt="" />
              <h4>{job.title}</h4>
              <p>{job.companyName}</p>
              <p>{job.positione}</p>
              <p>{job.description}</p>
              <Link to={`/job/${job.id}`}>
                <button>job details</button>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}
