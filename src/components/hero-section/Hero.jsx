import ProjectsDoneCard from "../ProjectsDoneCard";
import CEOQuote from "../CEOQuote";
import heroImg from "../../assets/hero-img.png";
import redBubbles from "../../assets/red-bubbles.png";
import blueBubbles from "../../assets/blue-bubbles.png";

import "./hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="primary-heading">
          Make your dream business goal come true
        </h1>
        <p className="description">
          when you need us for improve your business,
          <br /> then come with us to help your business have reach it, you just
          sit and feel that goal.{" "}
        </p>
        <button className="primary-cta-btn">Start Project</button>
      </div>
      <div className="hero-image-container">
        <img src={heroImg} alt="hero image" />
        <ProjectsDoneCard className="projects-done-container" />
        <CEOQuote className="ceo-quote-container" />
        <img src={redBubbles} className="red-bubbles" />
        <img src={blueBubbles} className="blue-bubbles" />
      </div>
    </div>
  );
}

export default Hero;
