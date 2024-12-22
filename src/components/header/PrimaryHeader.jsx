import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import ContactUsBtn from "../UI/transparent-button/TransparentBtn";
import MenuBtn from "../UI/menu-btn/MenuBtn";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

import "./primary-header.css";

function PrimaryHeader() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);
  const [isOpen, setIsOpen] = useState(false);

  function handleScreenResize() {
    setIsSmallScreen(window.innerWidth <= 850);
  }

  useEffect(() => {
    //runs once on mount
    handleScreenResize();

    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="primary-header">
      <div className="logo-container">
        <div className="primary-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <span>Agency</span>
          <span>Creative</span>
        </div>
      </div>
      <Navbar isOpen={isOpen} />
      {isSmallScreen ? (
        <MenuBtn isOpen={isOpen} onToggle={toggleMenu} />
      ) : (
        <Link to="/contact">
          <ContactUsBtn text="contact us" />
        </Link>
      )}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </section>
  );
}

export default PrimaryHeader;
