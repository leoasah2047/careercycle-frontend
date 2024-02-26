import './App.css';
import Interview from '../Interview/Interview.js';
import CoverLetterGenerator from '../coverLetterGen/CoverLetterGen';
import ResumeAnalyser from '../resumeAnalyser/ResumeAnalyser';
import ResignationLetterGenerator from '../resignationLetterGen/ResignationLetterGen';
import Profile from '../profile/Profile';
import Account from '../account/Account';
import Resume from '../resumeGenerator/Resume';
import Homepage from "../pages/Homepage";
import SignUpForm from "../user/SignUpForm";
import LogInForm from "../auth/LoginForm";
import ErrorPage from "../pages/ErrorPage";
import Pricing from "../pages/Pricing";
import React, { useEffect } from 'react';
import {
  useNavigate,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RecommendationPage from '../recommendation_page/RecommendationPage.js';

const App = () => {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "*":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path='/resume' element={<Resume navigate={useNavigate()} />} />
      {/*<Route path='/recommendation' element={<RecommendationPage navigate={useNavigate()} />} />*/}
      <Route path='/cover' element={<CoverLetterGenerator navigate={useNavigate()} />} />
      <Route path='/resignation' element={<ResignationLetterGenerator navigate={useNavigate()} />} />
      <Route path='/resumeanalyser' element={<ResumeAnalyser navigate={useNavigate()} />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path='/profile' element={<Profile navigate={useNavigate()} />} />
      <Route path='/interview' element={<Interview navigate={useNavigate()} />} />
      <Route path='/login' element={<LogInForm />} />
      <Route path='/account' element={<Account navigate={useNavigate()} />} />
    </Routes>
  );
}

export default App;
