import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import StartProject from "./pages/StartProjectPage/StartProject";
import AboutUs from "./pages/aboutPage/AboutUs";
import OurServies from "./pages/our-services/OurServies";
import Portfolio from "./pages/portfolioPage/portfolio";
import Contact from "./pages/contactPage/contact";
import TermsOfService from "./pages/terms-of-service/TermsOfService";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import NotFound from "./pages/notFoundPage/NotFound";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 200,
      once: false,
    });
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/start-project" element={<StartProject />} />
      <Route path="/our-services" element={<OurServies />} />
      <Route path="/our-portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
