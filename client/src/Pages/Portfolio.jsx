import React, { Component } from "react";
import Nav from "../Components/Nav";
import "./portfolio.css";
import Background from "./thewood.jpg";
import Loader from "../Components/Loader";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cortJosh: [],
      isLoaded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    // console.log("Portfolio Image :", this.state.cortJosh);
    //go to db get all images associated with
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
      // console.log(this.state.isLoaded);
    }, 5000);
  }

  render() {
    return this.state.isLoaded ? (
      <div
        id="portfolio-page"
        style={{
          backgroundImage: `url(${Background})`,
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover cover",
          paddingBottom: "10%"
        }}
      >
        <Nav />

        <div id="portfolioPics" className="row">
          <div className="col s12 m3 l3">
            <div
              className="card"
              name="cortneyJosh"
              value={this.state.cortJosh}
              onClick={this.handleClick}
            >
              <img id="cort" src="../images/cort.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/flowers.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/cuteFaces.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/isle.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/chairs.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/kiss.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/table.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/kissHead.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/laugh.jpeg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img
                id="cort"
                src="../images/tinified/dressClose.jpg"
                alt="Cort"
              />
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card">
              <img id="cort" src="../images/tinified/dressFar.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/tinified/cake.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img
                id="hundred"
                src="../images/tinified/desserts.jpg"
                alt="Cort"
              />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img
                id="hundred"
                src="../images/tinified/table2.jpg"
                alt="Cort"
              />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div id="p-card" className="card">
              <img id="hundred" src="../images/aisleLow.jpg" alt="Cort" />
            </div>
          </div>

          <div className="col s12 m6 l6">
            <div className="card">
              <img id="hundred" src="../images/tables.jpg" alt="Cort" />
            </div>
          </div>

          {/* <div className="col s12 m6 l4">
            <div className="card">
              <img id="hundred" src="../images/laugh.jpeg" alt="Cort" />
            </div>
          </div> */}
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
export default Portfolio;
