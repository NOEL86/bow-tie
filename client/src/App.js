import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import CortJosh from "./Pages/CortJosh";
import Jacey from "./Pages/Jacey";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Weddings from "./Pages/Weddings";
// import Corporate from "./Pages/Corporate";
import Parties from "./Pages/Parties";
import RelatedEvents from "./Pages/RelatedEvents";
import Agreement from "./Pages/ServiceAgreement";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/CortJosh" component={CortJosh} />
            <Route exact path="/Jacey" component={Jacey} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Weddings" component={Weddings} />
            <Route exact path="/RelatedEvents" component={RelatedEvents} />
            <Route exact path="/Agreement" component={Agreement} />
            <Route exact path="/Parties" component={Parties} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
