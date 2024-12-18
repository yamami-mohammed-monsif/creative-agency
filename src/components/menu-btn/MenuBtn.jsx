import "./menu-btn.css";

function MenuBtn({ isOpen, onToggle }) {
  function handleClick() {
    onToggle();
  }

  return (
    <div
      className={`primary-header__menu-btn ${isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <svg viewBox="0 0 100 100">
        <rect
          className="line top"
          width="80"
          height="8"
          x="10"
          y="20"
          rx="4"
        ></rect>
        <rect
          className="line middle"
          width="60"
          height="8"
          x="20"
          y="45"
          rx="4"
        ></rect>
        <rect
          className="line bottom"
          width="80"
          height="8"
          x="10"
          y="70"
          rx="4"
        ></rect>
      </svg>
    </div>
  );
}

export default MenuBtn;
