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

export default function Signup() {
  // Set document title on component mount
  useEffect(() => {
    document.title = "Signup || Halal Jibika";
  }, []);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Firebase hooks for user creation and profile update
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating] = useUpdateProfile(auth);

  // Display loading spinner while signing up
  if (loading || updating) {
    return <Loading />;
  }

  let errorElement;

  // Display error message if signup fails
  if (error) {
    errorElement = (
      <p style={{ backgroundColor: "red", width: "600px", color: "wheat" }}>
        {error?.message}
      </p>
    );
  }

  // Redirect to home page upon successful signup
  if (user) {
    navigate("/");
  }

  // Handle the signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      return toast.error("Your password does not match");
    }

    // Create a new user with email and password
    await createUserWithEmailAndPassword(email, password);

    // Update the user profile with the provided username
    await updateProfile({ displayName: username });

    // Show success message
    return toast.success("Sign up successfully");
  };

  return (
    <>
      <div className="signup-main-container">
        <div className="signup-container">
          <h2 className="title">Sign Up</h2>
          <p>
            You allredy have an acount:{" "}
            <Link to={"/login"}>
              <b>Sign in your acount</b>
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
