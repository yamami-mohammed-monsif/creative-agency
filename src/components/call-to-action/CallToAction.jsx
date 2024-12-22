import image1 from "../../assets/CTA-image1.jpg";
import image2 from "../../assets/CTA-image2.jpg";
import redBubbles from "../../assets/red-bubbles2.png";
import blueBubbles from "../../assets/blue-bubbles2.png";
import FilledBtn from "../UI/filled-button/FilledBtn";
import "./call-to-action.css";

function CallToAction() {
  return (
    <section className="cta-section">
      <div
        className="images-container"
        data-aos="fade-left"
        data-aos-delay="800"
      >
        <img src={image1} className="image-1" />
        <img src={image2} className="image-2" />
        <img src={redBubbles} className="red-bubbles" />
        <img src={blueBubbles} className="blue-bubbles" />
      </div>
      <div className="section-content" data-aos="fade-right">
        <h1>Interesting Collaboration With Us?</h1>
        <p className="description">Help you to reach your business goal</p>
        <FilledBtn text="Get Started" path="/start-project" />
      </div>
    </section>
  );
}

export default CallToAction;
