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
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  if (googleLoading || githubLoading) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <p className="text-red-600">
        Error: {googleError?.message} {githubError?.message}
      </p>
    );
  }
  if (googleUser || githubUser) {
    navigate("/");
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

  return (
    <>
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
