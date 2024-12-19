import OurStoryBtn from "../UI/transparent-button/TransparentBtn";
import FilledBtn from "../UI/filled-button/FilledBtn";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import aboutImg from "../../assets/about-image.png";
import purpleBubblesImg from "../../assets/purple-bubbles.png";
import "./about.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <p className="section-title">About Us</p>
        <h2>Our Teammate</h2>
        <div className="grid">
          <div className="grid-item text">
            <div className="about-text">
              <p>
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business.
              </p>
              <p>
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business
              </p>
            </div>
            <div className="about-buttons">
              <FilledBtn text="About Us" path="/about" />
              <OurStoryBtn text="Our Story" icon={faCirclePlay} />
            </div>
          </div>
          <div className="grid-item image">
            <img src={aboutImg} alt="about section image" />
            <img src={purpleBubblesImg} className="purple-bubbles" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
