import React from "react";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="btn btn-success" onClick={() => loginWithRedirect()}>
      Registrate
    </button>
  );
};

export default LoginButton;
