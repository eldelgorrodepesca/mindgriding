import React from "react";
import ReactDOM from 'react-dom';
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Auth0
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(domain, clientId);

ReactDOM.render(
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();