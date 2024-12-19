import PrimaryHeader from "../../components/header/PrimaryHeader";
import Hero from "../../components/hero-section/Hero";
import About from "../../components/about-section/About";
import OurServices from "../../components/our-sevices-section/OurServices";

function Home() {
  return (
    <div>
      <PrimaryHeader />
      <Hero />
      <About />
      <OurServices />
    </div>
  );
}

export default Home;
