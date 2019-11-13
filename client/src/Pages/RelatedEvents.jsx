import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";
import TableModal from "../Components/TableModal";
import "./Weddings.css";

class RelatedEvents extends Component {
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
    // console.log("Portfolio Image :", this.state.cortJosh);
    //go to db get all images associated with
  };

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
  }

  render() {
    return (
      <div id="relatedEvents">
        <TableModal />
        <Nav />
        <div id="marginTop" className="row center">
          <div className="col s12 m12 l12">
            <h1 id="headingColorChange">Wedding Related Event Packages</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div className="row center">
                <div className="col s12 m12 l12">
                  <h5>Engagement</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    Here at Bow & Tie, we just love LOVE! We want to start the
                    best experience for the best day of your life on the right
                    track. We can help you plan the most “you” proposal.
                    Investment begins at $75 depending on location and
                    elaborateness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div style={{ textAlign: "center" }} className="row">
                <div id="float" className="col m12">
                  <h5>Engagement Party</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    You’ve said “YES!” and now the fun beings. Let us plan your
                    engagement party with you so you can just stare at that
                    gorgeous ring and enjoy the excitement of being engaged!
                    Investment begins at $250 depending on size, location,
                    elaborateness etc.
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
                  <h5>Bachelor/ Bachelorette Parties</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    Wanting someone to plan the last hoorah? You got it! We can
                    help with everything from hotel and flight reservations to
                    restaurant and show recommendations. Investment begins at
                    $100 and depends on factors such as group size, location,
                    length, elaborateness of party etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m8 l6 offset-m2">
            <div className="card">
              <div style={{ textAlign: "center" }} className="row">
                <div id="float" className="col m12">
                  <h5>Rehearsal Dinner</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    Not needing a Wedding day planner but need one less thing to
                    worry about? Wanting to add to your package with Bow & Tie?
                    Are you a family member or friend who oversees the dinner
                    and need help? Whatever your reason, even if we aren’t
                    working with you on your day of needs, we are here for you.
                    Investment - $500
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
                <div className="col s12 md12 l12">
                  <h5>Bridal Shower</h5>
                </div>
              </div>

              <div id="card-content" className="row">
                <div className="col s12 m12 l12">
                  <p>
                    Have too much on your plate? We’ve got your back. Let us
                    take of care of some of the happy stress the wedding is
                    accumulating. Investment begins at $150 depending on group
                    size, location, elaborateness of shower etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RelatedEvents;
