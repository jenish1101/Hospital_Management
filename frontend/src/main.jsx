import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Importing AuthProvider from AuthContext.jsx
import { AuthProvider } from "../Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
