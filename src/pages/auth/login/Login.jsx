/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useForm } from "react-hook-form";
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
    document.title = "Login";
  });
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const handleBack = () => {
    navigate(-1);
  };
  const handleGoHome = () => {
    navigate("/");
  };
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

  //use form////
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onsubmit = async (data) => {
  //   const email = data.Email;
  //   const password = data.Password;
  //   // console.log(email, password);
  //   try {
  //     await signInWithEmailAndPassword(email, password);
  //     toast.success("Sing in successfully");
  //   } catch {
  //     toast.error("Error creating user");
  //   }
  // };
  // console.log(user);

  return (
    <>
      {/* <div className="login-container">
        <h2 className="title">Login</h2>
        <p>
          You Do not have an acount <Link to={"/singup"}>Create an aconut</Link>{" "}
        </p>
        <form className="login-form" onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("Password", {})}
          />

          <div className="login-btn-div">
            <button>Login</button>
          </div>
        </form>
        <div>
          <button>Sign up with google</button>
          <button>Sign up with GitHub</button>
        </div>
      </div> */}

      <div className="login-container">
        <h2 className="title">Login</h2>
        <p>
          You Do not have an acount <Link to={"/singup"}>Create an aconut</Link>{" "}
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
      </div>

      <div className="SocialLoginAndother">
        <SocialLogin />
        <div className="handleBackAndHandleGoHome">
          <button onClick={handleBack}>Go back</button>
          <button onClick={handleGoHome}>Go to Home</button>
        </div>
      </div>
    </>
  );
}
