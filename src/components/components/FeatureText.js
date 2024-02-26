import "./FeatureText.css";

const FeatureText = ({ featuredIcon, buttonBase }) => {
  return (
    <div className="feature-text1">
      <img className="featured-icon1" alt="" src={featuredIcon} />
      <div className="text-and-supporting-text1">
        <b className="button-base3">{buttonBase}</b>
        <div className="supporting-text3">
          After watching the video tutorial, am certain you may now have a clear insight as to what to expect from CareerCycle.
        </div>
      </div>
    </div>
  );
};

export default FeatureText;
