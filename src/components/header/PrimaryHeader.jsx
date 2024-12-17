import logo from "../../assets/logo.png";

import "./primary-header.css";

function PrimaryHeader() {
  return (
    <div className="primary-header">
      <div className="logo-container">
        <div className="primary-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <span>Agency</span>
          <span>Creative</span>
        </div>
      </div>
      <div className="primary-header__menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default PrimaryHeader;
