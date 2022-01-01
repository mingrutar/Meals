import React, { useState, useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {}, // dumy func for auth-completion
  onLogin: (email, password) => {},
});

export const AuthContextProvide = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
