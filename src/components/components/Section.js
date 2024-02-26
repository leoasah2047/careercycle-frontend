import "./Section.css";

const Section = () => {
  return (
    <div className="section5">
      <div className="container7">
        <div className="content11">
          <div className="heading-and-supporting-text6">
            <h2 className="heading6">
              Get notified when I publish new articles
            </h2>
            <div className="supporting-text10">
              Stay up to date with the latest career news, announcements, and articles.
            </div>
          </div>
          <div className="email-capture">
            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <div className="label">Email</div>
                  <div className="input">
                    <input
                      className="content12"
                      placeholder="Enter your email"
                      type="text"
                    />
                    <img className="help-icon" alt="" src="/help-icon.svg" />
                  </div>
                </div>
              </div>
            </div>
            <button className="button4">
              <div className="button-base5">
                <div className="text6">Subscribe</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
