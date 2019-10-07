import React, { Component } from "react";
import Nav from "../Components/Nav";
import Kenny from "../Components/Kenny";
import Cortney from "../Components/Cortney";
import "./About.css";
import Background from "./grunge_wall.png";
import SMedia from "../Components/SMedia";
class About extends Component {
  state = {};

  render() {
    return (
      <div
        id="about"
        style={{
          backgroundImage: `url(${Background})`,
          height: "100vh",
          backgroundPosition: "center",

          backgroundSize: "cover no-repeat"
        }}
      >
        <Nav />

        <div id="center" className="row" style={{ marginTop: "10%" }}>
          <div className="col s12 m12 l12 offset-m1 offset-l2">
            <div className="col s12 m6 lg4">
              <Kenny />
            </div>

            <div className="col s12 m6 lg4">
              <Cortney />
            </div>
          </div>
        </div>
        <SMedia />
      </div>
    );
  }
}
export default About;
