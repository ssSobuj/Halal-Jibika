import { useContext, useEffect } from "react";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Feverite.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

export default function Feverite() {
  const navigate = useNavigate();

  // Set document title on component mount
  useEffect(() => {
    document.title = "Feverite || Halal Jibika";
  }, []);

  // Extracting context and user information
  const { favoritJobs, isfavorit, addTofavorit, isApply, addApply } =
    useContext(glovalContext);
  const user = useAuthState(auth);

  // Redirect to home page if there are no favorite jobs
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
                      <button
                        disabled={isApply(job.id) && user}
                        onClick={() => addApply(job)}
                      >
                        {isApply(job.id) && user ? "Applied" : "Apply"}
                      </button>
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
