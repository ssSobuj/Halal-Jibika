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
import { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

export const glovalContext = createContext();
export default function MainLayut() {
  const navigetion = useNavigation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [favoritJobs, setFavoritJobs] = useState([]);
  const [applyJobs, setApplyJobs] = useState([]);
  const [editJob, setEditJob] = useState(null);

  const isfavorit = (id) => favoritJobs.some((favJob) => favJob.id === id);
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
        toast.success(`Job Add successfull go to favorit page`, {
          toastId: "success1",
        });
      }
    }
  };

  const isApply = (id) => applyJobs.some((appJob) => appJob.id === id);
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
          `You Applied successfully. please go to the applied page`,
          {
            toastId: "success1",
          }
        );
      }
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
          setApplyJobs,
          user,
        }}
      >
        <Header />
        <ScrollRestoration />
        <div>{navigetion.state === "loading" ? <Loading /> : <Outlet />}</div>
        <ToastContainer />
        <Footer />
      </glovalContext.Provider>
    </div>
  );
}
