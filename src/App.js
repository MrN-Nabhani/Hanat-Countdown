import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

const Comp = () => <div>PAGE 1</div>;
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Comp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
