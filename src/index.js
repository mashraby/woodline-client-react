import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as OpenModalProvider } from "./Contexts/OrderModalContext/OrderModalContext";

const link = 'http://localhost:9000'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OpenModalProvider>
        <App link={link} />
      </OpenModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
