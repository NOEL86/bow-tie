import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.close = this.close.bind(this);
  }

  // close = () => {
  //   var elem = document.querySelectorAll(".sidenav");
  //   var instance = M.Sidenav.getInstance(elem);
  //   instance.close();
  // };
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="/Weddings">Wedding</Link>
          </li>
          <li>
            <Link to="/RelatedEvents">Wedding Events</Link>
          </li>
          <li>
            <Link to="/Parties">Parties</Link>
          </li>
          {/* <li>
            <Link to="/Agreement">Service Agreement</Link>
          </li> */}
        </ul>
        {/* <ul id="dropdown2" className="dropdown-content">
          <li>
            <Link to="/Weddings">Wedding</Link>
          </li>
          <li>
            <Link to="/RelatedEvents">Wedding Related Events</Link>
          </li>
          <li>
            <Link to="/Parties">Parties</Link>
          </li>
          <li>
            <Link to="/Agreement">Service Agreement</Link>
          </li>
        </ul> */}

        <nav id="mainNav">
          <div className="nav">
            <a
              href="#"
              data-target="mobile-demo"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
            <div id="marginBottom" className="row">
              <div className="col s12 m12 l12">
                <img id="logo" src="../images/logobt.png" alt="logo" />
                {/* <h1 id="companyHeader">Bow & Tie Events</h1> */}
              </div>
            </div>
            {/* <ul id="nav-mobile" className="hide-on-med-and-down center">
              <li>
                <Link
                  to="/"
                  className="waves-effect waves-teal accent-3 btn-flat myCustom"
                >
                  Home
                </Link>
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
            </ul>*/}
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/" className=" accent-3 btn-flat">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" className="accent-3 btn-flat">
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/Packages"
              className="dropdown-trigger accent-3 btn-flat"
              data-target="dropdown1"
            >
              Packages
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="accent-3 btn-flat">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/About" className="accent-3 btn-flat">
              About Us
            </Link>
          </li>
          <li>
            <a id="sideNavClose" className="sidenav-close">
              X
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
