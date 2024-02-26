// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./navBarLP.css";

// export default function Navbar({logout, account}) {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="nav">
//             <a href="/profile" className="site-title">
//                 Career Companion
//             </a>
//             <button className="menu-icon" onClick={toggleMenu}>
//                 <span className="menu-icon__line"></span>
//                 <span className="menu-icon__line"></span>
//                 <span className="menu-icon__line"></span>
//             </button>
//             <ul className={isMenuOpen ? "menu-open" : ""}>
//                 <li className="active">
//                     <a href="/#">Community</a>
//                 </li>
//                 <li>
//                     <a href="/interview">Interview Dojo</a>
//                 </li>
//                 <li>
//                     <a href="/generator">Letter Generator</a>
//                 </li>
//                 <li>
//                     <a href="/account" onClick={account}>Account</a>
//                 </li>
//                 <li>
//                     <a href="/login" onClick={logout}>Logout</a>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// UNCOMMENT BELOW TO TRY A DIFFERENT NAVBAR MENU

import { useState } from "react";
import "./navBarHP.css";

export default function Navbar({account}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
  };

  return (
    <header>
      <nav className="nav">
        <div className="flex justify-content items-center">
          <div className="logo-wrapper4">
              <img
                className="top-main-logo-wrapper"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <b className="logo-text3">CareerCycle</b>
          </div>
        </div>

    
        {/* <button className="menu-icon" onClick={toggleMenu}>
                    <span className="menu-icon__line"></span>
                    <span className="menu-icon__line"></span>
                    <span className="menu-icon__line"></span>
                </button> */}
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
              onClick={upgrade}
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
        <div
          className={(isMenuOpen ? "active" : "") + " hamburger"}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
