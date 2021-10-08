import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0069FB",
    },
    text: {
      light: "#333333",
      primary: "rgba(0,0,0,0.4)",
      secondary: "#0069fb",
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

    MuiTextField: {
      root: {
        "& .MuiInputBase-inputAdornedStart": {
          marginLeft: 15,
        },
        "& .MuiInputBase-root": {
          paddingBottom: 5,
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        paddingTop:7,
        paddingBottom:7,
      },
      
    },
    MuiCircularProgress:{
      root:{
        color: "white",
        width:25,
        height:25,
      },
      colorPrimary:{
        width:"25px !important",
        height:"25px !important",
      },
      colorSecondary:{
        color: "white",
        width:"25px !important",
        height:"25px !important",
      }

    }
  },
});

export default theme;
