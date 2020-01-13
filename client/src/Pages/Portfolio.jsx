import React, { Component } from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import "./portfolio.css";

import Loader from "../Components/Loader";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cortJosh: [],
      jacey: [],
      isLoaded: false
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
  }

  render() {
    return (
      <div id="portfolio-page">
        <Nav />
        {/* <div
          id="Portfolio-Title"
          style={{ textAlign: "center", marginTop: "15%" }}
          className="row"
        >
          <div className="col s12 m12 l12">
            <h5>Check Out Our Work!</h5>
          </div>
        </div> */}
        <div style={{ marginTop: "15%" }} className="row">
          <div className="col s12 m4 offset-m2">
            <div
              id="select"
              className="card"
              name="cortneyJosh"
              value={this.state.cortJosh}
              onClick={this.handleClick}
            >
              <Link to="/CortJosh">
                {" "}
                <img id="cort" src="../images/cort.jpeg" alt="Cortney + Josh" />
              </Link>
              <span className="card-title">Cortney + Josh</span>
            </div>
          </div>
          <div className="col s12 m4 offset-m1">
            <div
              id="select"
              className="card"
              name="jacey"
              value={this.state.jacey}
              onClick={this.handleClick}
            >
              <Link to="/Jacey">
                {" "}
                <img id="cort" src="../images/6.jpg" alt="Jacob + Casey" />
              </Link>
              <span className="card-title">Casey + Jacob</span>
            </div>
          </div>
        </div>
        {/* <input type="file" onChange={this.fileSelectorHandler()} /> */}
      </div>
    );
  }
}
export default Portfolio;
