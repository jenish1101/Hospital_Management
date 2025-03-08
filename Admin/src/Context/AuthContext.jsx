import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("AdminToken");
    setIsAuthenticated(!!token); // If token exists, user is authenticated
  }, []);

  const login = (token) => {
    Cookies.set("AdminToken", token, { expires: 7 }); // Store token in cookies
    setIsAuthenticated(true); // Update state immediately
  };

  const logout = () => {
    Cookies.remove("AdminToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
