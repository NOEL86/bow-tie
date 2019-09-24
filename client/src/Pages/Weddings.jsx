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
      <div>
        <Nav />
        <div className="row">
          <div className="col s12 m4 lg3">
            <div
              className="card medium p-card"
              name="cortneyJosh"
              value={this.state.cortJosh}
              onClick={this.handleClick}
            >
              <img id="cort" src="../images/cort.jpeg" alt="Cort" />
              <span className="card-title">Cortney + Josh</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Wedding;
