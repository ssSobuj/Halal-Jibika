import { useLoaderData, useNavigate } from "react-router-dom";
import "./job.css";
export default function Job() {
  const jobdata = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {jobdata && (
        <div className="job-container">
          <div className="single-card">
            <div className="job-img">
              <img src={jobdata.logo} alt="" />
            </div>
            <div className="job-content">
              <h4>
                <b>Company Name:</b> {jobdata.companyName}
              </h4>
              <p>
                <b>Job Title:</b> {jobdata.title}
              </p>
              <p>
                <b>Job Positon:</b> {jobdata.position}
              </p>
              <p>
                <b>Job Dsc:</b> {jobdata.description}
              </p>
              <button onClick={goBack}>Go Back</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
