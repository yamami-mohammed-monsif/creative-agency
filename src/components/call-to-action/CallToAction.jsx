import image1 from "../../assets/CTA-image1.jpg";
import image2 from "../../assets/CTA-image2.jpg";
import FilledBtn from "../UI/filled-button/FilledBtn";
import "./call-to-action.css";

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="images-container">
        <img src={image1} className="image-1" />
        <img src={image2} className="image-2" />
      </div>
      <div className="section-content">
        <h1>Interesting Collaboration With Us?</h1>
        <p className="description">Help you to reach your business goal</p>
        <FilledBtn text="Get Started" path="/start-project" />
      </div>
    </section>
  );
}

export default CallToAction;
