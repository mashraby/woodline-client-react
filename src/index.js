import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as OpenModalProvider } from "./Contexts/OrderModalContext/OrderModalContext";
import { Provider as AuthTokenProvider } from "./Contexts/AuthTokenContext/AuthTokenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthTokenProvider>
        <OpenModalProvider>
          <App />
        </OpenModalProvider>
      </AuthTokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
