import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation1 from "../components/Navigation1";
import "./RecommendationPage.css";

const RecommendationPage = ({navigate}) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"))
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {

    const options = {
      method: 'POST',
      url: 'https://linkedin-jobs-search.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
      },
      data: {
        search_terms: searchQuery,
        location: location,
        page: '1'
      }
    };

    if (searchQuery && location) {
      try {
        const response = axios.request(options);
        setJobs(response.data)
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }  
    }
  }, [searchQuery, location]);

  function handleQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  if (token) {
    return (
      <>
        <Navigation1 />
        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10 pr-5 pl-5">
        <br/><br/>
        
        <div className="pb-12">
          <h2 className="flex justify-center text-black font-poppins-bold text-2xl">Job Recommendations</h2>
          <br/>
          <div className="feed-container">
        <form className="flex justify-center items-center">
          <input
            className="shadow border h-10 md:w-96 w-72 text-md ml-2 pl-2"
            type="text"
            value={searchQuery}
            onChange={handleQueryChange}
            placeholder="Search for jobs on glassdoor and linkedin"
          />
          <input
            className="shadow border h-10 md:w-96 w-72 text-md ml-2 pl-2"
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Location i.e Chicago, Los Angeles etc"
          />
        </form>

        <div className="w-11/12 lg:w-8/12">
          {jobs &&
            jobs
            .map((job, index) => (
              <div key={index} className="bg-white text-navy mt-4 mb-4 px-2 py-4 shadow rounded-lg pl-4">
                <h2 id="author">
                  {job.company_name}{" "}
                  <span className="text-small">{job.posted_date}</span>
                </h2>
                <h2 className="">
                  {job.job_title}{" "}
                  <span className="company">{job.job_location}</span>
                </h2>
                <a href={job.linkedin_job_url_cleaned} target="_blank" rel="noopener noreferrer" className="mt-4 mb-4 text-lblue">
                  View job
                </a>
              </div>
            ))
            .reverse()}
        </div>
      </div>
        </div>
        </div>
      </>
    );
  }
}

export default RecommendationPage;