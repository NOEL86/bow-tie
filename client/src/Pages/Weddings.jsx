import React, { Component } from "react";
import Nav from "../Components/Nav";

class Wedding extends Component {
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
    // not sure I need this.
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="col s12 m12 lg12">
            <h1>Wedding Packages</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Wedding;
