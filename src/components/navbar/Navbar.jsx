import "./navbar.css";

function Navbar({ isOpen }) {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className="primary-navbar">
      <ul className={`primary-navbar__nav-links ${isOpen ? "show" : "hide"}`}>
        <li>
          <a onClick={scrollToTop}>Home</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("about")}>About</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("services")}>Services</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
