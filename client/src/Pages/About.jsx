import React, { Component } from "react";
import Nav from "../Components/Nav";

import Cortney from "../Components/Cortney";
import "./About.css";
import Background from "./grunge_wall.png";
class About extends Component {
  state = {};

  render() {
    return (
      <div
        id="about"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundSize: "cover cover",
          paddingBottom: "5%"
        }}
      >
        <Nav />
        <Cortney />
      </div>
    );
  }
}
export default About;
