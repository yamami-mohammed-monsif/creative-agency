import "./service-card.css";

function ServiceCard({ text, icon, color }) {
  return (
    <div className="service-card">
      <div className="icon-container" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <p className="name">{text}</p>
    </div>
  );
}

export default ServiceCard;
