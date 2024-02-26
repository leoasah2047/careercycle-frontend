import NavigationDesktop from "../components/NavigationDesktop";
import ValuesBottomWrappers from "../components/ValuesBottomWrappers";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <main className="features1">
        <section className="third-level-frame">
          <NavigationDesktop />
          <div className="values-bottom-wrapper">
            <button className="section-tag-wrapper">
              <img className="noise-icon" alt="" src="/noise@2x.png" />
              <div className="text-element">Features</div>
            </button>
            <h1 className="line-element">
              Discover the Tools that Drive Success
            </h1>
            <div className="icon-shape">
              Unleash innovation and accelerate growth with our dynamic product.
            </div>
          </div>
          <ValuesBottomWrappers />
        </section>
        <CTASection rectangleShape="/rectangle-shape@2x.png" />
        <Footer
          rectangle9383="/future-sphere-icon@2x.png"
          propBottom="unset"
          propMaxHeight="unset"
        />
      </main>
    </div>
  );
};

export default Features;
