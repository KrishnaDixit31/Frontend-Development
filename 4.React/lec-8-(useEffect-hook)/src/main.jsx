import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Clock from "./components/clock.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Clock />
  </>
);
