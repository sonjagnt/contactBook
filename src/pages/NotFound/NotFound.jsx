import { Link } from "react-router";
import s from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={s.container}>
      <h3>
        Page not found. Click{" "}
        <Link to="/" className={s.link}>
          here
        </Link>{" "}
        to go home.
      </h3>
    </div>
  );
}

export default NotFound;
