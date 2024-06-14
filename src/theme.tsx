import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#5313CA",
    },
    secondary: {
      main: "#FF9963",
    },
    ascent: {
      main: "#75F1F1",
      dark: "#050729",
    },
    action: {
      hover: "#EDEEF2",
      active: "#EDEEF2",
    },
    background: {
      default: "#fff",
      paper: "#EDEEF2",
    },
  },
});

export default theme;
