import furnitureAppImg from "../../assets/design-furniture.png";
import cloudAppImg from "../../assets/cloud-app.png";
import byteAppImg from "../../assets/design-byte.png";
import TransparentBtn from "../UI/transparent-button/TransparentBtn";
import { Link } from "react-router-dom";
import "./our-portfolio.css";

const projects = [
  {
    id: 1,
    name: "Design Furniture App",
    image: furnitureAppImg,
  },
  {
    id: 2,
    name: "Cloud App",
    image: cloudAppImg,
  },
  {
    id: 3,
    name: "Design Byte App",
    image: byteAppImg,
  },
];

function OurPortfolio() {
  return (
    <section className="portfolio-section" id="projects">
      <div className="portfolio-content">
        <p className="section-title" data-aos="fade-up">
          Our Portfolio
        </p>
        <h2 data-aos="fade-up" data-aos-delay="400">
          What do we do
        </h2>
        <p className="portfolio-text" data-aos="fade-up" data-aos-delay="600">
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>
      </div>
      <div className="projects-container">
        {projects.map((item, index) => {
          return (
            <a
              href=""
              className="project"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 400}
            >
              <img src={item.image} alt={item.name} />
              <p className="project-name">{item.name}</p>
            </a>
          );
        })}
      </div>
      <div className="see-all-portfolio-btn" data-aos="fade-left">
        <Link to="/our-portfolio">
          <TransparentBtn text="See All Portfolio" />
        </Link>
      </div>
    </section>
  );
}

export default OurPortfolio;
