import React, { Component } from "react";
import Nav from "../Components/Nav";

class Contact extends Component {
  state = {};

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     console.log(name, value);
  //     this.setState({
  //       [name]: value
  //     });
  //   };

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
          <h2 className="header">Horizontal Card</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://lorempixel.com/100/190/nature/6" alt="This" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          placeholder="Placeholder"
                          id="first_name"
                          type="text"
                          class="validate"
                        />
                        <label htmlfor="first_name">First Name</label>
                      </div>
                      <div className="input-field col s6">
                        <input id="last_name" type="text" class="validate" />
                        <label htmlfor="last_name">Last Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          disabled
                          value="I am not editable"
                          id="disabled"
                          type="text"
                          class="validate"
                        />
                        <label for="disabled">Disabled</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="password" type="password" class="validate" />
                        <label htmlfor="password">Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" type="email" class="validate" />
                        <label htmlfor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12">
                        This is an inline input field:
                        <div className="input-field inline">
                          <input
                            id="email_inline"
                            type="email"
                            class="validate"
                          />
                          <label htmlfor="email_inline">Email</label>
                          <span
                            className="helper-text"
                            data-error="wrong"
                            data-success="right"
                          >
                            Helper text
                          </span>
                        </div>
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
                  Submit
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
