/* eslint-disable react-refresh/only-export-components */
import {
  Outlet,
  ScrollRestoration,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Loading from "../../componets/loaading/Loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { getItemFromLocalstorage } from "./../../utilitis/utilitis";

// Create a global context
export const glovalContext = createContext();

export default function MainLayout() {
  // React Router hooks
  const navigetion = useNavigation();
  const navigate = useNavigate();

  // Firebase authentication hook
  const [user] = useAuthState(auth);

  // State for editing a job
  const [editJob, setEditJob] = useState(null);

  // State for storing applied jobs and favorite jobs
  const [applyJobs, setApplyJobs] = useState(
    getItemFromLocalstorage("applyJobs") || []
  );
  const [favoritJobs, setFavoritJobs] = useState(
    getItemFromLocalstorage("favoritJobs") || []
  );

  // Save applied jobs to local storage when the state changes
  useEffect(() => {
    localStorage.setItem("applyJobs", JSON.stringify(applyJobs));
  }, [applyJobs]);

  // Save favorite jobs to local storage when the state changes
  useEffect(() => {
    localStorage.setItem("favoritJobs", JSON.stringify(favoritJobs));
  }, [favoritJobs]);

  // Check if a job is already marked as favorite
  const isfavorit = (id) => favoritJobs.some((favJob) => favJob.id === id);

  // Add or remove a job from favorites
  const addTofavorit = (job) => {
    if (!user) {
      navigate("/login");
      toast.warn(`Please Sign In First`);
    } else {
      const isAlredyFavorit = favoritJobs.some((item) => item.id === job.id);
      if (isAlredyFavorit) {
        setFavoritJobs((prev) => prev.filter((item) => item.id !== job.id));
      } else {
        setFavoritJobs([...favoritJobs, job]);
        toast.success(`Job Add successful. Go to the favorite page`, {
          toastId: "success1",
        });
      }
    }
  };

  // Check if a job is already marked as applied
  const isApply = (id) => applyJobs.some((appJob) => appJob.id === id);

  // Add or remove a job from applied jobs
  const addApply = (job) => {
    if (!user) {
      navigate("/login");
      toast.warn(`Please Sign In First`);
    } else {
      const isAlredyApply = applyJobs.some((item) => item.id === job.id);
      if (isAlredyApply) {
        setApplyJobs((prev) => prev.filter((item) => item.id !== job.id));
      } else {
        setApplyJobs([...applyJobs, job]);
        toast.success(
          `You Applied successfully. Please go to the applied page`,
          {
            toastId: "success1",
          }
        );
      }
    }
  };

  return (
    <div>
      {/* Provide the global context to components */}
      <glovalContext.Provider
        value={{
          addTofavorit,
          favoritJobs,
          isfavorit,
          setEditJob,
          editJob,
          addApply,
          applyJobs,
          isApply,
          setApplyJobs,
          user,
        }}
      >
        {/* Header component */}
        <Header />

        {/* Scroll restoration component */}
        <ScrollRestoration />

        {/* Display loading component while navigating */}
        <div>{navigetion.state === "loading" ? <Loading /> : <Outlet />}</div>

        {/* Toast notifications container */}
        <ToastContainer autoClose={1000} />

        {/* Footer component */}
        <Footer />
      </glovalContext.Provider>
    </div>
  );
}
