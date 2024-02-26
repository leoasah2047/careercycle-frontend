import "./Divider.css";
import {
  useNavigate
} from "react-router-dom";

const Divider = () => {
  const navigate = useNavigate();

  const signuplifetime = () => {
    navigate("/signup");
  };

  return (
    <section className="divider3">
      <div className="cta-section">
        <div className="content7">
          <div className="content8">
            <div className="heading-and-supporting-text4">
              <h1 className="heading4">
                Ready to Boost Your Career Prospects?
              </h1>
              <div className="supporting-text7">
                Limited Period Offer. Claim Now.
              </div>
            </div>
            <button onClick={signuplifetime} className="actions1">
              <div className="claim-your-spot-wrapper">
                <div className="claim-your-spot2">Sign up now</div>
              </div>
            </button>
          </div>
          <div className="image">
            <div className="screen-mockup1">
              <div className="screen-mockup-replace-fill">
              </div>
              <div className="mockup-shadow" />
            </div>
            <div className="container-title" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divider;
