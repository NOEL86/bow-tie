import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import options from "materialize-css";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, options);
    });
  }
  //function that checks to see if a user is logged in before allowing them to view the check in page

  render() {
    return (
      <nav id="mainNav">
        <div className="nav-center center">
          <a
            onClick={this.handleClick}
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="hide-on-med-and-down center">
            <li>
              <Link
                to="/"
                className="waves-effect waves-teal accent-3 btn-flat"
              >
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
      </nav>
    );
  }
}

export default Nav;
