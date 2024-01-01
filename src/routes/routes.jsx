/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/homePage/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/auth/login/Login";
import Sinup from "../pages/auth/singup/Sinup";
import Error from "../componets/errorPage/Error";
import PrivateRoutes from "./PrivateRoutes";
import Feverite from "../pages/Feverite/Feverite";
import Jobs from "../pages/Jobs/Jobs";
import Job from "../componets/job/Job";
import PrivacyPolicy from "../componets/PrivacyPolicy/PrivacyPolicy";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:9000/jobs"),
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
        path: "jobs",
        element: (
          <PrivateRoutes>
            <Jobs />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:9000/jobs"),
      },
      {
        path: "job/:id",
        element: <Job />,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/jobs/${params.id}`),

        errorElement: <Error />,
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
