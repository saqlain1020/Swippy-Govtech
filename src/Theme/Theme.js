import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1A54F8",
    },
    text: {
      light: "#333333",
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  overrides: {
    MuiTypography: {
      root: {
        color: "rgba(0,0,0,.45)",
      },
      h1: {
        color: "#333333",
      },
      h2: {
        color: "#333333",
      },
      h3: {
        color: "#333333",
      },
      h4: {
        color: "#333333",
      },
      h5: {
        fontFamily: "'Itim', cursive",
      },
      h6: {
        fontFamily: "'Itim', cursive",
      },
    },
    
    
  },
});

export default theme;
