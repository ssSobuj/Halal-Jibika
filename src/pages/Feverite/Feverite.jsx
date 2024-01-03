import { useContext, useEffect } from "react";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import "./Feverite.css";

export default function Feverite() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Feverite || Halal Jibika";
  }, []);
  const { favoritJobs, isfavorit, addTofavorit } = useContext(glovalContext);

  if (favoritJobs.length < 1) {
    navigate("/");
  }

  return (
    <>
      <div className="fevorit-container">
        <div className="cards-container">
          <h1>Your Favourite Jobs</h1>
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
                          <Link>
                            <FaHeart
                              className="love"
                              onClick={() => addTofavorit(job)}
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
