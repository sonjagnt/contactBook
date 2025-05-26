import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import s from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.navlink)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s.active : s.navlink)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
