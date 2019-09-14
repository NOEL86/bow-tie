import React, { Component } from "react";
import Nav from "../Components/Nav";
import "./Contact.css";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fName: "",
      lName: "",
      phone: "",
      location: "",
      date: "",
      comment: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContact = this.handleContact.bind(this);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    console.log("Mounted");
  }
  //function that checks to see if a user is logged in before allowing them to view the check in page

  componentDidUpdate() {
    // console.log(this.state.fName, this.state.lName);
  }

  handleContact = e => {
    e.preventDefault();
    console.log("submit button clicked");

    const contactInfo = {
      firstName: this.state.fName,
      lastName: this.state.lName,
      email: this.state.email,
      phone: this.state.phone,
      location: this.state.location,
      date: this.state.date,
      comment: this.state.comment
    };
    console.log("Submitted content: ", contactInfo);

    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phone === ""
    ) {
      alert("OOPS you forgot something!");
      return;
    }

    //ajax call to send info to nodemailer
    fetch("/send", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactInfo) // data can be `string` or {object}!
    })
      .then(res => {
        console.log({ res });
        if (res.ok) {
          return res.json();
        } else {
          return res.json({ res: "Errors" });
        }
      })
      .then(response => console.log("Success:", JSON.stringify(response))); //send alert
    // .catch(error => console.error("Error:", error)); //send error
    //clear search fields
    this.setState({
      fName: "",
      lName: "",
      email: "",
      phone: "",
      location: "",
      date: "",
      comment: ""
    });
    //alert submitted to user on success
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="col s12 m7">
          <h2 id="mHeader" className="header center">
            Contact Us
          </h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="../images/flowers.jpg" alt="Flowers" />
            </div>
            <div className="card-stacked">
              <div id="formStyle" className="card-content">
                <div className="row">
                  <form onSubmit={this.handleContact} className="col s12">
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          // placeholder="Placeholder"
                          id="first_name"
                          name="fName"
                          value={this.state.fName}
                          onChange={this.handleInputChange}
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="first_name">First Name *</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="last_name"
                          name="lName"
                          value={this.state.lName}
                          onChange={this.handleInputChange}
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="last_name">Last Name *</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          id="phone"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.handleInputChange}
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="phone">
                          Phone <i className="fa fa-italic">801-755-7555 *</i>
                        </label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="email_inline"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          type="email"
                          className="validate"
                        />
                        <label htmlFor="email_inline">Email *</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          id="location"
                          name="location"
                          value={this.state.location}
                          onChange={this.handleInputChange}
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="location">Event Location</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="date"
                          name="date"
                          value={this.state.date}
                          onChange={this.handleInputChange}
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="date">Event Date(s)</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s8">
                        <textarea
                          id="textarea1"
                          name="comment"
                          value={this.state.comment}
                          onChange={this.handleInputChange}
                          className="materialize-textarea"
                        ></textarea>
                        <label htmlFor="textarea1">Comments/Questions</label>
                      </div>
                    </div>
                    <small>* Required</small>
                    <div className="card-action">
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        onSubmit={this.handleContact}
                        name="action"
                      >
                        <i className="material-icons right">send</i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
