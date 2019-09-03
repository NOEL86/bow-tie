import React, { Component } from "react";
import Nav from "../Components/Nav";
import "./Contact.css";
class Contact extends Component {
  state = {
    email: "",
    fName: "",
    lName: "",
    phone: "",
    location: "",
    comment: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {}
  //function that checks to see if a user is logged in before allowing them to view the check in page
  componentWillMount() {
    console.log("I made it here");
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col s12 m7">
          <h2 className="header center">Contact Us!</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img
                src="../images/flowers.jpg"
                alt="This"
                style={{ width: "50%" }}
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          placeholder="Placeholder"
                          id="first_name"
                          name="fName"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="first_name">First Name</label>
                      </div>
                      <div className="input-field col s4">
                        <input
                          id="last_name"
                          name="lName"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="last_name">Last Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="phone">
                          Phone ex: <i className="fa fa-italic">801-755-7555</i>
                        </label>
                      </div>

                      <div className="input-field col s4">
                        <input
                          id="location"
                          name="location"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="location">Event Location</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          id="email_inline"
                          name="email"
                          type="email"
                          className="validate"
                        />
                        <label htmlFor="email_inline">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s8">
                        <textarea
                          id="textarea1"
                          name="comment"
                          className="materialize-textarea"
                        ></textarea>
                        <label htmlFor="textarea1">Comments/Questions</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card-action">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
