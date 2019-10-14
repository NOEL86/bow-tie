import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./PackageDrop.css";

class PackageDrop extends Component {
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
        <ul id="dropdownList" className="dropdown-content">
          <li>
            <a href="#!">Day of Coordination</a>
          </li>
          <li>
            <a href="#!">Partial Planning</a>
          </li>
          <li>
            <a href="#!">Peace of Mind</a>
          </li>
          <li className="divider" tabindex="-1"></li>
          <li>
            <a href="#!">Engagment</a>
          </li>
          <li>
            <a href="#!">Engagement Party</a>
          </li>
          <li>
            <a href="#!">Bachelor/Bachelorette Party</a>
          </li>
          <li>
            <a href="#!">Rehearsal Dinner</a>
          </li>
          <li>
            <a href="#!">Bridal Shower</a>
          </li>
          <li className="divider" tabindex="-1"></li>
          <li>
            <a href="#!">Birthday</a>
          </li>
          <li>
            <a href="#!">Retirement</a>
          </li>
          <li>
            <a href="#!">Other</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PackageDrop;
