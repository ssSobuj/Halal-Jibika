/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom";
import "./job.css";
export default function Job() {
  const jobdata = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container">
        <div className="single-card">
          <img src={`/img2/${jobdata.id}.jpg`} alt="" />
          <h1>{jobdata?.name?.slice(0, 15)}</h1>
          <h4>{jobdata?.email}</h4>
          <p>{jobdata?.website}</p>
          <p>{jobdata?.company.name}</p>
          <button onClick={goBack}>Go Back</button>
        </div>
      </div>
    </>
  );
}
