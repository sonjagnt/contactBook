import { Toaster } from "react-hot-toast";
import LoginForm from "../../components/LoginForm/LoginForm";
import { theme } from "../../constants/muiTheme";
import s from "./LoginPage.module.css";
import { ThemeProvider } from "@mui/material/styles";

function LoginPage() {
  return (
    <section className={s.container}>
      <ThemeProvider theme={theme}>
        <LoginForm />
        <Toaster />
      </ThemeProvider>
    </section>
  );
}

export default LoginPage;
