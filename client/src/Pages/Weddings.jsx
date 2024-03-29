import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";
import TableModal from "../Components/TableModal";
import "./Weddings.css";
import Footer from "../Components/Footer";

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
          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div className="row center">
                <div className="col s12 m12 l12">
                  <h5>Month of Coordination - Micro Wedding</h5>
                </div>
              </div>

              <div id="card-content" className="row left">
                <div className="col s12 m12 l12">
                  <p>
                  Keeping your wedding intimate and a little more low key? Not needing all the extras or time commitments included in a typical coordination
                  package? We got you covered! This package is limited to weddings with 40 or less guests (not including vendors) and includes:
                  </p>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m8 l6">
                  <ul id="package1">
                    <li>
                      Unlimited communication throughout the planning process.
                    </li>
                    <li>A virtual monthly meeting with planner to discuss your progress.</li>
                    <li>One venue walk through.</li>
                    <li>Review all venue and vendor contracts.</li>
                    <li>
                      Reminder of payment due dates.
                    </li>
                    <li>
                    Coordinate and confirm arrival and departure times with vendors
                    </li>
                    <li>Confirm rental item quantities.</li>
                    <li>Attend and coordinate rehearsal.</li>
                    <li>
                    Complete ceremony and reception site set up, tear down and
                    clean up.
                    </li>
                    <li>
                    Placement of various items such as: thank you cards, menu’s,
                    programs etc.
                    </li>
                    <li>
                    Detailed Day Of Timeline creation and distribution.
                    </li>
                    <li>
                    Being a point of contact for all vendors, guests and wedding party
                    by greeting, directing and keeping them on task throughout the day
                    </li>
                    <li>Coordinate with DJ for cueing music.</li>
                    <li>On-site day of for up to 8 hours.</li>
                    <li>
                    Pack various items such as gifts, guest books, alcohol etc. into a
                    predetermined vehicle.
                    </li>
                  </ul>
                </div>
                <div className="col m6">
                <img src="/images/cakeTable.jpeg" alt="Intivations" style={{maxWidth: "100%"}}/>
                </div>
              </div>
              <div id="card-content" className="row">
                <div className="col m12">
                  <p>
                    <b>Investment: $1,000</b>
                  </p>
                </div>
              </div>
              
            </div>
            
          </div>

          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div className="row center">
                <div id="float" className="col m12">
                  <h5>Month of Coordination</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                  Done all the planning and designing yourself? Good for you! Now you just need someone to be there the day of to make sure everything goes
                  smoothly while you enjoy your day you’ve worked so hard to plan; enter Bow & Tie. Our Month Of Coordination package includes:
                  </p>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m8 l6">
                  <ul id="package1">
                    <li>
                      Unlimited communication throughout the planning process.
                    </li>
                    <li>A virtual monthly meeting with planner to discuss your progress.</li>
                    <li>
                    One venue walk through.
                    </li>
                    <li>
                    Review all venue and vendor contracts.
                    </li>
                    <li>
                    Reminder of payment due dates.
                    </li>
                    <li>Coordinate and confirm arrival and departure times with vendors.</li>
                    <li>Confirm rental item quantities.</li>
                    <li>Attend and coordinate rehearsal.</li>
                    <li>Complete ceremony and reception site set up, tear down and
                      clean up.
                    </li>
                    <li>Placement of various items such as: thank you cards, menu’s,
                      programs etc.
                    </li>
                    <li>Detailed Day Of Timeline creation and distribution.
                    </li>
                    <li>Being a point of contact for all vendors, guests and wedding party
                      by greeting, directing and keeping them on task throughout the day
                    </li>
                    <li>Coordinate with DJ for cueing music.
                    </li>
                    <li>On-site day of for up to 12 hours.
                    </li>
                    <li>Pack various items such as gifts, guest books, alcohol etc. into a
                        predetermined vehicle.
                    </li>
                  </ul>
                </div>
                <div className="col m6">
                <img src="/images/keInvitations.jpeg" alt="Intivations" style={{maxWidth: "100%"}}/>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    <b>Investment: $1,500</b>
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
                  <h5>Partial Planning</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                  You’ve picked some of your vendors and have an idea of how you envision your day to look, but still need a little guidance; you got it, babe. We’re
                  here for you. Our Partial Planning package includes:
                  </p>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m8 l6">
                  <ul id="package1">
                    <li>
                      Participation in up to 3 vendor selection meetings of your choice
                    </li>
                    <li>
                      Participation in unlimited check in vendor meetings
                    </li>
                    <li>
                      Budget assistance and a list of vendors that fit within your budget
                    </li>
                    <li>Design assistance and a custom list of recommended rental items</li>
                    <li>
                      Coordinator on site for up to 12 hours
                    </li>
                    <li>
                      Pick up rental items
                    </li>
                    <li>Pick up alcohol</li>
                    <li>Monthly checklists</li>
                    <li>A virtual bi-weekly meeting until all vendors are chosen, and then a
                      monthly virtual meeting with your planner to discuss your progress
                      after that.
                    </li>
                    <li>PLUS everything in the “Month Of” Package.</li>
                  </ul>
                </div>
                <div className="col m6">
                <img src="/images/packagesTable.jpeg" alt="Intivations" style={{maxWidth: "100%"}}/>
                </div>
              </div>


              <div id="card-content" className="row">
                <div className="col s12 m12 lg12">
                  <p>
                    <b>Investment: $2,750</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
       
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
                  Don’t know where to start or too busy to take on the full-time job of planning a wedding? Don’t you worry, that’s why we are here, and we’ve done
                  this a few times; trust us.
                  </p>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m8 l6">
                  <ul id="package1">
                    <li>
                    A bi-weekly meeting until all vendors are chosen, and then a
                    monthly meeting with your planner to discuss your progress after
                    that.
                    </li>
                    <li>
                      Schedule and participate in unlimited venue and vendor
                      appointments around your schedule.
                    </li>
                    <li>
                      Unlimited Inspiration Board creations with various colors and themes.
                    </li>
                    <li>Custom budget guide.</li>
                    <li>
                      Custom venue and vendor recommendations list to fit within your
                      budget to create a “Dream Team”.
                    </li>
                    <li>
                      Research out of town guests' accommodations including
                      transportation.
                    </li>
                    <li>Full planning and design for the Rehearsal Dinner.</li>
                    <li>Coordinator on site for 12 hours.</li>
                    <li>Pick up and return any rental items.</li>
                    <li>Pick up and return any leftover alcohol.</li>
                    <li>PLUS everything included in the “Month Of” Package.</li>
                  </ul>
                </div>
                <div className="col m6">
                <img src="/images/fullPlanningImg.jpeg" alt="Intivations" style={{maxWidth: "100%"}}/>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 lg12">
                  <p>
                    <b>Investment: $4,000</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row center">
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
        <br /> */}
        <Footer/>
      </div>
    );
  }
}
export default Wedding;
