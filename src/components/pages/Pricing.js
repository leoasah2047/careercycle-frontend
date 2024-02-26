import HeaderFrame from "../components/HeaderFrame";
import Divider from "../components/Divider";
import Section from "../components/Section";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import Navigation1 from "../components/Navigation1";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="extra-sales-page">
    <Navigation1 />
    <br/>
    <br/>
    <br/>
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

export default Pricing;
