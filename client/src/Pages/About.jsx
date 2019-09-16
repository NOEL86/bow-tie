import React, { Component } from "react";
import Nav from "../Components/Nav";
import Kenny from "../Components/Kenny";
import Cortney from "../Components/Cortney";
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
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col s6">
            <Kenny />
          </div>
          <div className="col s6">
            <Cortney />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
