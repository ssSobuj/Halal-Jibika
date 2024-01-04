/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/homePage/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/auth/login/Login";
import Sinup from "../pages/auth/singup/Sinup";
import Feverite from "../pages/Feverite/Feverite";
import Jobs from "../pages/Jobs/Jobs";
import PrivacyPolicy from "../componets/PrivacyPolicy/PrivacyPolicy";
import PostJob from "../pages/PostJob/PostJob";
import EditJob from "../pages/EditJob/EditJob";
import Applied from "../pages/Apply/Applied";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: () => fetch("http://localhost:9000/jobs"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "feverite",
        element: <Feverite />,
      },
      {
        path: "privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "postjob",
        element: <PostJob />,
      },
      {
        path: "editjob",
        element: <EditJob />,
      },
      {
        path: "applied",
        element: <Applied />,
      },
      {
        path: "jobs",
        element: <Jobs />,
        loader: () => fetch("http://localhost:9000/jobs"),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singup",
        element: <Sinup />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
