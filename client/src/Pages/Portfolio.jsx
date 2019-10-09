import React, { Component } from "react";
import Nav from "../Components/Nav";
import "./portfolio.css";
import Background from "./thewood.jpg";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cortJosh: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    console.log("Portfolio Image :", this.state.cortJosh);
    //go to db get all images associated with
  };

  componentDidMount() {
    //go get all images using redux and have them available by props
    // fetch("/portfolio", {
    //   method: "GET", // or 'PUT'
    //   // headers: {
    //   //   "Content-Type": "application/json"
    //   // },
    //   body: JSON.stringify(images) // data can be `string` or {object}!
    // }).then(res => {
    //   console.log({ res });
    //   if (res.ok) {
    //     return JSON.stringify(res);
    //   } else {
    //     return JSON.stringify(res);
    //   }
    // });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingBottom: "10%"
        }}
      >
        <Nav />
        <div className="row">
          <div className="col s12 m3 l3">
            <div
              className="card medium p-card"
              name="cortneyJosh"
              value={this.state.cortJosh}
              onClick={this.handleClick}
            >
              <img id="cort" src="../images/cort.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card medium p-card">
              <img id="cort" src="../images/cuteFaces.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="card medium p-card">
              <img id="cort" src="../images/isle.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card medium p-card">
              <img id="cort" src="../images/chairs.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card medium p-card">
              <img id="cort" src="../images/kiss.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card medium p-card">
              <img id="cort" src="../images/kissHead.jpeg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card medium p-card">
              <img id="cort" src="../images/table.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          <div className="col s12 m3 l3">
            <div className="card medium p-card">
              <img id="cort" src="../images/flowers.jpg" alt="Cort" />
              {/* <span className="card-title">Cortney + Josh</span> use when multiple portfolios*/}
            </div>
          </div>

          {/* <div className="col s12 m6 l3">
            <div className="card medium p-card">
              <img id="hundred" src="../images/decour.jpg" alt="Cort" />
            </div>
          </div> */}

          {/* <div className="col s12 m6 l3">
            <div className="card medium p-card">
              <img id="hundred" src="../images/laugh.jpeg" alt="Cort" />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Portfolio;
