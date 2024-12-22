import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import StartProject from "./pages/StartProjectPage/StartProject";
import AboutUs from "./pages/aboutPage/AboutUs";
import OurServies from "./pages/our-services/OurServies";
import Portfolio from "./pages/portfolioPage/portfolio";
import Contact from "./pages/contactPage/contact";
import TermsOfService from "./pages/terms-of-service/TermsOfService";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";

import "./App.css";

function App() {
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
    </Routes>
  );
}

export default App;
