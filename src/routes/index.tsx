import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SplashPage from "../pages/Splash";
import PrivateRoute from "./privates";
import LoginPage from "../pages/Login";
import LayoutLogged from "../pages/Layouts/logged";
import { ROUTES_LOGIN } from "../constants";
import { useLayout } from "../contexts";

export default function Routes() {
  const layoutContext = useLayout();

  const { fullLoading } = layoutContext;

  if (fullLoading) {
    return <SplashPage />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES_LOGIN()}>
          <LoginPage />
        </Route>
        <PrivateRoute path="/">
          <Switch>
            <LayoutLogged />
          </Switch>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}