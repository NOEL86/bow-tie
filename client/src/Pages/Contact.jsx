import React, { Component } from "react";
import Nav from "../Components/Nav";
// import M from "materialize-css";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fName: "",
      lName: "",
      phone: "",
      validatedPhone: "",
      validated: false,
      location: "",
      date: "",
      comment: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  validatePhone = () => {
    console.log(this.state.phone);
    let submittedPhone = this.state.phone;
    console.log(submittedPhone.length);
    let phoneLength = submittedPhone.length;
    if (phoneLength < 10) {
      // alert("Invalid phone number submitted!");
      return;
    } else {
      this.setState({ validated: true });
    }
  };

  componentDidMount() {
    // console.log("Mounted");
  }
  //function that checks to see if a user is logged in before allowing them to view the check in page

  componentDidUpdate() {
    // console.log(this.state.fName, this.state.lName);
  }

  handleContact = e => {
    e.preventDefault();
    console.log("submit button clicked");
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
    console.log("Submitted content: ", contactInfo);

    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phone === ""
      // this.state.validated === false
    ) {
      // alert("Please check *required information and phone number length.");
      // M.toast({
      //   html: "Please check *required information and phone number length."
      // });
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
      console.log({ res });
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
    //alert submitted to user on success
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="col s12">
          <h2 id="mHeader" className="header center">
            Contact Us
          </h2>
        </div>

        <div className="row">
          <div className="col m2" />
          <div id="mainCard" className="col s12 m8">
            <div className="card horizontal">
              <div id="flowers" className="card-image">
                <img id="flowers" src="../images/flowers.jpg" alt="Flowers" />
              </div>
              <div className="card-stacked">
                <div id="formStyle" className="card-content">
                  <div className="row">
                    <form onSubmit={this.handleContact} className="col s12">
                      <div id="right" className="row">
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
                          <label htmlFor="first_name">* First Name</label>
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
                          <label htmlFor="last_name">* Last Name</label>
                        </div>
                      </div>

                      <div id="right" className="row">
                        <div className="input-field col s6">
                          <input
                            id="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="phone">* 801-755-7555</label>
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
                          <label htmlFor="email_inline">* Email</label>
                        </div>
                      </div>

                      <div id="right" className="row">
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
                      <div id="right" className="row">
                        <div className="input-field col s8">
                          <textarea
                            id="textarea1"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.handleInputChange}
                            className="materialize-textarea"
                          ></textarea>
                          <label htmlFor="textarea1">Questions</label>
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
      </div>
    );
  }
}
export default Contact;
