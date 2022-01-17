import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.close = this.close.bind(this);
  }

  // close = () => {
  //   var elem = document.querySelectorAll(".sidenav");
  //   var instance = M.Sidenav.getInstance(elem);
  //   instance.close();
  // };


  render() {
    return (
      <div className="page-footer">
          <div className="row">
              <div className="col m2">
              <img id="logoFooter" src="../images/logobt.png" alt="logo" />
              </div>
          <div className="col m2 offset-m2 s12">
        <ul>
            <li>    
                <Link to="/">Home</Link>
            </li>
            <li> 
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Portfolio">Portfolio</Link>
                </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        </div>

        <div className="col m2 s12">
            <ul>
                <li>Locations-</li>
                <li>Orem/Provo</li>
                <li>Salt Lake City</li>
                <li>Ogden</li>
            </ul>
        </div>

        <div className="col m2 s12"> 
        <a
          href="https://www.instagram.com/bowandtieevents/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="iGram"
            style={{ width: "25px" }}
            src="../images/icons8-instagram-old-50.png"
            alt="Instagram Logo"
          />
        </a>
      <a
      href="https://www.facebook.com/Bow-Tie-Events-122658612466871/"
      target="_blank"
      rel="noopener noreferrer"
        >
      <img
        id="fb"
        style={{ width: "25px" }}
        src="../images/icons8-facebook-f-50.png"
        alt="FB Logo"
      />
      </a>
      </div>
      </div>
    </div>
    );
  }
}

export default Footer;