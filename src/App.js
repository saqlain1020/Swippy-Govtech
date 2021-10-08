import "./App.css";
import { setUpNotifications } from "reapop";

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
   <div></div>
  );
}

export default App;