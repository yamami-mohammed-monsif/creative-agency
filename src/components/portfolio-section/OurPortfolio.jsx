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
        <p className="section-title">Our Portfolio</p>
        <h2>What do we do</h2>
        <p className="portfolio-text">
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>
      </div>
      <div className="projects-container">
        {projects.map((item) => {
          return (
            <a href="" className="project" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className="project-name">{item.name}</p>
            </a>
          );
        })}
      </div>
      <div className="see-all-portfolio-btn">
        <Link to="/our-portfolio">
          <TransparentBtn text="See All Portfolio" />
        </Link>
      </div>
    </section>
  );
}

export default OurPortfolio;
