import { useContext, useEffect } from "react";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import { FaEdit, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Feverite() {
  useEffect(() => {
    document.title = "Feverite || Halal Jibika";
  });
  const { favoritJobs,isfavorit,addTofavorit } = useContext(glovalContext);

  return (
    <>
      <div className="cards-container">
        <div className="cards">
          {favoritJobs &&
            favoritJobs.map((job) => (
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
