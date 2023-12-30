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
    document.title = "Sinup";
  });
  const naviget = useNavigate();
  const goBackToHome = () => {
    naviget("/");
  };
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading></Loading>;
  }
  let errorElement;
  if(error){
    errorElement = <p style={{backgroundColor:'red', width:"600px", color:'wheat'}}>
      {error?.message}
    </p>
  }
  if(user){
    naviget('/')
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
    await updateProfile({displayName: username})
    return toast.success("Sign up succsesfully");
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   const name = data.UserName;
  //   const email = data.Email;
  //   const password = data.Password;
  //   const confirmPassword = data.confirmPassword;
  //   // console.log(name, email, password, confirmPassword);
  //   if (password !== confirmPassword) {
  //     return toast.error("your password dose not macht");
  //   }
  //   try {
  //     await createUserWithEmailAndPassword(email, password);
  //     toast.success("Sign up successfully");
  //   } catch {
  //     toast.error("Error creating user");
  //   }
  // };

  return (
    <>
      {/* <div className="signup-container">
        <h2 className="title">Sign Up</h2>
        <p>
          You allredy have an acount: <Link to={"/login"}>Log in</Link>{" "}
        </p>
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            {...register("UserName", { required: true, maxLength: 80 })}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("Email", { required: true, maxLength: 80 })}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("Password", { required: true, maxLength: 16 })}
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Enter your confirm Password"
            {...register("confirmPassword", { required: true, maxLength: 16 })}
          />

          <button type="submit">Sign Up</button>
        </form>

        <div className="goback">
          <button onClick={goBackToHome}>go back to home</button>
        </div>
      </div> */}

      <div className="signup-container">
        <h2 className="title">Sign Up</h2>
        <p>
          You allredy have an acount: <Link to={"/login"}>Log in</Link>{" "}
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

        <div className="goback">
          <button onClick={goBackToHome}>go back to home</button>
        </div>
      </div>
    </>
  );
}
