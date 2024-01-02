import { useContext } from "react";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";

function Applied() {
  const { applyJobs, setApplyJobs, isApply, addApply } =
    useContext(glovalContext);

  const removeAllApply = () => {
    setApplyJobs([]);
  };

  return (
    <>
      <div className="cards-container">
        {applyJobs.length < 1 ? (
          <h1
            style={{ color: "#00321F", marginBottom: "40px", fontSize: "40px" }}
          >
            Your Have Not Applied Any jobs
          </h1>
        ) : (
          <h1
            style={{ color: "#00321F", marginBottom: "40px", fontSize: "40px" }}
          >
            Your all Applied jobs
          </h1>
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
          <button onClick={removeAllApply}>Remoov All</button>
        )}
      </div>
    </>
  );
}

export default Applied;
