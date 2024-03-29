import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";
// import options from "materialize-css";
// import SMedia from "../Components/SMedia";
import Footer from "../Components/Footer";
import "./Main.css";

class Main extends Component {
  state = {};

  componentDidMount() {
    // CAROUSEL
    //Need this to run on a timer using instance method
    const elem = document.querySelectorAll(".carousel");
    // console.log(elem);
    M.Carousel.init(elem, { duration: "200" });
    // instance();

    // const element = document.querySelector("#sMediaIcons");
    // element.classList.add("animated", "bounceOut");

    // element.addEventListener("animationend", function() {
    //   doSomething();
    // });
  }

  componentDidUpdate() {
    // console.log("made it to function");
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="carousel">
          <div className="carousel-item">
            <img id="cImage" src="../images/welcome.jpeg" alt="This" />
          </div>
          <div className="carousel-item">
            <img
              id="cImage"
              src="../images/WhiteWedding/brideCar.jpg"
              alt="Welcome"
            />
          </div>
          <div className="carousel-item">
            <img id="cImage" src="../images/1.jpg" alt="This" />
          </div>
          <div className="carousel-item">
            <img id="cImage" src="../images/kiss.jpeg" alt="This" />
          </div>
          <div className="carousel-item">
            <img
              id="cImage"
              src="../images/PhotoShootWedding/couple.jpg"
              alt="This"
            />
          </div>
        </div>

        {/* <SMedia /> */}
        <Footer/>
      </div>
    );
  }
}
export default Main;
