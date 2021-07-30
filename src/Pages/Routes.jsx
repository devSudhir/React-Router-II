import { Switch, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Settings } from "./Settings";
import { Home } from "./Home";
import { PrivateRoute } from "./PrivateRoute";
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/setting">
        <Settings />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};
