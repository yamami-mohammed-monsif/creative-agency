import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import StartProject from "./pages/StartProjectPage/StartProject";
import AboutUs from "./pages/aboutPage/AboutUs";
import OurServies from "./pages/our-services/OurServies";
import Portfolio from "./pages/portfolioPage/portfolio";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/our-services" element={<OurServies />} />
        <Route path="/our-portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
