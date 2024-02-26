import FeatureText1 from "./FeatureText1";
import "./Divider1.css";

const Divider1 = () => {
  return (
    <section className="divider2">
      <div className="features-section">
        <div className="container3">
          <div className="content1">
            <div className="heading-and-supporting-text2">
              <div className="heading-and-subheading1">
                <div className="subheading1">How does it work?</div>
                <h1 className="heading2">
                Are you ready to elevate your career?
                </h1>
              </div>
              <div className="supporting-text2">
              CareerCycle is the only platform that uses leading AI to automate every aspect of creating a hirable resume—writing, editing, formatting, and optimizing.
              </div>
            </div>
          </div>
        </div>
        <div className="container4">
        <FeatureText1
            featuredIcon="/featured-icon-3.svg"
            propMarginLeft="8px"
            title="Job Application Tracker"
            description="Maximize your job search efficiency with our Job Application Tracker! Seamlessly organize applications, track progress, for your career goals."
          />
          <FeatureText1
            featuredIcon="/featured-icon-4.svg"
            propMarginLeft="8px"
            title="Job Recommendations"
            description="Unlock your career potential with personalized job recommendations for you! Our AI matches your skills with the perfect career opportunities."
          />
          <FeatureText1
            featuredIcon="/featured-icon-2.svg"
            propMarginLeft="8px"
            title="AI Resume Analyser"
            description="Transform your job search with our AI Resume Analyzer! Unlock personalized insights, optimize keywords, and stand out to employers."
          />

          <FeatureText1 
            featuredIcon="/featured-icon.svg" 
            propMarginLeft="4px"
            title="AI Cover Letter Writer"
            description="Simply enter a targeted job title and company and watch your cover letter write itself in seconds." />
          <FeatureText1
            featuredIcon="/featured-icon-1.svg"
            propMarginLeft="4px"
            title="AI Resume Writer"
            description="We've made it easy for you with our tool that creates perfect resume content based on the your work details."
          />
          <FeatureText1
            featuredIcon="/featured-icon-2.svg"
            propMarginLeft="4px"
            title="AI Resignation Letter Writer"
            description="Simplify resignation. Experience the ultimate relief as our AI-powered resignation letter generator crafts your letter in seconds. "
          />
          <FeatureText1
            featuredIcon="/featured-icon-3.svg"
            propMarginLeft="8px"
            title="AI Interview Question & Answer"
            description="Sharpen your interview question and answer skills with CareerCycle AI Interview. Job-tailored questions, focused on your resume."
          />
          <FeatureText1
            featuredIcon="/featured-icon-4.svg"
            propMarginLeft="8px"
            title="AI Keyword Targeting"
            description="Create a resume and our free resume scanner will evaluate it against key criteria hiring managers and applicant tracking systems (ATS) look for."
          />
          <FeatureText1
            featuredIcon="/featured-icon-2.svg"
            propMarginLeft="8px"
            title="AI Video Interview"
            description="Get your communication abilities ready with an AI Live Video Interview, to analyze your answers, voice and facial expressions emotions using AI."
          />
        </div>
      </div>
    </section>
  );
};

export default Divider1;
