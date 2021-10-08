import "./App.css";
import { setUpNotifications } from "reapop";
import { Container, ThemeProvider } from "@material-ui/core";
import theme from "./Theme/Theme";
import Routes from "./Routes/Routes";

function App() {
  setUpNotifications({
    defaultProps: {
      position: "top-right",
      dismissible: true,
      showDismissButton: true,
      dismissAfter: 5000,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" disableGutters>
          <Routes />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
