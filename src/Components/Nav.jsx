import React from "react";
import "./Nav.css";
const Nav = props => (
  <nav id="mainNav">
    <div className="nav-wrapper">
      <img id="logo" src="../images/btie.png" alt="Bow Tie" />
      <ul id="nav-mobile" className="center hide-on-med-and-down">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Contact">Contact Us</a>
        </li>
        <li>
          <a href="/Partners">Our Partners</a>
        </li>
        <li>
          <a href="/Calendar">Calendar</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
