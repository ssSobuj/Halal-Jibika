import { useContext, useState } from "react";
import { glovalContext } from "../../layout/mainlayOut/MainLayut";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function EditJob() {
  const { editJob } = useContext(glovalContext);
  const navigate = useNavigate()

  const [editedJob, setEditedJob] = useState({
    title: editJob?.title || "",
    logo: editJob?.logo || "",
    companyName: editJob?.companyName || "",
    position: editJob?.position || "",
    description: editJob?.description || "",
  });

  const handleEditJobSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`http://localhost:9000/jobs/${editJob?.id}`, editedJob);
      navigate('/jobs')
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="signup-main-container">
        <div className="signup-container">
          <h2 className="title">Edit Your job</h2>
          <form className="signup-form" onSubmit={handleEditJobSubmit}>
            <label htmlFor="title">Job Title:</label>
            <input
              type="text"
              required
              id="title"
              name="title"
              placeholder="Enter Job Title"
              value={editedJob.title}
              onChange={(e) => {
                setEditedJob({ ...editedJob, title: e.target.value });
              }}
            />
            <label htmlFor="logo">Logo:</label>
            <input
              type="text"
              required
              id="logo"
              name="logo"
              placeholder="Enter your Profile url"
              value={editedJob.logo}
              onChange={(e) => {
                setEditedJob({ ...editedJob, logo: e.target.value });
              }}
            />

            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              required
              id="companyName"
              name="companyName"
              placeholder="Enter your Company Name"
              value={editedJob.companyName}
              onChange={(e) => {
                setEditedJob({ ...editedJob, companyName: e.target.value });
              }}
            />

            <label htmlFor="position">Job Position</label>
            <input
              type="text"
              required
              id="position"
              name="position"
              placeholder="Confirm your yob position"
              value={editedJob.position}
              onChange={(e) => {
                setEditedJob({ ...editedJob, position: e.target.value });
              }}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              required
              id="description"
              name="description"
              placeholder="Job Description"
              value={editedJob.description}
              onChange={(e) => {
                setEditedJob({ ...editedJob, description: e.target.value });
              }}
            />
            <button type="submit">Edit Job</button>
          </form>
        </div>
      </div>
    </>
  );
}
