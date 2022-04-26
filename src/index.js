import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Auth0
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain, clientId);

const rootElement = document.getElementById("root")
const root = ReactDOMClient.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  
);

reportWebVitals();