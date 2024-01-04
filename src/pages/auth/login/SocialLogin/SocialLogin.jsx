/* eslint-disable no-unused-vars */
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../../componets/loaading/Loading";

export default function SocialLogin() {
  // Google Sign-In hook
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // GitHub Sign-In hook
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Display loading spinner while signing in
  if (googleLoading || githubLoading) {
    return <Loading></Loading>;
  }

  // Display error message if sign-in fails
  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <p className="text-red-600">
        Error: {googleError?.message} {githubError?.message}
      </p>
    );
  }

  // Redirect to the home page upon successful sign-in
  if (googleUser || githubUser) {
    navigate("/");
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

  return (
    <>
      {/* Social login buttons */}
      <div className="GoogleAndGithub">
        <button className="git" onClick={() => signInWithGoogle()}>
          Sign up with <FaGoogle className="gogloe" />
        </button>
        <button className="google" onClick={() => signInWithGithub()}>
          Sign up with <FaGithub className="github" />{" "}
        </button>
      </div>
    </>
  );
}
