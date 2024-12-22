import testimonialImg from "../../assets/testimonials-image.jpg";
import "./testimonial-card.css";

function TestimonialCard({
  name,
  occupation,
  content,
  data_aos,
  data_aos_delay,
}) {
  return (
    <div
      className="testimonial-card"
      data-aos={data_aos}
      data-aos-delay={data_aos_delay}
    >
      <div className="testimonial-provider">
        <div className="testimonial-image-container">
          <img src={testimonialImg} />
        </div>
        <div>
          <p className="testimonial-name">{name}</p>
          <span className="testimonial-job">{occupation}</span>
        </div>
      </div>
      <div className="testimonial-content">{content}</div>
    </div>
  );
}

export default TestimonialCard;
