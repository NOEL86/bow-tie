import React, { Component } from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import "./portfolio.css";
import Loader from "../Components/Loader";

class Jacey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cortJosh: [],
      jacey: [],
      isLoaded: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick = event => {
  //   event.preventDefault();
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });

  // };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
      // console.log(this.state.isLoaded);
    }, 1000);
  }

  render() {
    return this.state.isLoaded ? (
      <div id="portfolio-page-jake">
        <Nav />

        {/* <input type="file" onChange={this.fileSelectorHandler()} /> */}
        <div id="portfolioPics" className="row">
          <div className="col s12 m3 l3">
            <div className="card">
              <img id="jake" src="../images/6.jpg" alt="Jacob + Casey" />
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="jake" src="../images/7.jpg" alt="jake" />
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="jake" src="../images/8.jpg" alt="jake" />
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card">
              <img id="jake" src="../images/1-2.jpg" alt="jake" />
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card">
              <img id="jake" src="../images/4.jpg" alt="jake" />
            </div>
          </div>
          <div className="col s12 m6 l6 offset m-1">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/kiss.jpg" alt="jake" />
            </div>
          </div>
          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/family.jpg" alt="jake" />
            </div>
          </div>
          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/4-2.jpg" alt="jake" />
            </div>
          </div>
          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/5.jpg" alt="jake" />
            </div>
          </div>
          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/board.jpg" alt="jake" />
            </div>
          </div>

          <div className="col s12 m6 l4">
            <Link to="/Portfolio" className="waves-effect waves-light btn">
              Portfolios
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <div id="loaderPage" style={{ backgroundColor: "#214e63" }}>
        <div
          id="loaderRow"
          style={{ paddingTop: "30%" }}
          className="row center"
        >
          <div className="col s12 m12 l12">
            <Loader />
          </div>
        </div>
      </div>
    );
  }
}
export default Jacey;
