import React from "react";
import { Redirect, Route, Switch } from "react-router";
import CreateCountDown from "../../pages/CreateCountDown/CreateCountDown";
import Dashboard from "../../pages/dashboard/Dashboard";

function Auth() {
  if (localStorage.getItem("TOKEN"))
    return (
      <Switch>
        <Route
          path="/gh-pages-url/dashboard/new-count-down"
          component={CreateCountDown}
        />
        <Route path="/gh-pages-url/dashboard" component={Dashboard} />
      </Switch>
    );
  else {
    return <Redirect to="/gh-pages-url/login" />;
  }
}

export default Auth;
