/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaEdit, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./jobs.css";
import axios from "axios";
import { toast } from "react-toastify";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import auth from "../../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";

export default function Jobs() {
  const [user] = useAuthState(auth);
  const data = useLoaderData();
  const [jobs, setJobs] = useState(data);
  const { setEditJob, isfavorit, addTofavorit, isApply, addApply } =
    useContext(glovalContext);
  const naviget = useNavigate();

  useEffect(() => {
    document.title = "Jobs || Halal Jibika";
  }, []);

  //delet job
  const handleDeleteJob = async (jobId) => {
    try {
      if (!user) {
        naviget("/singup");
        toast.warn(`Please Sign In First`);
      } else {
        // Show SweetAlert confirmation dialog
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#F60002",
          cancelButtonColor: "#00321F",
          confirmButtonText: "Yes, delete it!",
        });

        // If the user confirms, proceed with deletion
        if (result.isConfirmed) {
          await axios.delete(
            `https://my-json-server.typicode.com/ssSobuj/Halal-Jibika/jobs/${jobId}`
          );
          setJobs(jobs.filter((data) => data.id !== jobId));
          // Show success message with SweetAlert
          Swal.fire({
            title: "Deleted!",
            text: "Your job has been deleted.",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //eidit job
  const handleEditJob = (jobId) => {
    if (!user) {
      naviget("/singup");
      toast.warn(`Please Sign In First`);
    } else {
      const jobToEdit = jobs.find((job) => job.id === jobId);
      setEditJob(jobToEdit);
      naviget("/editjob");
      toast.success(`Edit Your Job`);
    }
  };

  return (
    <>
      <div className="cards-container">
        <div className="cards-container-heading">
          <h1>Choose Your Dream Jobs</h1>
        </div>
        <div className="cards">
          {jobs &&
            jobs.map((job) => (
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
      </div>
    </>
  );
}
