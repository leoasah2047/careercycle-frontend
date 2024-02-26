import React, { useState, useEffect } from "react";
import "./ResignationLetterGen.css";
import Navigation1 from "../components/Navigation1";
import ErrorPage from "../pages/ErrorPage";

const ResignationLetterGenerator = ({ navigate }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [jobPosition, setJobPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [reasons, setReasons] = useState("");
  const [lasting, setLasting] = useState("");
  const [resignationLetter, setResignationLetter] = useState(null);
  const [loadingAlert, setLoadingAlert] = useState("");

  useEffect(() => {
    if (token) {
      fetch(`${window.BACKEND_API_SERVER_ADDRESS}/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("user", data.user);
          setToken(data.token);
        });
    }
  }, []);

  function handleJobPositionChange(event) {
    setJobPosition(event.target.value);
  }

  function handleCompanyNameChange(event) {
    setCompanyName(event.target.value);
  }

  function handleReasonsChange(event) {
    setReasons(event.target.value);
  }

  function handleLastingChange(event) {
    setLasting(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoadingAlert("Please wait, your resignation letter is being generated...");

    fetch(`${window.BACKEND_API_SERVER_ADDRESS}/openai/resignationLetter`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jobPosition: jobPosition,
        companyName: companyName,
        reasons: reasons,
        lasting: lasting
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setResignationLetter(data.resignationLetter);
        setLoadingAlert("");
    });

    
  }

  async function handleSaveButtonClick() {
    let response = await fetch(`${window.BACKEND_API_SERVER_ADDRESS}/resignationLetterGen`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        companyName: companyName,
        jobPosition: jobPosition,
        content: resignationLetter,
      }),
    });
    if (response.status === 201) {
      navigate("/profile");
    } else {
      return "There was an error saving your resignation letter, refresh the page to try again.";
    }
  }

  if (token) {
    return (
      <>
        <Navigation1 />
        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10 pt-28 pr-5 pl-5">
          <div className="mt-6">
            <h2 className="font-poppins-bold text-lg text-black mb-4">
              Generate your tailored resignation letter
            </h2>
            <form onSubmit={handleSubmit}>
              <h2>What's your job position</h2>
              <textarea
                value={jobPosition}
                placeholder="Data Analyst"
                onChange={handleJobPositionChange}
                className="w-full md:w-1/2 border-2 h-12 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <h2>What's the company name</h2>
              <textarea
                value={companyName}
                placeholder="Google Inc"
                onChange={handleCompanyNameChange}
                className="w-full md:w-1/2 border-2 h-12 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <h2>
                Why do you want to resign from this position/company?
              </h2>
              <textarea
                value={reasons}
                placeholder="Man am currently at my limit, AI's about to replace me"
                onChange={handleReasonsChange}
                className="w-full md:w-4/5 border-2 h-20 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <h2>What's going to be your last day at work</h2>
              <textarea
                value={lasting}
                placeholder="April 20th, 2022"
                onChange={handleLastingChange}
                className="w-full md:w-1/2 border-2 h-12 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="bg-black text-white text-md py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
          <br />
          <h2>{loadingAlert}</h2>
          {resignationLetter && (
            <div className="bg-white mt-2 p-4 rounded-lg shadow">
              <h3>{resignationLetter}</h3>
            </div>
          )}
          <br />
          {resignationLetter && (
            <a
              href="/generator"
              className="bg-lorange mr-2 text-white text-md py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
            >
              Try Again!
            </a>
          )}
          {resignationLetter && (
            <button
              className="bg-black text-white text-md py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
              onClick={handleSaveButtonClick}
            >
              Save Resignation Letter
            </button>
          )}
          <br />
        </div>
      </>
    );
  } else {
    return (
      <>
        <ErrorPage/>
      </>
    );
  }
};

export default ResignationLetterGenerator;