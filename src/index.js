import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ResumeProvider } from "./context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <React.StrictMode>
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </React.StrictMode>
  </HashRouter>
);
