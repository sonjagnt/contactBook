import { Toaster } from "react-hot-toast";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { theme } from "../../constants/muiTheme";
import s from "./RegistrationPage.module.css";
import { ThemeProvider } from "@mui/material/styles";

function RegistrationPage() {
  return (
    <section className={s.container}>
      <ThemeProvider theme={theme}>
        <RegistrationForm />
        <Toaster />
      </ThemeProvider>
    </section>
  );
}

export default RegistrationPage;
