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

  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="/Weddings">Wedding</a>
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
        <ul id="dropdown2" className="dropdown-content">
          <li>
            <a href="/Weddings">Wedding</a>
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
                  className="waves-effect waves-teal accent-3 btn-flat myCustom"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/Portfolio"
                  className="waves-effect waves-teal accent-3 btn-flat myCustom"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <a
                  className="dropdown-trigger waves-effect waves-teal accent-3 btn-flat myCustom"
                  href="#!"
                  data-target="dropdown2"
                >
                  Packages & investments
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>

              <li>
                <Link
                  to="/Contact"
                  className="waves-effect waves-teal accent-3 btn-flat myCustom"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="waves-effect waves-teal accent-3 btn-flat myCustom"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div id="sMediaIcons" className="row right">
              <img
                style={{ width: "30px" }}
                src="../images/icons8-facebook-f-50.png"
                alt="FB Logo"
              />
              <img
                style={{ width: "30px" }}
                src="../images/icons8-pinterest-50.png"
                alt="Pintrest Logo"
              />
              <img
                style={{ width: "30px" }}
                src="../images/icons8-instagram-old-50.png"
                alt="Pintrest Logo"
              />
              <img
                style={{ width: "30px" }}
                src="../images/icons8-snapchat-50.png"
                alt="Snapchat Logo"
              />
            </div>
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
              className="dropdown-trigger waves-effect waves-teal accent-3 btn-flat"
              data-target="dropdown1"
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
