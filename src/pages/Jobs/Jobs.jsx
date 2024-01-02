/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { FaEdit, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./jobs.css";
import axios from "axios";
import { toast } from "react-toastify";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import Applied from "../Apply/Applied";

export default function Jobs() {
  const data = useRouteLoaderData("root");
  const [jobs, setJobs] = useState(data);
  const { setEditJob, isfavorit, addTofavorit, isApply, addApply } =
    useContext(glovalContext);
  const naviget = useNavigate();

  useEffect(() => {
    document.title = "Jobs || Halal Jibika";
  }, []);
  //delet data.............................
  const handleDeleteJob = async (jobId) => {
    try {
      await axios.delete(`http://localhost:9000/jobs/${jobId}`);
      setJobs(jobs.filter((data) => data.id !== jobId));
    } catch (error) {
      console.error("Error:", error);
      // Handle errors
    }
  };
  //delet job.............................
  //edit job................................
  const handleEditJob = (jobId) => {
    const jobToEdit = jobs.find((job) => job.id === jobId);
    setEditJob(jobToEdit);
    naviget("/editjob");
  };

  //edit job................................

  return (
    <>
      <div className="cards-container">
        <div className="cards-container-heading">
          <h1>Choose Your Dream Jobs</h1>
        </div>
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
                    <button
                      disabled={isApply(job.id)}
                      onClick={() => addApply(job)}
                    >
                      {!isApply(job.id) ? "Apply" : "Applied"}
                    </button>{" "}
                    <div className="react-icon">
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
                      <FaEdit
                        onClick={() => handleEditJob(job.id)}
                        className="edit"
                      />
                      <MdDelete
                        onClick={() => handleDeleteJob(job.id)}
                        className="delet"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Applied />
      </div>
    </>
  );
}
