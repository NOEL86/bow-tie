import React, { Component } from "react";
import Nav from "../Components/Nav";
// import { Link } from "react-router-dom";
import "./portfolio.css";
import M from "materialize-css";
import photos from "../photos.json";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cortJosh: [],
      jacey: [],
      isLoaded: false,
      photos,
    };
  }
  // handleClick = event => {
  //   event.preventDefault();
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });
  //   // console.log("Portfolio Image :", this.state.cortJosh);
  //   //go to db get all images associated with
  // };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoaded: true });
    //   // console.log(this.state.isLoaded);
    // }, 5000);

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".materialboxed");
      M.Materialbox.init(elems);

      if (window.innerWidth <= 600) {
        document.querySelectorAll(".materialboxed").forEach((e) => {
          M.Materialbox.getInstance(e).destroy();
        });
      }
    });
  }

  render() {
    return (
      <div id="portfolio-page">
        <Nav />
        <div className="row">
          <div className="col s12">
            <div id="photographers" className="card">
              <h6>Photographers:</h6>
              <ul>
                <li>
                  Burgundy & Dusty Blue at Vanderveen Farms - Kylie Megan
                  Photography
                </li>
                <li>
                  Black & White at Eaglemont Golf Course - Brittany Riley
                  Photography
                </li>
                <li>
                  Blue & Silver at 5th East Hall - Charne Adams Photography
                </li>
                <li>
                  Blush & Green at Jardin del Sol - Danny Rowan Photography
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row" id="portfolioWidth">
          <div className="col s12 m12 l12" style={{display: "flex", flexWrap: "wrap"}}>
            {photos.map(({ id, src }) => (
              <img
                className="materialboxed responsive-img"
                id="pics"
                key={id}
                src={src}
              />
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Portfolio;
