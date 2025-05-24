import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../constants/muiTheme";
import LogoutIcon from "@mui/icons-material/Logout";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <p>Welcome, {user.name}</p>
      <ThemeProvider theme={theme}>
        <Button
          type="button"
          onClick={() => dispatch(logOut())}
          variant="outlined"
          style={{ display: "flex", gap: "8px" }}
        >
          Log Out <LogoutIcon fontSize="small" />
        </Button>
      </ThemeProvider>
    </div>
  );
};
