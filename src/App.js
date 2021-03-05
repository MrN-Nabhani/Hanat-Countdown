import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Comp = () => <div>PAGE 1</div>;
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Comp} />
          <Route path="/" component={Comp} />
          <Route path="/" component={Comp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
