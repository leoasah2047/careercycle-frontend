import LoginContent from "../components/LoginContent";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="sign-up-page">
      <div className="framenanotech-traced-parent">
        <div className="framenanotech-traced">
          <img
            className="nanotechnology-1-traced1"
            loading="eager"
            alt=""
            src="/nanotechnology-1-traced.svg"
          />
          <b className="futuresphere1">CareerCycle</b>
        </div>
        <LoginContent />
      </div>
      <div className="futuresphere-copyrights-reserv2">
        © 2024 CareerCycle Copyrights Reserved
      </div>
    </div>
  );
};

export default LoginPage;
