import OurStoryBtn from "../UI/transparent-button/TransparentBtn";
import FilledBtn from "../UI/filled-button/FilledBtn";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import aboutImg from "../../assets/about-image.png";
import purpleBubblesImg from "../../assets/purple-bubbles.png";
import "./about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <p className="section-title" data-aos="fade-up">
          About Us
        </p>
        <h2 data-aos="fade-up" data-aos-delay="400">
          Our Teammate
        </h2>
        <div className="grid">
          <div className="grid-item text" data-aos="fade-left">
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
          <div
            className="grid-item image"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <img src={aboutImg} alt="about section image" />
            <img src={purpleBubblesImg} className="purple-bubbles" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
