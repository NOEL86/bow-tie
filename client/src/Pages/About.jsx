import React, { Component } from "react";
import Nav from "../Components/Nav";
import Kenny from "../Components/Kenny";
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
          height: "100vh",
          backgroundRepeat: "repeat",
          backgroundSize: "100vh"
        }}
      >
        <Nav />

        <div className="row" style={{ marginTop: "5%", marginRight: "5%" }}>
          <div className="col m2 lg2" />
          <div className="col s12 m4 lg4">
            <Kenny />
          </div>

          <div className="col s12 m4 lg4">
            <Cortney />
          </div>

          <div className="col m4 lg4" />
        </div>
      </div>
    );
  }
}
export default About;
