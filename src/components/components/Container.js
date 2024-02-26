import "./Container.css";

const Container = () => {
  return (
    <div className="container9">
      <div className="divider7" />
      <div className="content14">
        <div className="made-by">
          <a
            className="made-with-a-container"
            href="https://www.careercycle.co/"
            target="_blank"
          >
            <span className="made-with-a">{`Made by `}</span>
            <b className="happydigital">CareerCycle</b>
          </a>
        </div>
        <div className="social-icons1">
          <img
            className="social-icon"
            loading="eager"
            alt=""
            src="/social-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
