import "./HeaderFrame.css";
import {
  useNavigate
} from "react-router-dom";

const HeaderFrame = () => {

  const navigate = useNavigate();
  
  const signup = () => {
    navigate("/signup");
  };
  
  const signupplus = () => {
    window.localStorage.setItem("pricing", "PRO");
    navigate("/signup");
  };

  return (
    <section className="header-frame">
      <div className="qualification">
        <div className="qualification-child" />
        <div className="qualification-inner">
          <div className="subheading-parent">
            <div className="subheading3">Select the plan that fits your ambitions</div>
            <div className="wat-klanten-zeggen-wrapper">
              <h1 className="wat-klanten-zeggen-container">
                <p className="this-program-is">
                  Propel your career with purpose
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="claim-your-spot1">
          <div className="screen-mockup">
            <div className="medium-length-heading">
              <div className="frame-divider-text-pluscircle">
                <h3 className="this-is-not-container">
                  {`$0`}
                  <span className="not">/month</span>
                </h3>
                <div className="content5">
                  <div className="list">
                    <div className="logo-and-supporting-text">
                      <input className="check-icon1" checked={true} type="radio" />
                      <div className="showcase-and-embed">
                        No card required
                      </div>
                    </div>
                    <div className="logo-and-supporting-text1">
                      <input className="check-icon1" checked={true} type="radio" />
                      <div className="publish-across-socia">
                        No payment required.
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={signup} className="button1">
                  <div className="get-your-free">Get Started</div>
                </button>
              </div>
            </div>
            {/*<div className="rectangle-parent">
              <div className="frame-child" />
              <h3 className="this-is-not-container">
                  {`$10`}
                  <span className="not">/month</span>
                </h3>
              <div className="content6">
                <div className="list1">
                  <div className="frame">
                    <input className="check-icon1" checked={true} type="radio" />
                    <div className="showcase-and-embed1">
                    Access to all features plus unlimited AI Credits.
                    </div>
                  </div>
                  <div className="frame1">
                    <input className="check-icon1" checked={true} type="radio" />
                    <div className="showcase-and-embed2">
                    100% money-back guarantee
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={signupplus} className="button1">
                  <div className="get-your-free">Get Started</div>
                </button>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderFrame;