import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "./components/Dashboard/Cards/Cards";
import Signup from "./pages/signup/Signup";
import Card from "./components/Dashboard/Cards/Card/Card.js";

class App extends Component {
  render() {
    return (
      <div>
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
/*

 <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/" component={Comp} />
          <Route path="/" component={Comp} />
        </Switch>
      </Router>
*/
