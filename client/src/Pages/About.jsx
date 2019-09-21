import React, { Component } from "react";
import Nav from "../Components/Nav";
import Kenny from "../Components/Kenny";
import Cortney from "../Components/Cortney";
import "./About.css";
class About extends Component {
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

        <div className="row" style={{ marginTop: "5%" }}>
          <div className="col m2 lg2" />
          <div className="col s12 m4 lg4">
            <Kenny />
          </div>

          <div className="col s12 m4 lg4">
            <Cortney />
          </div>
          <div className="col m4 lg4" />
        </div>
      </div>
    );
  }
}
export default About;
