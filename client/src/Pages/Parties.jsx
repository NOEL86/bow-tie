import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";
import TableModal from "../Components/TableModal";
import "./Weddings.css";

class Parties extends Component {
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
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row center">
          <div className="col s12 m12 l12">
            <h1>Party Packages</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div className="row center">
                <div className="col s12 md12 l12">
                  <h5>Birthday</h5>
                </div>
              </div>
              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    A special birthday has arrived! Whether it’s a Sweet 16,
                    Quinceanera, 21st , Dirty 30, the BIG 5O. or any other
                    birthday you want to make extra special, we are on it like
                    Blue Bonnet. Investment begins at $500 depending on size,
                    location, elaborateness etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div style={{ textAlign: "center" }} className="row">
                <div className="col s12 m12 l12">
                  <h5>Retirement</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    You’ve done your time and now it's time to par-tay! Kick off
                    the start of your life vacation with a bang. Investment
                    begins at $500 depending on size, location, elaborateness
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div className="row center">
                <div className="col s12 m12 l12">
                  <h5>Other</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    Have another type of party in mind that you need help with?
                    Contact us! We are more than happy to help. Investment
                    depends on needs.
                  </p>

                  <a
                    id="contactUs"
                    // className="btn-small"
                    style={{ color: "#214e63" }}
                    href="/Contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Parties;
