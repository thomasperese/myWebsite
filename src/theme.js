import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#0B1020" }, // deep navy
    secondary: { main: "#2EC4B6" }, // turquoise
    warning: { main: "#DEAA79" }, // gold accent
    background: {
      default: "#05070f",
      paper: "#0f1424",
    },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { border: "1px solid rgba(255,255,255,0.06)" },
      },
    },
  },
});

export default theme;
