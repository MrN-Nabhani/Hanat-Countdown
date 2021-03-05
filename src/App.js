import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/signup/Signup";

const Comp = () => <div>PAGE 1</div>;
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/" component={Comp} />
          <Route path="/" component={Comp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
