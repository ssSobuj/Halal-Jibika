import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import Loading from "../../componets/loaading/Loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


export default function MainLayut() {
  const navigetion = useNavigation();

  return (
    <div>
      <Header />
      <div>{navigetion.state === "loading" ? <Loading /> : <Outlet />}</div>
      <ToastContainer />
      <Footer />
    </div>
  );
}
