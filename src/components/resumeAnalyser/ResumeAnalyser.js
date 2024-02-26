import React, { useState } from "react";
import "./ResumeAnalyser.css";
import Navigation1 from "../components/Navigation1";
import ErrorPage from "../pages/ErrorPage";

const ResumeAnalyser = ({ navigate }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [jobPosition, setJobPosition] = useState("");
  const [resume, setResume] = useState("");
  const [resumeAnalysis, setResumeAnalysis] = useState(null);
  const [loadingAlert, setLoadingAlert] = useState("");

  function handleJobPositionChange(event) {
    setJobPosition(event.target.value);
  }

  function handleResumeChange(event) {
    setResume(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoadingAlert("Please wait, your Resume is being reviewed...");

    fetch(`${window.BACKEND_API_SERVER_ADDRESS}/openai/resumeRating`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jobPosition: jobPosition,
        resume: resume
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setResumeAnalysis(data.resumeAnalysis);
        setLoadingAlert("");
    });
  }

  if (token) {
    return (
      <>
        <Navigation1 />
        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10 pt-28 pr-5 pl-5">
          <div className="mt-6">
            <h2 className="font-poppins-bold text-lg text-black mb-4">
              Generate a very elaborate Resume Analysis with AI
            </h2>
            <form onSubmit={handleSubmit}>
              <h2>What's the job position you are applying for?</h2>
              <textarea
                value={jobPosition}
                placeholder="Data Analyst"
                onChange={handleJobPositionChange}
                className="w-full md:w-1/2 border-2 h-12 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <h2>Please, paste a text copy of your resume here</h2>
              <textarea
                value={resume}
                onChange={handleResumeChange}
                className="w-full md:w-4/5 border-2 h-20 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <div>
                <button
                  type="submit"
                  className="bg-black text-white text-md py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
                >
                  Analyze
                </button>
              </div>
            </form>
          </div>
          <br />
          <h2>{loadingAlert}</h2>
          {resumeAnalysis && (
            <div className="bg-white mt-2 p-4 rounded-lg shadow">
              <h3>{resumeAnalysis}</h3>
            </div>
          )}
          <br />
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

export default ResumeAnalyser;