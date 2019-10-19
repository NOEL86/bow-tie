import React, { Component } from "react";

import M from "materialize-css";
import "./PackageDrop.css";

class PackageDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = value => {
    // const { name, value } = event.target;
    // console.log(name, value);
    // this.setState({
    //   [name]: value
    // });
    // console.log("clicked", value);
  };

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="input-field">
        <select id="dropdownList">
          <optgroup label="Weddings">
            <option value="DayofCoordination">Day of Coordination</option>
            <option value="PartialPlanning">Partial Planning</option>
            <option value="PeaceofMind">Peace of Mind</option>
          </optgroup>
          <optgroup label="Related Events">
            <option value="Engagment">Engagment</option>
            <option value="EngagementParty">Engagment Party</option>
            <option value="BachelorParty">Bachelor/Bachelorette Party</option>
            <option value="RehearsalDinner">Rehearsal Dinner</option>
            <option value="BridalShower">Bridal Shower</option>
          </optgroup>
          <optgroup label="Parties">
            <option value="Birthday">Birthday</option>
            <option value="Retirement">Retirement</option>
            <option value="Other">Other</option>
          </optgroup>
        </select>
      </div>
    );
  }
}

export default PackageDrop;
