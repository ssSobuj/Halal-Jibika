/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import auth from "../../../firebase/firebase.config";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect } from "react";
import SocialLogin from "./SocialLogin/SocialLogin";
import Loading from "../../../componets/loaading/Loading";

export default function Login() {
  useEffect(() => {
    document.title = "SingIn || Halal Jibika";
  });
  const navigate = useNavigate()

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorElement = (
      <p style={{ backgroundColor: "red", width: "600px", color: "wheat" }}>
        {error?.message}
      </p>
    );
  }

  if (user) {
    navigate(from, { replace: true });
    toast.success(`Log in successfully`, {
      toastId: "success1",
    });
  }

  const hadnleSingInData = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <div className="login-container">
        <div className="inner-container">
          <h2 className="title">Sign In</h2>
          <p>
            You Do not have an acount{" "}
            <Link to={"/singup"}><b>Create an aconut</b></Link>{" "}
          </p>
          <form className="login-form" onSubmit={hadnleSingInData}>
            <label htmlFor="username">Username:</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Enter your username"
            />

            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <div className="login-btn-div">
              <button>Login</button>
            </div>
          </form>
          <div className="SocialLoginAndother">
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
}
