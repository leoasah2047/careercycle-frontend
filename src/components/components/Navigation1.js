import "./Navigation1.css";
import { useState } from "react";
import {
  useNavigate
} from "react-router-dom";
import "../navbar/navBarHP.css";

const Navigation1 = ({account}) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
  };

  const login = () => {
    navigate("/login");
  };

  const signup = () => {
    navigate("/signup");
  };

  return (
    <header className="">
      <div className="navbar">
        <div className="logo-wrapper4">
            <img
              className="top-main-logo-wrapper"
              loading="eager"
              alt=""
              src="/vector.svg"
            />
            <b className="logo-text3">CareerCycle</b>
        </div>
        <div className="margin"></div>
        <div className="button-top">

        <ul
          className={(isMenuOpen ? "active" : "") + " nav-menu bg-white"}
          onClick={toggleMenu}
        >
          <li className="active nav-item">
            <a className="nav-link font-dm-sans-bold" href="/profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-dm-sans-bold" href="/interview">
              Interview Dojo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-dm-sans-bold" href="/cover">
              Cover Letter Generator
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-dm-sans-bold" href="/resignation">
              Resignation Letter Generator
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-dm-sans-bold" href="/resume">
              Resume Generator
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-dm-sans-bold" href="/resumeanalyser">
              AI Resume Analyser
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-dm-sans-bold" href="/recommendation">
              Job Recommendation
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-dm-sans-bold"
              href="/account"
              onClick={account}
            >
              Account
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-dm-sans-bold"
              href="/pricing"
            >
              Upgrade
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link font-dm-sans-bold"
              href="/login"
              onClick={logout}
            >
              Logout
            </a>
          </li>
        </ul>
        
        { (token) ? 
           <div
           className={(isMenuOpen ? "active" : "") + " hamburger"}
           onClick={toggleMenu}
         >
           <span className="bar"></span>
           <span className="bar"></span>
           <span className="bar"></span>
         </div> 
        :
        <>
          <a href="/login" onClick={login} className="extra-salespage">Login</a>
          <button onClick={signup} className="button1">
            <div className="get-your-free">Sign up</div>
          </button>
        </>
        }
        
        </div>
    </div>
  </header>
  );
};

export default Navigation1;
