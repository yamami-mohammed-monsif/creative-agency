import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./transparent-btn.css";

function TransparentBtn({ text, icon }) {
  return (
    <button className="transparent-btn">
      {icon && (
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {text}
    </button>
  );
}

export default TransparentBtn;
