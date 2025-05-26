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

export const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "var(--white)",
  color: "var(--btn-hover)",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};
