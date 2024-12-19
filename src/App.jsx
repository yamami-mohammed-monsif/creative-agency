import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import AboutUs from "./pages/aboutPage/AboutUs";
import StartProject from "./pages/StartProjectPage/StartProject";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/start-project" element={<StartProject />} />
      </Routes>
    </div>
  );
}

export default App;
