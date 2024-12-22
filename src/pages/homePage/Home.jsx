import PrimaryHeader from "../../components/header/PrimaryHeader";
import Hero from "../../components/hero-section/Hero";
import About from "../../components/about-section/About";
import OurServices from "../../components/our-sevices-section/OurServices";
import OurPortfolio from "../../components/portfolio-section/OurPortfolio";
import Testimonials from "../../components/testimonials/testimonials";
import CallToAction from "../../components/call-to-action/CallToAction";
import FooterSection from "../../components/footer/FooterSection";

function Home() {
  return (
    <>
      <div className="container">
        <PrimaryHeader />
        <Hero />
        <About />
        <OurServices />
        <OurPortfolio />
        <Testimonials />
        <CallToAction />
      </div>
      <FooterSection />
    </>
  );
}

export default Home;
