import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Loading from "../../componets/loaading/Loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createContext, useEffect, useState } from "react";

export const FavoritContext = createContext();

export default function MainLayut() {
  const navigetion = useNavigation();
  const [favoritJobs, setFavoritJobs] = useState([]);
  const addTofavorit = (job) => {
    const isAlredyFavorit = favoritJobs.some((item) => item.id === job.id);
    if (isAlredyFavorit) {
      setFavoritJobs((prev) => prev.filter((item) => item.id !== job.id));
    } else {
      setFavoritJobs([...favoritJobs, job]);
    }
  };
  useEffect(() => {
    console.log(favoritJobs);
  });

  return (
    <div>
      <FavoritContext.Provider value={{ addTofavorit, favoritJobs }}>
        <Header />
        <div>{navigetion.state === "loading" ? <Loading /> : <Outlet />}</div>
        <ToastContainer />
        <Footer />
      </FavoritContext.Provider>
    </div>
  );
}
