import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";
import options from "materialize-css";
import SMedia from "../Components/SMedia";
import "./Main.css";

class Main extends Component {
  state = {};

  componentDidMount() {
    // CAROUSEL
    //Need this to run on a timer using instance method
    const elem = document.querySelectorAll(".carousel");
    console.log(elem);
    var instance = M.Carousel.init(elem, options);
    // instance.Carousel.options({ duration: 200 });
  }

  componentDidUpdate() {
    console.log("made it to function");
  }

  render() {
    console.log("hit");
    return (
      <div>
        <Nav />
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img id="cImage" src="../images/welcome.jpeg" alt="This" />
          </a>
          <a className="carousel-item" href="#two!">
            <img id="cImage" src="../images/flowers.jpg" alt="Welcome" />
          </a>
          <a className="carousel-item" href="#three!">
            <img id="cImage" src="../images/vase.jpg" alt="This" />
          </a>
          <a className="carousel-item" href="#four!">
            <img id="cImage" src="../images/kiss.jpeg" alt="This" />
          </a>
          <a className="carousel-item" href="#five!">
            <img id="cImage" src="../images/table.jpg" alt="This" />
          </a>
        </div>
        <br />
        <SMedia />
      </div>
    );
  }
}
export default Main;
