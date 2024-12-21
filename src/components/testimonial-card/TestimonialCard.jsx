import testimonialImg from "../../assets/testimonials-image.jpg";
import "./testimonial-card.css";

function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="testimonial-provider">
        <div className="testimonial-image-container">
          <img src={testimonialImg} />
        </div>
        <div>
          <p className="testimonial-name">Angel Rose</p>
          <span className="testimonial-job">Creative Manager</span>
        </div>
      </div>
      <div className="testimonial-content">
        There are many variations passages of Lorem Ipsum majority some by words
        which don't look.
      </div>
    </div>
  );
}

export default TestimonialCard;
