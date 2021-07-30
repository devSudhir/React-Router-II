import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  handleIsAuth: () => {}
});

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const handleIsAuth = (value) => {
    setIsAuth(value);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
