import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.css";
import {
  useNavigate
} from "react-router-dom";

const LogInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`${window.BACKEND_API_SERVER_ADDRESS}/tokens`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status !== 201) {
      console.log(response)
      let data = await response.json();
      console.log(data._id);
      if (response.status === 404) {
        setLoginMessage(
          "There is no account with this email address. Please Sign up."
        );
      } else if (response.status === 401) {
        setLoginMessage("Password doesn't match, try again.");
      }
    } else {
      let data = await response.json();
      if (data.token === undefined) {
        console.log("token not valid");
      } else if (data.user_id === undefined) {
        console.log("user id is undefined");
      }
      setLoginMessage(null);
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("user_id", data.user_id);
      navigate("/profile");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <section className="bg-cream pb-24 h-screen">
       <header className="bg-cream dark:bg-navy font-poppins-regular">
       <nav className="flex justify-between items-evenly px-4 pt-4 w-full">
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
        </div>
        </nav>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center bg-cream pt-40 lg:pt-50">
        <div className="w-2/3 md:w-2/4 place-self-center lg:col-span-5">
          <h1 className="text-5xl font-poppins-bold text-teal">Login</h1>
          {loginMessage && <h2 className="login_message">{loginMessage}</h2>}
          <form
            onSubmit={handleSubmit}
            className="bg-cream pt-6 pb-8 mb-4 font-dm-sans-regular"
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-lorange text-5xl font-thin rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                type="submit"
                id="submit"
              >
                <FontAwesomeIcon icon={faArrowRight} size="sm" className="" />
              </button>
            </div>

            <p className="pt-4 text-sm text-navy">
              Don't have an account yet?{" "}
              <span>
                <a className="text-lorange" href="/signup">
                  Sign up
                </a>
              </span>
            </p>
          </form>
        </div>
        <div className="lg:col-span-7">
          <img
            src="/cc-login.png"
            width={600}
            alt="illustration of login page"
            className="hidden md:visible overflow-visible w-4/6 mx-auto lg:mt-0 lg:col-span-5 lg:flex lg:w-7/12"
          />
        </div>
      </div>
      <footer className="bg-cream dark:bg-navy p-6 pb-20 font-dm-sans-regular"></footer>
    </section>
  );
};

export default LogInForm;
