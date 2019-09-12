import React from "react";

const Cortney = props => (
  <div className="card medium">
    <div className="card-image waves-effect waves-block waves-light">
      <img
        id="cort"
        className="activator"
        src="../images/kiss.jpeg"
        alt="Headshot"
      />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
        Cortney Kuntz
      </span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
        <i className="material-icons right">X</i>Card Title
      </span>
      <p>
        Here is some more information about this product that is only revealed
        once clicked on.
      </p>
    </div>
  </div>
);

export default Cortney;
