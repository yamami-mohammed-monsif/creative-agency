import { FiArrowRight } from "react-icons/fi";
import { HiOutlineTv } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import { FiTv } from "react-icons/fi";
import ServiceCard from "../service-card/ServiceCard";
import { Link } from "react-router-dom";
import "./our-services.css";

const services = [
  {
    name: "Social Media Management",
    icon: <HiOutlineTv size={42} color="white" />,
    bgColor: "hsla(219, 100%, 61%, 1)",
  },
  {
    name: "Search Engine Opimization",
    icon: <IoSettingsOutline size={42} color="white" />,
    bgColor: "hsla(0, 100%, 59%, 1)",
  },
  {
    name: "Design",
    icon: <CiPen size={42} color="white" />,
    bgColor: "hsla(108, 73%, 64%, 1)",
  },
  {
    name: "Ads",
    icon: <FiTv size={42} color="white" />,
    bgColor: "hsla(40, 100%, 50%, 1)",
  },
];

function OurServices() {
  return (
    <div className="our-services">
      <div>
        <p className="section-title">Our Services</p>
        <h2>Perfect and Fast Movement</h2>
        <p className="services-text">
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </p>
        <button className="read-more-btn">
          <Link to="/our-services">Read more</Link>
          <FiArrowRight />
        </button>
      </div>
      <div className="service-cards-container">
        {services.map((item) => {
          return (
            <ServiceCard
              text={item.name}
              icon={item.icon}
              color={item.bgColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OurServices;
