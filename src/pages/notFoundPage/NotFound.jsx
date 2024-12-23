import FilledBtn from "../../components/UI/filled-button/FilledBtn";
import "./not-found.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <FilledBtn text="Go back home" path="/" />
    </div>
  );
}

export default NotFound;
