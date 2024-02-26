import "./FaqItem.css";

const FaqItem = () => {
  return (
    <div className="faq-item">
      <div className="faq-item1">
        <div className="content9">
          <div className="text-and-supporting-text4">
            <div className="f-a-q1">
              How long does the coaching process take?
            </div>
            <div className="supporting-text8">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </div>
          </div>
          <div className="icon-wrap">
            <img
              className="minus-circle-icon"
              loading="eager"
              alt=""
              src="/minuscircle.svg"
            />
          </div>
        </div>
      </div>
      <div className="line">
        <div className="divider4" />
        <div className="text3">
          <div className="button2">
            What if I wanted to end my coaching engagement?
          </div>
          <img
            className="plus-circle-icon"
            loading="eager"
            alt=""
            src="/pluscircle.svg"
          />
        </div>
      </div>
      <div className="line1">
        <div className="divider5" />
        <div className="text-parent">
          <div className="text4">Can I change through coaching?</div>
          <img className="plus-circle-icon1" alt="" src="/pluscircle.svg" />
        </div>
      </div>
      <div className="line2">
        <div className="divider6" />
        <div className="text-group">
          <div className="text5">How often do we meet?</div>
          <img className="plus-circle-icon2" alt="" src="/pluscircle.svg" />
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
