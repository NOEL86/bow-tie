import React from "react";
import "./Nav.css";
const Nav = props => (
  <nav id="mainNav">
    <div className="nav-wrapper">
      <a href="#" data-target="mobile-demo" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <img id="logo" src="../images/btie.png" alt="Bow Tie" />
      <ul id="nav-mobile" className="center hide-on-med-and-down">
        <li>
          <a href="/" className="waves-effect waves-teal accent-3 btn-flat">
            Home
          </a>
        </li>
        <li>
          <a
            href="/Contact"
            className="waves-effect waves-teal accent-3 btn-flat"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="/Packages"
            className="waves-effect waves-teal accent-3 btn-flat"
          >
            Packages & investments
          </a>
        </li>
        <li>
          <a
            href="/About"
            className="waves-effect waves-teal accent-3 btn-flat"
          >
            About Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
