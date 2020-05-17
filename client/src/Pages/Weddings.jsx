import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";
import TableModal from "../Components/TableModal";
import "./Weddings.css";

class Wedding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cortJosh: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
    // console.log("Portfolio Image :", this.state.cortJosh);
    //go to db get all images associated with
  };

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
  }

  render() {
    return (
      <div id="weddingsMain">
        <TableModal />
        <Nav />
        <div id="marginTop" className="row center">
          <div className="col s12 m12 l12">
            <h1 id="headingColorChange">Wedding Packages</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 l8 offset-m2 offset-l2">
            <div className="card">
              <div className="row center">
                <div className="col s12 m12 lg12">
                  <h5>Included in All Packages</h5>
                </div>
              </div>
              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <ul id="package1">
                    <li>
                      <b>One final venue walk through</b>
                    </li>
                    <li>
                      <b>Review of all venue and vendor contracts </b>
                    </li>
                    <li>
                      <b>
                        Reminder of payment due dates for all venues and vendors
                      </b>
                    </li>{" "}
                    <li>
                      <b>
                        Coordinate and confirm arrival and departure times with
                        vendors
                      </b>
                    </li>
                    <li>
                      <b>Confirm rental item quantities</b>
                    </li>
                    <li>
                      <b>Attend and coordinate rehearsal</b>
                    </li>
                    <li>
                      <b>
                        Complete ceremony and reception site set up, tear down
                        and clean up
                      </b>
                    </li>
                    <li>
                      <b>
                        {" "}
                        Placement of various items such as: place cards, thank
                        you cards, menu’s, programs etc{" "}
                      </b>
                    </li>
                    <li>
                      <b>
                        Detailed Day Of timeline creation and distribution to
                        wedding party as well as all venues and vendors.{" "}
                      </b>
                    </li>
                    <li>
                      <b>
                        {" "}
                        Being a point of contact for all vendors, guests and
                        wedding party by greeting, directing and keeping them on
                        task throughout the day
                      </b>
                    </li>
                    <li>
                      <b>Coordinate with DJ for cuing music</b>
                    </li>
                    <li>
                      <b>
                        Pack gifts, guest books, leftover food, alcohol, wedding
                        favors and rental items into predetermined vehicle
                      </b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div className="row center">
                <div className="col s12 m12 l12">
                  <h5>Day Of Coordination</h5>
                </div>
              </div>

              <div id="card-content" className="row left">
                <div className="col s12 m12 l12">
                  <p>
                    Done all the planning and designing yourself? Good for you!
                    Now you just need someone to be there the day of to make
                    sure everything goes smoothly while you enjoy your day
                    you’ve worked so hard to plan; enter Bow & Tie. Our Day Of
                    package includes:
                  </p>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m8 l6">
                  <ul id="package1">
                    <li>
                      Unlimited phone calls and emails throughout your
                      engagement and planning process
                    </li>
                    <li>One in person meeting</li>
                    <li>One Facetime or Skype session</li>
                    <li>One final venue walk through</li>
                    <li>Review all venue and vendor contracts</li>
                    <li>
                      Reminder of payment due dates for all venues and vendors
                    </li>
                    <li>
                      Coordinate and confirm arrival and departure times with
                      vendors
                    </li>
                    <li>Confirm rental item quantities</li>
                    <li>Attend and coordinate rehearsal</li>
                    <li>
                      Complete ceremony and reception site set up, tear down and
                      clean up
                    </li>
                    <li>
                      Placement of various items such as: place cards, thank you
                      cards, menu’s, programs etc
                    </li>
                    <li>
                      Detailed Day Of timeline creation and distribution to
                      wedding party as well as all venues and vendors.
                    </li>
                    <li>
                      Being a point of contact for all vendors, guests and
                      wedding party by greeting, directing and keeping them on
                      task throughout the day
                    </li>
                    <li>Coordinate with DJ for cuing music</li>
                    <li>Lead coordinator on-site for up to 12 hours</li>
                    <li>
                      Pack gifts, guest books, left over food, alcohol, wedding
                      favors and rental items into predetermined vehicle
                    </li>
                  </ul>
                </div>
              </div>
              <div id="card-content" className="row">
                <div className="col m12">
                  <p>
                    <b>Investment: $700</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div className="row center">
                <div id="float" className="col m12">
                  <h5>Partial Planning</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    You’ve picked some of your vendors and have an idea of how
                    you envision your day to look. This package includes
                    everything the “Day Of” Package does, in addition to:
                  </p>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m8 l6">
                  <ul id="package1">
                    <li>Attend up to 3 vendor meetings of your choice</li>
                    <li>Up to 3 in person meetings</li>
                    <li>
                      Unlimited Facetime or Skype sessions with both lead
                      planner and designer
                    </li>
                    <li>
                      Budget assistance and a list of vendors that fit within
                      your budget
                    </li>
                    <li>
                      Design assistance and a custom list of recommended rental
                      items
                    </li>
                    <li>
                      Lead coordinator and designer on site for up to 14 hours
                    </li>
                    <li>Pick up rental items</li>
                    <li>Pick up alcohol</li>
                    <li>Monthly checklists</li>
                  </ul>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    <b>Investment: $2,000</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div className="row center">
                <div className="col s12 m12 l12">
                  <h5>Peace of Mind (Full Planning)</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    Don’t know where to start or are too busy to take on the
                    full-time job of planning a wedding? We got you. Our Full
                    Planning package includes everything the “Day Of” and
                    “Partial Planning” packages do in addition to:
                  </p>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m8 l6">
                  <ul id="package1">
                    <li>Unlimited vendor meetings</li>
                    <li>
                      Schedule and attend venue and vendor appointments around
                      your schedule
                    </li>
                    <li>Unlimited in person meetings</li>
                    <li>
                      Unlimited Inspiration Board creations with various colors
                      and themes
                    </li>
                    <li>Custom budget guide</li>
                    <li>
                      Custom venue and vendor recommendations list to fit within
                      your budget to create a “Dream Team”
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

              <div id="card-content" className="row">
                <div className="col s12 m12 lg12">
                  <p>
                    <b>Investment: $3,250</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row center">
          <div className="col s12 m12 l12">
            <p>
              <b>
                Are you more of a visual person? Don’t you worry. Click Here
              </b>
            </p>
            <a
              id="tButton"
              href="#"
              data-target="modal1"
              className="btn-floating btn-large waves-effect waves-light modal-trigger"
            >
              <i className="material-icons">add</i>
            </a>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default Wedding;
