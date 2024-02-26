import React, { useState, useEffect } from "react";
import "./CoverLetterGen.css";
import Navigation1 from "../components/Navigation1";
import ErrorPage from "../pages/ErrorPage";

const CoverLetterGenerator = ({ navigate }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [applications, setApplications] = useState([]);
  const [application, setApplication] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [reasons, setReasons] = useState("");
  const [skills, setSkills] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState(null);
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
          const filteredApplications = data.applications.filter(
            (application) => application.user._id === data.user._id //only shows user that is logged in applications
          );
          setApplications(filteredApplications);
        });
    }
  }, []);

  function handleApplicationChange(event) {
    setApplication(event.target.value);
    setJobPosition(event.target.value.split("-")[0]);
    setCompanyName(event.target.value.split("-")[1]);
  }

  function handleJobPositionChange(event) {
    setJobPosition(event.target.value);
  }

  function handleCompanyNameChange(event) {
    setCompanyName(event.target.value);
  }

  function handleReasonsChange(event) {
    setReasons(event.target.value);
  }

  function handleResumeChange(event) {
    setResume(event.target.value);
  }

  function handleSkillsChange(event) {
    setSkills(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoadingAlert("Please wait, your cover letter is being generated...");

    fetch(`${window.BACKEND_API_SERVER_ADDRESS}/openai/coverLetter`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jobPosition: jobPosition,
        companyName: companyName,
        reasons: reasons,
        resume: resume,
        skills: skills
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setCoverLetter(data.coverLetter);
        setLoadingAlert("");
    });

    
  }

  async function handleSaveButtonClick() {
    let response = await fetch(`${window.BACKEND_API_SERVER_ADDRESS}/coverLetterGen`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        companyName: companyName,
        jobPosition: jobPosition,
        content: coverLetter,
      }),
    });
    if (response.status === 201) {
      navigate("/profile");
    } else {
      return "There was an error saving your cover letter, refresh the page to try again.";
    }
  }

  if (token) {
    return (
      <>
        <Navigation1 />
        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10 pt-28 pr-5 pl-5">
          <div className="mt-6">
            <h2 className="font-poppins-bold text-lg text-black mb-4">
              Generate your tailored cover letter
            </h2>
            <form onSubmit={handleSubmit}>
              <h3>
                If you have already started an application for it, choose from
                below
              </h3>
              <select
                value={application}
                onChange={handleApplicationChange}
                className="shadow border h-10 w-96 text-md mb-4 md:mb-8 rounded "
              >
                <option value="">Select below...</option>
                {applications &&
                  applications.map((application, index) => (
                    <option
                      key={index}
                      value={`${application.jobTitle}-${application.company}`}
                    >
                      {application.jobTitle} - {application.company}
                    </option>
                  ))}
              </select>
              <h2>What's the job position you are applying for?</h2>
              <textarea
                value={application ? application.split("-")[0] : jobPosition}
                placeholder="Data Analyst"
                onChange={handleJobPositionChange}
                className="w-full md:w-1/2 border-2 h-12 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <h2>What's the company name?</h2>
              <textarea
                value={application ? application.split("-")[1] : companyName}
                placeholder={application && application.split("-")[1]}
                onChange={handleCompanyNameChange}
                className="w-full md:w-1/2 border-2 h-12 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <h2>
                Why do you want to apply for this position/company? What
                motivates you?
              </h2>
              <textarea
                value={reasons}
                onChange={handleReasonsChange}
                placeholder="Good at everything data"
                className="w-full md:w-4/5 border-2 h-20 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <h2>
                Please, enter your skills here (i.e make them comma separated)
              </h2>
              <textarea
                value={skills}
                placeholder="AR, Data manipulation, marketing strategy"
                onChange={handleSkillsChange}
                className="w-full md:w-4/5 border-2 h-20 border-gray-100 shadow mb-4 mt-2 rounded-lg p-2"
              ></textarea>
              <h2>Please, paste a text copy of your cv here</h2>
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
                  Generate
                </button>
              </div>
            </form>
          </div>
          <br />
          <h2>{loadingAlert}</h2>
          {coverLetter && (
            <div className="bg-white mt-2 p-4 rounded-lg shadow">
              <h3>{coverLetter}</h3>
            </div>
          )}
          <br />
          {coverLetter && (
            <a
              href="/generator"
              className="bg-lorange mr-2 text-white text-md py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
            >
              Try Again!
            </a>
          )}
          {coverLetter && (
            <button
              className="bg-black text-white text-md py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
              onClick={handleSaveButtonClick}
            >
              Save Cover Letter
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

export default CoverLetterGenerator;