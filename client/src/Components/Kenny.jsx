import React from "react";
import "materialize-css";

const Kenny = props => (
  <div className="card medium">
    <div className="card-image waves-effect waves-block waves-light">
      <img
        id="kenny"
        className="activator"
        src="../images/vase.jpg"
        alt="Headshot"
      />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
        Kenneth Jimenez
      </span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">
        Card Title<i className="material-icons right">X</i>
      </span>
      <p>
        Here is some more information about this product that is only revealed
        once clicked on.
      </p>
    </div>
  </div>
);

export default Kenny;
