import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function Header() {
  const [user] = useAuthState(auth);
  console.log(user);
  const logOut = () => {
    signOut(auth);
  };

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      {/* <div className="header-wrap">
        <nav>
          <div className="logo">
            <img src="/public/logo-removebg.png" alt="" />
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <NavLink className="nav-link" to={""}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"./contact"}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"./jobs"}>
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"./feverite"}>
                  Favorite
                </NavLink>
              </li>
              {user ? (
                <li>
                  <Link onClick={logOut} className="nav-link">
                    Log Out
                  </Link>
                </li>
              ) : (
                <li>
                  <NavLink className="nav-link" to={"./login"}>
                    Log in
                  </NavLink>
                </li>
              )}
              <li>{user?.photoURL && <img src={user?.photoURL} alt="" />}</li>
            </ul>
          </div>
        </nav>
      </div> */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src="/public/logo-removebg.png" alt="" />
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
              <li onClick={handleShowNavbar}>
                <NavLink to="/feverite">Favorite</NavLink>
              </li>
              <li onClick={handleShowNavbar}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {user ? (
                <li>
                  <Link onClick={logOut}>Sign Out</Link>
                </li>
              ) : (
                <li>
                  <NavLink to={"./login"}>Sign In</NavLink>
                </li>
              )}
              <li className="user-logo">
                {user?.photoURL && (
                  <>
                    <img src={user?.photoURL} alt="" />
                    <h5>{user?.displayName}</h5>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
