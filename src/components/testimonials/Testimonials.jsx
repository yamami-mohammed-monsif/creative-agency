import TestimonialCard from "../testimonial-card/testimonialCard";
import blueBubbles from "../../assets/blue-bubbles.png";
import "./testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <p className="section-title">Testimonial</p>
      <h2>People Talk about us</h2>
      <div className="testimonials-container">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <img src={blueBubbles} className="blue-bubbles-img" />
    </section>
  );
}

export default Testimonials;
