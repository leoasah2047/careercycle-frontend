import FeatureText from "./FeatureText";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="section3">
      <div className="container5">
        <div className="heading-and-supporting-text3">
          <div className="heading-and-subheading2">
            <div className="subheading2">Watch our comprehensive guide</div>
            <h1 className="heading3">To elevate your career journey</h1>
          </div>
          <div className="supporting-text4">
          Uncover the secrets of crafting an outstanding AI-powered resume, cover letter and more with CareerCycle in this insightful video tutorial.
          </div>
        </div>
        <div className="content2">
          <FeatureText
            featuredIcon="/featured-icon-6.svg"
            buttonBase="Join the free plan now!"
          />
          <FeatureText
            featuredIcon="/featured-icon-7.svg"
            buttonBase="Ready to start? Sign up!"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
