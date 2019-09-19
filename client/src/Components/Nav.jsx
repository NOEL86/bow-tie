import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate() {}
  //function that checks to see if a user is logged in before allowing them to view the check in page

  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">Wedding</a>
          </li>
          <li>
            <a href="#!">Wedding Related Events</a>
          </li>
          <li>
            <a href="#!">Corporate Events</a>
          </li>
          <li>
            <a href="#!">Parties</a>
          </li>
        </ul>
        <nav id="mainNav">
          <div className="nav-center center">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="hide-on-med-and-down center">
              <li>
                <a
                  href="/"
                  className="waves-effect waves-teal accent-3 btn-flat"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/Portfolio"
                  className="waves-effect waves-teal accent-3 btn-flat"
                >
                  Portfolio
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/Packages"
                  className="waves-effect waves-teal accent-3 btn-flat"
                >
                  Packages & investments
                </Link>
              </li> */}
              <li>
                <a
                  className="dropdown-trigger waves-effect waves-teal accent-3 btn-flat"
                  href="#!"
                  data-target="dropdown1"
                >
                  Packages & investments
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>

              <li>
                <Link
                  to="/Contact"
                  className="waves-effect waves-teal accent-3 btn-flat"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="waves-effect waves-teal accent-3 btn-flat"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/" className="waves-effect waves-teal accent-3 btn-flat">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              className="waves-effect waves-teal accent-3 btn-flat"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/Packages"
              className="waves-effect waves-teal accent-3 btn-flat"
            >
              Packages & investments
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="waves-effect waves-teal accent-3 btn-flat"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="waves-effect waves-teal accent-3 btn-flat"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
