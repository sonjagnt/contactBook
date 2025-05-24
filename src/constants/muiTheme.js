import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#276678",
      contrastText: "#f6f5f5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          fontFamily: "var(--font-family)",
          borderColor: "var(--white)",
          color: "var(--white)",
          "&:hover": {
            borderColor: "transparent",
            backgroundColor: "var(--btn-hover)",
          },
        },
        contained: {
          fontFamily: "var(--font-family)",
          backgroundColor: "var(--btn)",
          color: "var(--white)",
          "&:hover": {
            backgroundColor: "var(--btn-hover)",
          },
        },
      },
    },
  },
});
