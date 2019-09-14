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

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col s12 m6">
            <div className="card medium p-card">
              <img id="cort" src="../images/cort.jpeg" alt="Cort" />
              <span className="card-title">Cortney + Josh</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
