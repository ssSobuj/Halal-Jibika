/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEdit, FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './jobs.css'

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
                  <div className="card-button">
                    <button>Apply</button>
                    <div className="react-icon">
                      <FaHeart className="love" />
                      <FaEdit className="edit" />
                      <MdDelete className="delet" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
