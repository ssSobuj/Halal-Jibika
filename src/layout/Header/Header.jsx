import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { glovalContext } from "../mainlayOut/MainLayut";

export default function Header() {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  const { favoritJobs, applyJobs } = useContext(glovalContext);

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link>HALAL JIBIKA</Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <AiOutlineMenuFold />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li onClick={handleShowNavbar}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={handleShowNavbar}>
                <NavLink to="/about">About</NavLink>
              </li>
              <li onClick={handleShowNavbar}>
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
              {user && favoritJobs.length > 0 && (
                <li onClick={handleShowNavbar}>
                  <NavLink to="/feverite">Favorite</NavLink>
                </li>
              )}
              {user && applyJobs.length > 0 && (
                <li onClick={handleShowNavbar}>
                  <NavLink to="/applied">Applied</NavLink>
                </li>
              )}
              <li onClick={handleShowNavbar}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <div className="signup-signin">
                {user ? (
                  <>
                    <li onClick={handleShowNavbar} className="last-li">
                      <Link onClick={logOut}>Sign Out</Link>
                    </li>
                    <li onClick={handleShowNavbar} className="user-logo">
                      {user?.photoURL ? (
                        <img src={user?.photoURL} alt="" />
                      ) : (
                        <h5>{user?.displayName}</h5>
                      )}
                    </li>
                  </>
                ) : (
                  <>
                    <li onClick={handleShowNavbar} className="last-li">
                      <NavLink to={"./login"}>Sign In</NavLink>
                    </li>
                    <li onClick={handleShowNavbar}>
                      <NavLink to={"./singup"}>Sign Up</NavLink>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
