import "./service-card.css";

function ServiceCard({ text, icon, color, data_aos, data_aos_delay }) {
  return (
    <div
      className="service-card"
      data-aos={data_aos}
      data-aos-delay={data_aos_delay}
    >
      <div className="icon-container" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <p className="name">{text}</p>
    </div>
  );
}

export default ServiceCard;
