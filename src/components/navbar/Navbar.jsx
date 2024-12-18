import "./navbar.css";

function Navbar({ isOpen }) {
  return (
    <nav className="primary-navbar">
      <ul className={`primary-navbar__nav-links ${isOpen ? "show" : "hide"}`}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
