import { useEffect, useState } from "react";

export default function PostJob() {
  const [postJobs, SetPostJobs] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });
  useEffect(() => {
    console.log(postJobs);
  });

  return (
    <>
      <div className="signup-main-container">
        <div className="signup-container">
          <h2 className="title">Post New Job</h2>
          <form className="signup-form">
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
