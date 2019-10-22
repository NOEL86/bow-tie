import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";
import "./Contact.css";
// import PackageDrop from "../Components/PackageDrop";

class Agreement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      bName: "",
      gName: "",
      package: "",
      validatedPhone: "",
      validated: false,
      location: "",
      eventDate: "",
      date: "",
      comment: ""
      // downloadable: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
  }

  componentDidMount() {
    let dateNow = new Date();
    this.setState({ date: dateNow });
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  validatePhone = () => {
    // console.log(this.state.phone);
    let submittedPhone = this.state.phone;
    // console.log(submittedPhone.length);
    let phoneLength = submittedPhone.length;
    if (phoneLength < 10) {
      // alert("Invalid phone number submitted!");
      return;
    } else {
      this.setState({ validated: true });
    }
  };

  handleContact = e => {
    e.preventDefault();
    // console.log("submit button clicked");
    this.validatePhone();

    const contactInfo = {
      firstName: this.state.fName,
      lastName: this.state.lName,
      email: this.state.email,
      phone: this.state.phone,
      location: this.state.location,
      date: this.state.date,
      comment: this.state.comment
    };
    // console.log("Submitted content: ", contactInfo);

    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phone === ""
      // this.state.validated === false
    ) {
      // alert("Please check *required information and phone number length.");
      M.toast({
        html: "Please check *required information and resubmit.",
        classes: "deep-orange darken-4"
      });
      return;
    }

    //ajax call to send info to nodemailer
    fetch("/send", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactInfo) // data can be `string` or {object}!
    }).then(res => {
      // console.log({ res });
      if (res.ok) {
        return JSON.stringify(res);
      } else {
        return JSON.stringify(res);
      }
    });
    // .then(response => console.log("Success:", JSON.stringify(response))); //send alert
    // .catch(error => console.error("Error:", error)); //send error
    //clear search fields
    this.setState({
      fName: "",
      lName: "",
      email: "",
      phone: "",
      location: "",
      date: "",
      comment: "",
      validated: false
    });
    M.toast({
      html: "Submitted! We look forward to working with you.",
      classes: "light-blue darken-3"
    });
  };

  render() {
    //this.state.downloadable ?
    return (
      //   <div>
      //     <Nav />
      //     <PackageDrop />

      //     <div className="row">
      //       <div className="col s12 m9 l8 offset-m1 offset-l2">
      //         <div className="card-panel">
      //           <div className="row center">
      //             <div className="col s12 m12 l12">
      //               <h4>Event Service Agreement</h4>
      //             </div>
      //           </div>
      //           <div className="row">
      //             <div className="col s12 m12 l12">
      //               <p>Bow & Tie Events LLC</p>
      //               <p>20227 77 th AVE NE #M203</p>
      //               <p>Arlington, WA 98223</p>
      //               <p>bowandtieeventswa@gmail.com</p>
      //               <p>425-903-2983</p>
      //             </div>
      //           </div>

      //           <div className="row">
      //             <div className="col s12 m12 l12">
      //               <div className="card-stacked">
      //                 <div id="formStyle" className="card-content">
      //                   <div className="row">
      //                     <form
      //                       onSubmit={this.handleContact}
      //                       className="col s12"
      //                       download
      //                     >
      //                       <div id="right" className="row">
      //                         <p>This service agreement dated:</p>
      //                         <div className="input-field col s12 m12 l12">
      //                           <input
      //                             id="date"
      //                             name="date"
      //                             defaultValue={this.state.date}
      //                           />
      //                         </div>
      //                       </div>

      //                       <div id="right" className="row">
      //                         <p>
      //                           Between Bow & Tie Events LLC (hereafter referred
      //                           to as B&T) and
      //                         </p>
      //                         <div className="input-field col s6 m6 l4">
      //                           <input
      //                             id="bName"
      //                             name="bName"
      //                             value={this.state.bName}
      //                             onChange={this.handleInputChange}
      //                             type="text"
      //                             className="validate"
      //                           />
      //                           <label htmlFor="bride-name">Bride's Name</label>
      //                         </div>
      //                         <div className="input-field col s6 m6 l4">
      //                           <input
      //                             id="gName"
      //                             name="gName"
      //                             value={this.state.gName}
      //                             onChange={this.handleInputChange}
      //                             type="text"
      //                             className="validate"
      //                           />
      //                           <label htmlFor="groom-name">Groom's Name</label>
      //                         </div>
      //                         <p>
      //                           (both Bride and Groom hereafter referred to as
      //                           client).
      //                         </p>
      //                       </div>

      //                       <div id="right" className="row">
      //                         <div className="col s12 m12 l12">
      //                           <p>SERVICES PROVIDED</p>
      //                           <p>
      //                             A. The client has received an electronic or
      //                             physical copy of the package of services they
      //                             have chosen,
      //                             <span>
      //                               <a
      //                                 id="dropdownList"
      //                                 className="dropdown-trigger"
      //                                 href="#"
      //                                 data-target="dropdownList"
      //                               ></a>
      //                             </span>
      //                           </p>
      //                           <p>
      //                             B. B&T has agreed to provide all the services in
      //                             the applicable package chosen by the client.
      //                           </p>
      //                         </div>

      //                         <div className="col s12 m12 l12">
      //                           <p>Terms of Agreement</p>
      //                           <p>
      //                             A. The length of this agreement (the “term”)
      //                             will begin on the date B&amp;T receives this
      //                             agreement signed (same date as listed above
      //                             unless otherwise noted) and will remain in full
      //                             force and effect until the completion of the
      //                             services on the day of the event,{" "}
      //                             <span>
      //                               <div className="input-field">
      //                                 <input
      //                                   id="event-date"
      //                                   name="eventDate"
      //                                   value={this.state.eventDate}
      //                                   onChange={this.handleInputChange}
      //                                   type="text"
      //                                   className="validate"
      //                                 />
      //                                 <label htmlFor="event-date">
      //                                   Event Date(s)
      //                                 </label>
      //                               </div>
      //                             </span>
      //                           </p>
      //                         </div>
      //                       </div>
      //                       <div className="col s12 m12 l12">
      //                         <p>
      //                           B. The client may cancel services in writing at
      //                           any time up to 75 days prior to the event
      //                           Date:&nbsp;
      //                           <b>{this.state.eventDate}</b>&nbsp;without any
      //                           additional charges. If the client wishes to cancel
      //                           services after DATE (74-31 days prior to the
      //                           event), the client agrees to pay half of the
      //                           remaining balance (25% of the total balance)
      //                         </p>
      //                       </div>
      //                       <small>* Required</small>
      //                       <div className="card-action">
      //                         <button
      //                           className="btn waves-effect waves-light"
      //                           type="submit"
      //                           onSubmit={this.handleContact}
      //                           name="action"
      //                         >
      //                           <i className="material-icons right">send</i>
      //                         </button>
      //                       </div>
      //                     </form>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // ) : (
      <div>
        <Nav />
        <div className="row">
          <div className="col s12">
            <h2 id="mHeader" className="header center">
              Service Agreement
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12 l12">
            <embed
              id="contract"
              src="../images/Contract.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Agreement;
