import React from "react";
// import "materialize-css";

const Kenny = props => (
  <div id="aboutCard" className="card small">
    <div
      id="imageDiv"
      className="card-image waves-effect waves-block waves-light"
    >
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
        I am extremely passionate about design and the entire creative process.
        Creating a perfect blend of aesthetic with functionality is what I aim
        for. I started first as a Furniture designer and followed that to
        becoming an interior designer for house flipping company. Now I'm taking
        my talents to event and wedding design.{" "}
      </p>{" "}
      <p>
        I'm here to help create your dream wedding. The perfect colors,
        textures, look and feel all coming together in a cohesive stunning
        wedding you'll remember forever.
      </p>
    </div>
  </div>
);

export default Kenny;
