import { useContext } from "react";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import { FaEdit, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Applied() {
  const { applyJobs } = useContext(glovalContext);
  console.log(applyJobs);
  return (
    <>
      <div className="cards-container">
        <h2>These are the jobs you have applied for</h2>

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
                      <button>Apply</button>
                      <FaRegHeart />
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

export default Applied;
