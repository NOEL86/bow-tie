import React, { Component } from "react";
import Nav from "../Components/Nav";

class Packages extends Component {
  state = {};

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     console.log(name, value);
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  componentDidMount() {
    console.log("Packages");
  }
  //function that checks to see if a user is logged in before allowing them to view the check in page

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
export default Packages;
