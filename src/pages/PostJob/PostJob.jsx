/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostJob() {
  const navigate = useNavigate();
  const [postJobs, SetPostJobs] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });

  const postData = async () => {
    try {
      await axios.post("http://localhost:9000/jobs", postJobs);
      navigate("/jobs");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="signup-main-container">
        <div className="signup-container">
          <h2 className="title">Post New Job</h2>
          <form className="signup-form" onSubmit={postData}>
            <label htmlFor="title">Job Title:</label>
            <input
              type="text"
              required
              id="title"
              name="title"
              placeholder="Enter Job Title"
              onChange={(e) => {
                SetPostJobs({ ...postJobs, title: e.target.value });
              }}
            />
            <label htmlFor="logo">Logo:</label>
            <input
              type="text"
              required
              id="logo"
              name="logo"
              placeholder="Enter your Profile url"
              onChange={(e) => {
                SetPostJobs({ ...postJobs, logo: e.target.value });
              }}
            />

            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              required
              id="companyName"
              name="companyName"
              placeholder="Enter your Company Name"
              onChange={(e) => {
                SetPostJobs({ ...postJobs, companyName: e.target.value });
              }}
            />

            <label htmlFor="position">Job Position</label>
            <input
              type="text"
              required
              id="position"
              name="position"
              placeholder="Confirm your yob position"
              onChange={(e) => {
                SetPostJobs({ ...postJobs, position: e.target.value });
              }}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              required
              id="description"
              name="description"
              placeholder="Job Description"
              onChange={(e) => {
                SetPostJobs({ ...postJobs, description: e.target.value });
              }}
            />
            <button type="submit">Post Job</button>
          </form>
        </div>
      </div>
    </>
  );
}
