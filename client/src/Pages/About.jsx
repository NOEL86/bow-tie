import React, { Component } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Cortney from "../Components/Cortney";
import "./About.css";
// import Background from "./bLights.jpg";
class About extends Component {
  state = {};

  render() {
    return (
      <div
        id="about"
        // style={{
        //   backgroundImage: `url(${Background})`,
        //   // backgroundPosition: "center",
        //   minHeight: "100vh",
        //   backgroundSize: "cover",
        //   paddingBottom: "5%",
        //   zIndex: -1
        // }}
      >
        <Nav />
        <Cortney />
        <Footer/>
      </div>
    );
  }
}
export default About;
