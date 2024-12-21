import PrimaryHeader from "../../components/header/PrimaryHeader";
import Hero from "../../components/hero-section/Hero";
import About from "../../components/about-section/About";
import OurServices from "../../components/our-sevices-section/OurServices";
import OurPortfolio from "../../components/portfolio-section/OurPortfolio";
import Testimonials from "../../components/testimonials/testimonials";

function Home() {
  return (
    <div>
      <PrimaryHeader />
      <Hero />
      <About />
      <OurServices />
      <OurPortfolio />
      <Testimonials />
    </div>
  );
}

export default Home;
