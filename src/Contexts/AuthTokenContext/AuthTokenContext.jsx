import { createContext, useEffect, useState } from "react";

const AuthTokenContext = createContext();

function Provider({ children }) {
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token")) || null
  );

  useEffect(() => {
    window.localStorage.setItem(JSON.stringify("token"), token);
  }, [token]);

  return (
    <AuthTokenContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthTokenContext.Provider>
  );
}

export { AuthTokenContext, Provider };
