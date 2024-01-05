/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import "./home.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";

export default function Home() {
  const [user] = useAuthState(auth);
  const navigete = useNavigate();
  useEffect(() => {
    document.title = "Home || Halal Jibika";
  }, []);
  const jobdetails = useRouteLoaderData("root");

  const { addTofavorit, isfavorit, addApply, isApply } =
    useContext(glovalContext);

  const handleJobRouting = () => {
    if (!user) {
      navigete("/singup");
      toast.warn(`Please Sign In First`);
    } else {
      navigete("/jobs");
      toast.success(`Choose Your Dream Job`);
    }
  };
  const handlePostRouting = () => {
    if (!user) {
      navigete("/singup");
      toast.warn(`Please Sign In First`);
    } else {
      navigete("/postjob");
      toast.success(`Post Your Job`);
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <div className="hero-img">
            <img src="./hero.png" alt="" />
          </div>
          <div className="hero-content">
            <div className="title">
              <h2>Welcome To Halal Jibika</h2>
            </div>
            <p className="description">
              At Halal Jibika, we are committed to providing you with a seamless
              and user-friendly experience as you navigate through the exciting
              world of halal job opportunities. Our interface is thoughtfully
              designed to make your job search easy, efficient, and enjoyable.
            </p>
            <div className="hero-btns">
              <button
                onClick={() => handleJobRouting()}
                className="explor-button"
              >
                Explore All Jobs
              </button>
              <button
                onClick={() => handlePostRouting()}
                className="explor-button"
              >
                Post A Job
              </button>
            </div>
          </div>
        </div>

        <div className="home-cards-container">
          <div className="cards-heading">
            <h1>Latest Jobs</h1>
          </div>
          <div className="cards">
            {jobdetails &&
              jobdetails.slice(0, 4).map((job) => (
                <div className="card" key={job.id}>
                  <>
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
                      <div className="card-deteils-button">
                        <button
                          disabled={isApply(job.id) && user}
                          onClick={() => addApply(job)}
                        >
                          {isApply(job.id) && user ? "Applied" : "Apply"}
                        </button>

                        {isfavorit(job.id) ? (
                          user ? (
                            <FaHeart
                              className="love"
                              onClick={() => addTofavorit(job)}
                            />
                          ) : (
                            <FaRegHeart
                              className="love"
                              onClick={() => addTofavorit(job)}
                            />
                          )
                        ) : (
                          <FaRegHeart
                            className="love"
                            onClick={() => addTofavorit(job)}
                          />
                        )}
                      </div>
                    </div>
                  </>
                </div>
              ))}
          </div>
          <button onClick={() => handleJobRouting()} className="explor-button">
            Show More Jobs
          </button>
        </div>

        <div className="disign-section">
          <div className="disign-container">
            <h2>
              You need it, <span>we have got it</span>
            </h2>
            <ul className="categories-list">
              <li>
                <span>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
                    alt="Graphics &amp; Design"
                    loading="lazy"
                  />
                  Graphics &amp; Design
                </span>
              </li>
              <li>
                <span>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
                    alt="Digital Marketing"
                    loading="lazy"
                  />
                  Digital Marketing
                </span>
              </li>
              <li>
                <span>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
                    alt="Writing &amp; Translation"
                    loading="lazy"
                  />
                  Writing &amp; Translation
                </span>
              </li>
              <li>
                <span>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
                    alt="Video &amp; Animation"
                    loading="lazy"
                  />
                  Video &amp; Animation
                </span>
              </li>
              <li>
                <span>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
                    alt="Programming &amp; Tech"
                    loading="lazy"
                  />
                  Programming &amp; Tech
                </span>
              </li>
              <li>
                <span>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
                    alt="Lifestyle"
                    loading="lazy"
                  />
                  Lifestyle
                </span>
              </li>
              <li>
                <span className="data">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
                    alt="Data"
                    loading="lazy"
                  />
                  Data
                </span>
              </li>
              <li>
                <span>
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
                    alt="Photography"
                    loading="lazy"
                  />
                  Photography
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
