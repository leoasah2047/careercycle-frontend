import Navigation1 from "../components/Navigation1";
import FooterSection1 from "../components/FooterSection1";
import Divider1 from "../components/Divider1";
import Section1 from "../components/Section1";
import VideoPlayer from "../components/VideoPlayer";
import FooterSection from "../components/FooterSection";
import HeaderFrame from "../components/HeaderFrame";
import Divider from "../components/Divider";
import Section from "../components/Section";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import "./Homepage.css";

const HomePage = () => {

  
  return (
    <div className="extra-sales-page">
      <Navigation1 />
      <FooterSection1 />
      <Divider1 />
      <section className="c-o-n-t-a-i-n-e-r">
        <Section1 />
        <VideoPlayer />
      </section>
      <section className="section">
        <div className="container">
          <div className="heading-and-supporting-text">
            <div className="heading-and-subheading">
              <div className="subheading">Testimonials</div>
              <h1 className="heading">Results that speak for themselves</h1>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
      <HeaderFrame />
      <Divider />
      <section className="footer">
        <Section />
        <footer className="section1">
          <Container1 />
          <Container />
        </footer>
      </section>
    </div>
  );
};

export default HomePage;
