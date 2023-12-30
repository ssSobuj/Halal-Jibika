/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Loading from "../componets/loaading/Loading";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
}
