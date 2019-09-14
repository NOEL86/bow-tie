import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";

class Main extends Component {
  state = {};

  componentDidMount() {
    // CAROUSEL
    //Need this to run on a timer using instance method
    const elem = document.querySelector(".carousel");
    M.Carousel.init(elem, { duration: 200 });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Nav />
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img src="../images/welcome.jpeg" alt="This" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="../images/flowers.jpg" alt="Welcome" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="../images/vase.jpg" alt="This" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="../images/kiss.jpeg" alt="This" />
          </a>
          <a className="carousel-item" href="#five!">
            <img src="../images/table.jpg" alt="This" />
          </a>
        </div>
      </div>
    );
  }
}
export default Main;