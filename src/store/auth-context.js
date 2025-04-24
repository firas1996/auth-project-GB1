import { createContext } from "react";

const AuthContext = createContext({
  email: "",
  password: "",
  isLoggedIn: false,
  loginHandler: (email, password) => {},
  logoutHandler: () => {},
});
export default AuthContext;
