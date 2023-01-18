import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as OpenModalProvider } from "./Contexts/OrderModalContext/OrderModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OpenModalProvider>
        <App />
      </OpenModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
