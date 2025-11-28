import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("userId");
    return stored ? JSON.parse(stored) : null;
  });

  // Guardar automáticamente en LocalStorage
  useEffect(() => {
    if (user) localStorage.setItem("userId", JSON.stringify(user));
    else localStorage.removeItem("userId");
  }, [user]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
