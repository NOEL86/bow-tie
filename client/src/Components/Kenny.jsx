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
        I am very passionate about creativity, fashion and design. I’ve always
        had an eye for design so I started as a furniture designer. I later
        followed that to becoming an interior designer for my house flipping
        company in Texas. I love creating a perfect blend of aesthetically
        pleasing yet functional pieces and seeing a project transform into what
        it was meant to be.{" "}
      </p>
      <p>
        I enjoy traveling and seeing all types of design in various cultures and
        places throughout the world. I have been to Italy, Thailand, Vietnam and
        Mexico. I would love visit different parts of Europe and go back to
        Thailand.
      </p>
      <p>
        {" "}
        I am excited to take my passion and talents of design and creativity to
        events and weddings. I’m here to help create your dream wedding. If your
        unsure of how you want your day to look, I’ll walk you through different
        options until we find what clicks. When the perfect look, feel, colors
        and textures all come together in a cohesive and stunning manner, it
        makes your day feel that much more like the two of you and will be a day
        you will remember forever.
      </p>
    </div>
  </div>
);

export default Kenny;
