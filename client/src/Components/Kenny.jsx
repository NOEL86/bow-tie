import React from "react";
// import "materialize-css";

const Kenny = props => (
  <div className="card small">
    <div className="card-image waves-effect waves-block waves-light">
      <img
        id="kenny"
        className="activator"
        src="../images/kenny.jpg"
        alt="Headshot"
      />
    </div>
    <div className="card-reveal">
      <h6 className="card-title grey-text text-darken-4">Kenneth Jimenez</h6>
      <br />
      <p>
        Here is some more information about this product that is only revealed
        once clicked on.
      </p>
    </div>
  </div>
);

export default Kenny;
