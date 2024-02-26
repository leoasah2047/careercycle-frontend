import { useMemo } from "react";
import "./FeatureText1.css";

const FeatureText1 = ({ title, description, featuredIcon, propMarginLeft }) => {
  const featureTextStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft
    };
  }, [propMarginLeft]);

  return (
    <div className="feature-text" style={featureTextStyle}>
      <img
        className="featured-icon"
        loading="eager"
        alt=""
        src={featuredIcon}
      />
      <div className="text-and-supporting-text">
        <b className="b-u-t">{title}</b>
        <div className="supporting-text1">
        {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureText1;
