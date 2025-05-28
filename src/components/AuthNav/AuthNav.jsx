import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <NavLink to="/register" className={s.navlink}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.navlink}>
        Log In
      </NavLink>
    </div>
  );
};
