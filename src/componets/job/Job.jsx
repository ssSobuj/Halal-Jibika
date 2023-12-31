import { useLoaderData, useNavigate } from "react-router-dom";
import "./job.css";
import { useContext } from "react";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";

export default function Job() {
  const jobdata = useLoaderData();
  const navigate = useNavigate();
  const { isApply, addApply } = useContext(glovalContext);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {jobdata && (
        <div className="job-container">
          <div className="single-card">
            <div className="first-section">
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
              </div>
            </div>
            <div className="inner-cards">
              <div className="inner-card inner-card-1">
                <h3>Job Responsibilities</h3>
                <p>
                  Delivering a pleasing, clear voice that effectively conveys
                  the intended message. Developing and rehearsing scripts to
                  ensure proper intonation, pace, and emphasis.
                </p>
              </div>
              <div className="inner-card inner-card-2">
                <h3>Job Requirements</h3>
                <p>
                  Ability to work independently in a fast-paced environment.
                  Familiarity with the latest trends and technologies in digital
                  entertainment and tech culture.
                </p>
              </div>
            </div>
            <div className="single-card-btn">
              <button
                disabled={isApply(jobdata.id)}
                onClick={() => addApply(jobdata)}
              >
                {!isApply(jobdata.id) ? "Apply" : "Applied"}
              </button>{" "}
              <button onClick={goBack}>Go Back</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
