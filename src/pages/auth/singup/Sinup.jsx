/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./singup.css";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase/firebase.config";
import Loading from "./../../../componets/loaading/Loading";

export default function Sinup() {
  useEffect(() => {
    document.title = "Signup || Halal Jibika";
  });
  const naviget = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = (
      <p style={{ backgroundColor: "red", width: "600px", color: "wheat" }}>
        {error?.message}
      </p>
    );
  }
  if (user) {
    naviget("/");
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      return toast.error("your password dose not macht");
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: username });
    return toast.success("Sign up succsesfully");
  };

  return (
    <>
      <div className="signup-main-container">
        <div className="signup-container">
          <h2 className="title">Sign Up</h2>
          <p>
            You allredy have an acount:{" "}
            <Link to={"/login"}>
              <b>Log in</b>
            </Link>{" "}
          </p>
          <form className="signup-form" onSubmit={handleSignup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              required
              id="username"
              name="username"
              placeholder="Enter your username"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              required
              id="password"
              name="password"
              placeholder="Enter your password"
            />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              required
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm your password"
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}
