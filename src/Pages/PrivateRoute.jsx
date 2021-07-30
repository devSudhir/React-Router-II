import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Redirect, Link, Route } from "react-router-dom";

export const PrivateRoute = ({ path, children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return <Route path={{ path }}>{children}</Route>;
};
