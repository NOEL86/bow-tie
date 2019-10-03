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
        <div className="row center">
          <div className="col s12 m12 lg12">
            <h1>Wedding Packages</h1>
          </div>
        </div>
        <div className="row left">
          <div className="col">
            <h5>Package:</h5>
            <h6>Day Of Coordination</h6>
          </div>
        </div>

        <div className="row left">
          <div className="col s12 m6 lg4">
            <p>
              Done all the planning and designing yourself? Good for you! Now
              you just need someone to be there the day of to make sure
              everything goes smoothly while you enjoy your day you’ve worked so
              hard to plan; enter Bow & Tie. Our Day Of package includes:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 lg4">
            <ul id="package1">
              <li>
                Unlimited phone calls and emails throughout your engagement and
                planning process
              </li>
              <li>One in person meeting</li>
              <li>One Facetime or Skype session</li>
              <li>One final venue walk through</li>
              <li>Review all venue and vendor contracts</li>
              <li>Reminder of payment due dates for all venues and vendors</li>
              <li>
                Coordinate and confirm arrival and departure times with vendors
              </li>
              <li>Confirm rental item quantities</li>
              <li>Attend and coordinate rehearsal</li>
              <li>
                Complete ceremony and reception site set up, tear down and clean
                up
              </li>
              <li>
                Placement of various items such as: place cards, thank you
                cards, menu’s, programs etc
              </li>
              <li>
                Detailed Day Of timeline creation and distribution to wedding
                party as well as all venues and vendors.
              </li>
              <li>
                Being a point of contact for all vendors, guests and wedding
                party by greeting, directing and keeping them on task throughout
                the day
              </li>
              <li>Coordinate with DJ for cuing music</li>
              <li>Lead coordinator on-site for up to 12 hours</li>
              <li>
                Pack gifts, guest books, left over food, alcohol, wedding favors
                and rental items into predetermined vehicle
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Wedding;
