import { useContext } from "react";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import "./apply.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Applied() {
  const { applyJobs, setApplyJobs, isApply, addApply } =
    useContext(glovalContext);

  const navigete = useNavigate();

  const removeAllApply = () => {
    setApplyJobs([]);
    navigete(-1);
    toast.warn("all aplied jobs are delet");
  };

  return (
    <>
      <div className="applied-container">
        <div className="cards-container">
          {applyJobs.length < 1 ? (
            <h1>Your Have Not Applied Any jobs</h1>
          ) : (
            <h1>Your all Applied jobs</h1>
          )}

          <div className="cards">
            {applyJobs &&
              applyJobs.map((job) => (
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
                    <div className="card-button">
                      <div className="react-icon">
                        <button
                          disabled={isApply(job.id)}
                          onClick={() => addApply(job)}
                        >
                          {!isApply(job.id) ? "Apply" : "Applied"}
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {applyJobs.length > 0 && (
            <button onClick={removeAllApply} className="removAll">
              Remoov All
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Applied;
