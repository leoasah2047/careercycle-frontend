import "./ErrorPage.css";
import {
  useNavigate
} from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <div className="frame-root">
        <img
          className="empty-state-icon"
          loading="eager"
          alt=""
          src="/empty-state.svg"
        />
        <div className="oops-nothing-to-see-here-parent">
          <h2 className="oops-nothing-to">Oops! Nothing to see here</h2>
          <button onClick={home} className="acting">
            <div className="bull">
              <div className="base1">
                <div className="bomm">
                  <div className="base2">
                    <div className="texting">Back to Home</div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="futuresphere-copyrights-reserv3">
        © 2024 CareerCycle Copyrights Reserved
      </div>
    </div>
  );
};

export default ErrorPage;
