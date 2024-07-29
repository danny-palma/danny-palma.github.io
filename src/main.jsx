import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ga4 from "react-ga4";
import "./index.css";

ga4.initialize("G-XV28YL4FJL");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { ga4 };
