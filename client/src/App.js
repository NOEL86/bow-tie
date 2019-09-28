import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import Packages from "./Pages/Packages";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Packages" component={Packages} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/About" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
