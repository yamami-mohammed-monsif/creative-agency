import { Link } from "react-router-dom";
import "./filled-btn.css";

function FilledBtn({ text, path }) {
  return (
    <Link to={path} className="filled-btn">
      {text}
    </Link>
  );
}

export default FilledBtn;
