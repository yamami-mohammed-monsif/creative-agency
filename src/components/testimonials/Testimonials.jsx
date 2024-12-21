import { useState, useRef } from "react";

import TestimonialCard from "../testimonial-card/testimonialCard";
import blueBubbles from "../../assets/blue-bubbles.png";
import "./testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Anna Mitchell",
    occupation: "CEO of Innovate Solutions",
    testimonial:
      "Working with this team helped my business reach new heights. Truly a game-changer for my brand!",
  },
  {
    id: 2,
    name: "Mark Reynolds",
    occupation: "Founder of GreenTech",
    testimonial:
      "Their expertise took my business to the next level. I couldn't have done it without them!",
  },
  {
    id: 3,
    name: "Jessica Davis",
    occupation: "Marketing Director",
    testimonial:
      "A fantastic experience! Their support and strategy made achieving my business goals feel effortless",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();

  const handleScroll = () => {
    const slider = sliderRef.current;
    const index = Math.round(slider.scrollLeft / slider.offsetWidth);
    setCurrentIndex(index);
  };

  function handleDotClick(idx) {
    setCurrentIndex(idx);
    const slider = sliderRef.current;
    slider.scrollTo({
      left: slider.offsetWidth * idx,
      behavior: "smooth",
    });
  }

  return (
    <section className="testimonials-section">
      <p className="section-title">Testimonial</p>
      <h2>People Talk about us</h2>
      <div
        className="testimonials-container"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {testimonialsData.map((item) => {
          return (
            <TestimonialCard
              key={item.id}
              name={item.name}
              occupation={item.occupation}
              content={item.testimonial}
            />
          );
        })}
      </div>
      <div className="slider-indicators">
        {testimonialsData.map((_, index) => {
          return (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          );
        })}
      </div>
      <img src={blueBubbles} className="blue-bubbles-img" />
    </section>
  );
}

export default Testimonials;
