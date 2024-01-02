/* eslint-disable react-refresh/only-export-components */
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Loading from "../../componets/loaading/Loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createContext, useState } from "react";

export const glovalContext = createContext();
export default function MainLayut() {
  const navigetion = useNavigation();

  const [favoritJobs, setFavoritJobs] = useState([]);
  const [applyJobs, setApplyJobs] = useState([]);
  const [editJob, setEditJob] = useState(null);

  const isfavorit = (id) => favoritJobs.some((favJob) => favJob.id === id);
  const addTofavorit = (job) => {
    const isAlredyFavorit = favoritJobs.some((item) => item.id === job.id);
    if (isAlredyFavorit) {
      setFavoritJobs((prev) => prev.filter((item) => item.id !== job.id));
    } else {
      setFavoritJobs([...favoritJobs, job]);
    }
  };

  const isApply = (id) => applyJobs.some((appJob) => appJob.id === id);
  const addApply = (job) => {
    const isAlredyApply = applyJobs.some((item) => item.id === job.id);
    if (isAlredyApply) {
      setApplyJobs((prev) => prev.filter((item) => item.id !== job.id));
    } else {
      setApplyJobs([...applyJobs, job]);
    }
  };

  /*   useEffect(() => {
    console.log(applyJobs);
  }, [applyJobs]); */

  return (
    <div>
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
        }}
      >
        <Header />
        <div>{navigetion.state === "loading" ? <Loading /> : <Outlet />}</div>
        <ToastContainer />
        <Footer />
      </glovalContext.Provider>
    </div>
  );
}
