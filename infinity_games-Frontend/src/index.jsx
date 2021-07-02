import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter basename="The-Infinity">
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
