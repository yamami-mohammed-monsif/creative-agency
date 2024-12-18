import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import ContactUs from "../contact-us/ContactUs";
import MenuBtn from "../menu-btn/MenuBtn";
import Navbar from "../navbar/Navbar";

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
      <Navbar isOpen={isOpen} />
      {isSmallScreen ? (
        <MenuBtn isOpen={isOpen} onToggle={toggleMenu} />
      ) : (
        <ContactUs />
      )}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}

export default PrimaryHeader;
