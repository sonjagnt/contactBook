import s from "./HomePage.module.css";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../constants/muiTheme.js";

function HomePage() {
  return (
    <div className={s.container}>
      <h2 style={{ fontSize: "36px" }}>Welcome to the Contact Book</h2>
      <ThemeProvider theme={theme}>
        <Button href="/contacts" variant="text" className={s.btn}>
          To the contacts
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default HomePage;
