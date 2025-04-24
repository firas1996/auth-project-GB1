import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  email: "",
  password: "",
  isLoggedIn: false,
  loginHandler: (email, password) => {},
  logoutHandler: () => {},
});
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "123") {
      setIsLoggedIn(true);
      // console.log("effect");
    }
  }, []);
  // console.log("outside");
  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("token", 123);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
