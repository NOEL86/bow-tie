import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import "./PackageDrop.css";

class TableModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div id="modal1" className="modal">
        <div id="modal-content" className="modal-content center">
          <h4>Package Info</h4>
          <div id="center" className="row">
            <div className="col s12 m12 l12">
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
        </div>
        <div className="modal-footer">
          <Link to="/Weddings" className="modal-close btn-flat" id="closeModal">
            Got It
          </Link>
        </div>
      </div>
    );
  }
}

export default TableModal;
