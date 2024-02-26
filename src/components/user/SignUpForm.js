import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./SignUpForm.css";
import {
  useNavigate
} from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch(`${window.BACKEND_API_SERVER_ADDRESS}/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,

        lastName: lastName
      })
    }).then((response) => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <section className="bg-cream pb-24 h-screen">
      <header className="bg-cream font-poppins-regular">
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
          <h1 className="text-5xl font-poppins-bold text-teal">Sign up</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-cream pt-6 pb-8 mb-4 font-dm-sans-regular"
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                pattern="[a-zA-Z0-9.-_!?]{8,20}"
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
              Already have an account?{" "}
              <span>
                <a className="text-lorange" href="/login">
                 Login
                </a>
              </span>
            </p>
          </form>
        </div>
        <div className="lg:col-span-7">
          <img
            src="/cc-signup.png"
            alt="illustration of sign up form"
            width={600}
            className="hidden md:visible overflow-visible w-4/6 mx-auto lg:mt-0 lg:flex lg:w-7/12 place-self-center"
          />
        </div>
      </div>
      <footer className="bg-cream dark:bg-navy p-6 font-dm-sans-regular pb-20 "></footer>
    </section>
  );
};

export default SignUpForm;
