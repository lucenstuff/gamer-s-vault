import React, { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromToken());

  function getUserFromToken() {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      return decoded;
    }
    return null;
  }

  function logout() {
    setUser(null);
    sessionStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
