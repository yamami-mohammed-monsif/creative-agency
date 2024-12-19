import furnitureAppImg from "../../assets/design-furniture.png";
import cloudAppImg from "../../assets/cloud-app.png";
import byteAppImg from "../../assets/design-byte.png";
import TransparentBtn from "../UI/transparent-button/TransparentBtn";
import { Link } from "react-router-dom";
import "./our-portfolio.css";

const projects = [
  {
    name: "Design Furniture App",
    image: furnitureAppImg,
  },
  {
    name: "Cloud App",
    image: cloudAppImg,
  },
  {
    name: "Design Byte App",
    image: byteAppImg,
  },
];

function OurPortfolio() {
  return (
    <div className="portfolio-section">
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
            <a href="" className="project">
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
    </div>
  );
}

export default OurPortfolio;
