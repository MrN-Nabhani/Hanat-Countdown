import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Auth from "./components/util/Auth";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/gh-pages-url" component={Signup} />
          <Route path="/gh-pages-url/login" component={Login} />
          <Auth />
        </Switch>
      </Router>
    );
  }
}

export default App;
