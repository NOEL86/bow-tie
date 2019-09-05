import React, { Component } from "react";
import Nav from "../Components/Nav";
import "./portfolio.css";

class Portfolio extends Component {
  state = {};

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     console.log(name, value);
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  componentDidMount() {}
  //function that checks to see if a user is logged in before allowing them to view the check in page
  componentWillMount() {
    // console.log("I made it here");
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col s12 m6">
            <a LinkTo="/">
              <div className="card medium p-card">
                <div className="card-content white-text">
                  <span className="card-title">Cortney + Josh</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
