import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";

class Main extends Component {
  state = {};

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     console.log(name, value);
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  componentDidMount() {
    // CAROUSEL
    var elem = document.querySelector(".carousel");
    var instance = M.Carousel.init(elem, { duration: 200 });
  }

  componentDidUpdate() {
    // instance.next(5);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img src="../images/welcome.jpeg/1" alt="This" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://lorempixel.com/250/250/nature/2" alt="Welcome" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="https://lorempixel.com/250/250/nature/3" alt="This" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="https://lorempixel.com/250/250/nature/4" alt="This" />
          </a>
          <a className="carousel-item" href="#five!">
            <img src="https://lorempixel.com/250/250/nature/5" alt="This" />
          </a>
        </div>
      </div>
    );
  }
}
export default Main;
