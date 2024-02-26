import "./FooterSection1.css";
import {
  useNavigate
} from "react-router-dom";

const FooterSection1 = () => {
  const navigate = useNavigate();

  const signup = () => {
    navigate("/signup");
  };

  return (
    <section className="footer-section1">
      <div className="section2">
        <img
          className="pexels-andrea-piacquadio-39785-icon"
          loading="eager"
          alt=""
          src="/gold.jpg"
        />
        <div className="links">
          <div className="links-child" />
          <img
            className="email-capture-input-field"
            loading="eager"
            alt=""
            src="/vector-1.svg"
          />
          <div className="button-base2">
            <div className="group">
              <div className="given-the-enormous">
                Used by 233,903 happy job seekers.
              </div>
              <div className="social-icons">
                <h1 className="self-esteem-therapy">Your career journey</h1>
                <div className="i-help-people">
                CareerCycle empowers professionals with AI tools for an enhanced job search experience, providing comprehensive support in your recruitment journey.
                </div>
              </div>
              <button onClick={signup} className="text">
                <div className="claim-your-spot">Sign up</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection1;
