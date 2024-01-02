/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import "./home.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";

export default function Home() {
  useEffect(() => {
    document.title = "Home || Halal Jibika";
  }, []);
  const jobdetails = useRouteLoaderData("root");
  // const jobdetails = useLoaderData();

  const { addTofavorit, isfavorit, addApply, isApply } =
    useContext(glovalContext);

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
            <Link to="/singup" className="explor-button">
              Explore All Jobs
            </Link>
            <Link to="/postjob" className="explor-button">
              Post A Job
            </Link>
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
                // eslint-disable-next-line react/jsx-key
                <div className="card" key={job.id}>
                  <>
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
                      <div className="card-deteils-button">
                        {/* <button onClick={() => addApply(job)}>Apply</button> */}

                        <button
                          disabled={isApply(job.id)}
                          onClick={() => addApply(job)}
                        >
                          {!isApply(job.id) ? "Apply" : "Applied"}
                        </button>

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
                      </div>
                    </div>
                  </>
                </div>
              ))}
          </div>
        </div>

        <div className="disign-section">
          <div className="disign-container">
            <h2>You need it, we have got it</h2>
            <ul className="categories-list">
              <li>
                <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
                    alt="Graphics &amp; Design"
                    loading="lazy"
                  />
                  Graphics &amp; Design
                </a>
              </li>
              <li>
                <a href="/categories/online-marketing?source=hplo_cat_sec&amp;pos=2">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
                    alt="Digital Marketing"
                    loading="lazy"
                  />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/categories/writing-translation?source=hplo_cat_sec&amp;pos=3">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
                    alt="Writing &amp; Translation"
                    loading="lazy"
                  />
                  Writing &amp; Translation
                </a>
              </li>
              <li>
                <a href="/categories/video-animation?source=hplo_cat_sec&amp;pos=4">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
                    alt="Video &amp; Animation"
                    loading="lazy"
                  />
                  Video &amp; Animation
                </a>
              </li>              
              <li>
                <a href="/categories/programming-tech?source=hplo_cat_sec&amp;pos=6">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
                    alt="Programming &amp; Tech"
                    loading="lazy"
                  />
                  Programming &amp; Tech
                </a>
              </li>              
              <li>
                <a href="/categories/lifestyle?source=hplo_cat_sec&amp;pos=8">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
                    alt="Lifestyle"
                    loading="lazy"
                  />
                  Lifestyle
                </a>
              </li>
              <li>
                <a className="data" href="/categories/data?source=hplo_cat_sec&amp;pos=9">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
                    alt="Data"
                    loading="lazy"
                  />
                  Data
                </a>
              </li>
              <li>
                <a href="/categories/photography?source=hplo_cat_sec&amp;pos=10">
                  <img
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
                    alt="Photography"
                    loading="lazy"
                  />
                  Photography
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
