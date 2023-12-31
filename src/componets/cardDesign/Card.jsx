import { useLoaderData } from "react-router-dom";
import "./card.css";

const Card = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="job-cards">
      <h1 className="section-heading">Latest Jobs</h1>
      {/* Card 1 */}
      <div className="job-card">
        <img
          src="https://pngimg.com/uploads/microsoft/microsoft_PNG13.png"
          alt="Job Profile"
          className="job-profile-pic"
        />
        <div className="job-details">
          <h3 className="job-title">Company Name: Microsoft</h3>
          <p className="job-description">Position: Senior Developer</p>
          <p className="job-description">
            Program: Microsoft Senior Development Program
          </p>
          <p className="job-description">
            <b>Description: </b> This is a junior developer recruitment from
            Microsoft
          </p>
          <div className="job-buttons">
            <button className="btn-primary">Apply Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="job-card">
        <img
          src="https://i.pinimg.com/736x/7a/34/c6/7a34c6e11b0f09733f3e0cf1206b922e.jpg"
          alt="Job Profile"
          className="job-profile-pic"
        />
        <div className="job-details">
          <h3 className="job-title">Company Name: Microsoft</h3>
          <p className="job-description">Position: Senior Developer</p>
          <p className="job-description">
            Program: Microsoft Senior Development Program
          </p>
          <p className="job-description">
            This is a junior developer recruitment from Microsoft
          </p>
          <div className="job-buttons">
            <button className="btn-primary">Apply Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="job-card">
        <img
          src="https://i.pinimg.com/736x/7a/34/c6/7a34c6e11b0f09733f3e0cf1206b922e.jpg"
          alt="Job Profile"
          className="job-profile-pic"
        />
        <div className="job-details">
          <h3 className="job-title">Company Name: Microsoft</h3>
          <p className="job-description">Position: Senior Developer</p>
          <p className="job-description">
            Program: Microsoft Senior Development Program
          </p>
          <p className="job-description">
            This is a junior developer recruitment from Microsoft
          </p>
          <div className="job-buttons">
            <button className="btn-primary">Apply Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
