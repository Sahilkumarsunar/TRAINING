import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserProvider from "./components/UserProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <h3>main.jsx running</h3>
      <App />
    </UserProvider>
  </StrictMode>,
);
