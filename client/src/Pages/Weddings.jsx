import React, { Component } from "react";
import Nav from "../Components/Nav";
import "./Weddings.css";

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
            <h4>Packages</h4>
            <h5>Day Of Coordination:</h5>
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
        <div className="row">
          <div className="col md12">
            <p>
              <b>Investment: $700</b>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col md12">
            <h5>Partial Planning</h5>
          </div>
        </div>

        <div className="row">
          <div className="col md12">
            <p>
              You’ve picked some of your vendors and have an idea of how you
              envision your day to look. This package includes everything the
              “Day Of” Package does, in addition to:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col md12">
            <ul>
              <li>Attend up to 3 vendor meetings of your choice</li>
              <li>Up to 3 in person meetings</li>
              <li>
                Unlimited Facetime or Skype sessions with both lead planner and
                designer
              </li>
              <li>
                Budget assistance and a list of vendors that fit within your
                budget
              </li>
              <li>
                Design assistance and a custom list of recommended rental items
              </li>
              <li>Lead coordinator and designer on site for up to 14 hours</li>
              <li>Pick up rental items</li>
              <li>Pick up alcohol</li>
              <li>Monthly checklists</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col s12 md12 lg12">
            <p>
              <b>Investment: $2,000</b>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 md12 lg12">
            <h5>Peace of Mind (Full Planning)</h5>
          </div>
        </div>

        <div className="row">
          <div className="col s12 md12 lg12">
            <p>
              Don’t know where to start or are too busy to take on the full-time
              job of planning a wedding? We got you. Our Full Planning package
              includes everything the “Day Of” and “Partial Planning” packages
              do in addition to:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col md12">
            <ul>
              <li>Unlimited vendor meetings</li>
              <li>
                Schedule and attend venue and vendor appointments around your
                schedule
              </li>
              <li>Unlimited in person meetings</li>
              <li>
                Unlimited Inspiration Board creations with various colors and
                themes
              </li>
              <li>Custom budget guide</li>
              <li>
                Custom venue and vendor recommendations list to fit within your
                budget to create a “Dream Team”
              </li>
              <li>
                Research out of town guests' accommodations including
                transportation
              </li>
              <li>Full planning and design for the Rehearsal Dinner</li>
              <li>Lead Coordinator and Designer on site for 16 hours</li>
              <li>Pick up and return any rental items</li>
              <li>Pick up and return any leftover alcohol</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col s12 md12 lg12">
            <p>
              <b>Investment: $3,250</b>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col m12">
            <p>
              <b>
                Are you more of a visual person? Don’t you worry. We’ve got you
                covered with our chart below:
              </b>
            </p>
          </div>
        </div>

        <div id="center" className="row">
          <div className="col s12 m6 lg6">
            <table>
              <tbody>
                <tr>
                  <th>Services</th>
                  <th>Day Of Coordination</th>
                  <th>Partial Planning</th>
                  <th>"Peace of Mind" (Full Planning)</th>
                </tr>
                <tr>
                  <td>In Person Meetings</td>
                  <td>One</td>
                  <td>Three</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Phone Calls/Emails</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Skype/Facetime Sessions</td>
                  <td>One</td>
                  <td>Three</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Coordinator on Site</td>
                  <td>12 Hours</td>
                  <td>14 Hours</td>
                  <td>16 Hours</td>
                </tr>
                <tr>
                  <td>Designer on Site</td>
                  <td></td>
                  <td>14 Hours</td>
                  <td>16 Hours</td>
                </tr>
                <tr>
                  <td>Vendor Meetings</td>
                  <td></td>
                  <td>Three</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Monthly CheckLists</td>
                  <td></td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Venue Vendor Reccomations</td>
                  <td></td>
                  <td>Yes</td>
                  <td>Custom "Dream Team" List</td>
                </tr>
                <tr>
                  <td>Budget</td>
                  <td></td>
                  <td>Assistance</td>
                  <td>Custom Budget List</td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td></td>
                  <td>Assistance</td>
                  <td>Unlimited Inspiration Board Creations</td>
                </tr>
                <tr>
                  <td>Pick Up/Return Rentals</td>
                  <td></td>
                  <td>Pick Up Only</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Pick Up/Return Alcohol</td>
                  <td></td>
                  <td>Pick Up Only</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Stationary</td>
                  <td></td>
                  <td></td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Out of Town Guests' Accommodations</td>
                  <td></td>
                  <td></td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Planning/Design Rehearsal Dinner</td>
                  <td></td>
                  <td></td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="center" className="row">
          <div className="col s12 m12 lg12">
            <h5>Included in All Packages:</h5>
          </div>
        </div>

        <div id="center" className="row">
          <div className="col s12 m12 lg 12">
            <p>
              <b>One final venue walk through</b>
            </p>
            <p>
              <b>Review of all venue and vendor contracts </b>
            </p>
            <p>
              <b>Reminder of payment due dates for all venues and vendors</b>
            </p>{" "}
            <p>
              <b>
                Coordinate and confirm arrival and departure times with vendors
              </b>
            </p>
            <p>
              <b>Confirm rental item quantities</b>
            </p>
            <p>
              <b>Attend and coordinate rehearsal</b>
            </p>
            <p>
              <b>
                Complete ceremony and reception site set up, tear down and clean
                up
              </b>
            </p>
            <p>
              <b>
                {" "}
                Placement of various items such as: place cards, thank you
                cards, menu’s, programs etc{" "}
              </b>
            </p>
            <p>
              <b>
                Detailed Day Of timeline creation and distribution to wedding
                party as well as all venues and vendors.{" "}
              </b>
            </p>
            <p>
              <b>
                {" "}
                Being a point of contact for all vendors, guests and wedding
                party by greeting, directing and keeping them on task throughout
                the day
              </b>
            </p>
            <p>
              <b>Coordinate with DJ for cuing music</b>
            </p>
            <p>
              <b>
                Pack gifts, guest books, leftover food, alcohol, wedding favors
                and rental items into predetermined vehicle
              </b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Wedding;
