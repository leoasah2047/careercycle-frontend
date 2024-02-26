import React from "react";
import "./Feedback.css";

const Feedback = (props) => {


  return (
    <>
      <div className="feed-container">
        <form className="flex justify-center items-center">
          <input
            className="shadow border h-10 md:w-96 w-72 text-md ml-2 pl-2"
            type="text"
            value={props.searchQuery}
            onChange={props.handleQueryChange}
            placeholder="Search"
          />
        </form>

        <div className="w-11/12 lg:w-8/12">
          {props.filteredFeedbacks &&
            props.filteredFeedbacks
            .map((feedback, index) => (
              <div key={index} className="bg-white text-navy mt-4 mb-4 px-2 py-4 shadow rounded-lg pl-4">
                <h2 id="author">
                  {feedback.user.firstName}{" "}
                  <span className="flex"></span>
                </h2>
                <h2 className="">
                  {feedback.jobPosition} -{" "}
                  <span className="company">{feedback.company}</span>
                </h2>
                <article className="mt-4 mb-4 text-lblue">
                  "{feedback.content}"
                </article>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </>
  );
};

export default Feedback;
