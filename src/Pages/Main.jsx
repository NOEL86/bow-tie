import React, { Component } from "react";
import Nav from "../Components/Nav";

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
    // document.addEventListener("DOMContentLoaded", function() {
    //   var elems = document.querySelectorAll(".carousel");
    //   var instances = M.Carousel.init(elems, options);
    // });
    // // Or with jQuery
    // $(document).ready(function() {
    //   $(".carousel").carousel();
    // });
  }
  //function that checks to see if a user is logged in before allowing them to view the check in page
  //   componentWillMount() {
  //     console.log("I made it here");
  //   }

  render() {
    return (
      <div>
        <Nav />
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img src="https://lorempixel.com/250/250/nature/1" alt="This" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://lorempixel.com/250/250/nature/2" alt="This" />
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
