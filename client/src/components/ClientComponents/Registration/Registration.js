import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import Form from '../../Form/Form';
class Registration extends Component {
  state = {
    showFormSuccess: false,
  }

  // This method is the one that should handle the form sumbits.
  // Typically, it will send the form data with an ajax call to the server. IN REACT, YOU USUALLY USE THE AXIOS LIB FOR THAT
  submit = () => {
    // Replace this code with a working request to the backend when ready
    // Currently it just displays a success message
    this.setState({ showFormSuccess: true });
    setTimeout(() => { this.setState({ showFormSuccess: false }); }, 5000)
  }

  _renderSuccessMessage() {
    return (
      <div className={"alert alert-success mt-4"} role="alert">
        <p>Form was successfully validated and is ready to be submitted</p>
      </div>
    )
  }

  // This gets called on input change to set our custom password match validation
  checkPasswordMatch(e) {
    let password = document.getElementById('password').value;
    if (e.target.value !== password) {
      e.target.setCustomValidity("Password confirmation must match password.")
    } else {
      // input is valid -- reset the error message
      e.target.setCustomValidity("");
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Sign up</h1>
        <Row>
          <Col md="1" />
          <Col md="10 text-left">
            <form method="POST" action="/api/users">
              <div className="form-group">
                <label htmlFor="fName">First Name</label>
                <input
                  id="fName"
                  className="form-control"
                  type="text"
                  name="fName"
                  placeholder="Enter First Name"
                  required={true}
                  minLength={2}
                  pattern="(?=.*[a-z]).{2,}"
                />
                <div className="invalid-feedback" />
              </div>

              <div className="form-group">
                <label htmlFor="lName">Last Name</label>
                <input
                  id="lName"
                  className="form-control"
                  type="text"
                  name="lName"
                  placeholder="Enter Last Name"
                  required={true}
                  minLength={2}
                  pattern="(?=.*[a-z]).{2,}"
                />
                <div className="invalid-feedback" />
              </div>
  {/* NEEDS TO BE UNIQUE */}
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="form-control"
                  required={true}
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                />
                <div className="invalid-feedback" />
              </div>
  {/* NEEDS TO BE UNIQUE */}
              <div className={"form-group"}>
                <label htmlFor={"email"}>Email</label>
                <input
                  id={"email"}
                  className={"form-control"}
                  required={true}
                  name="email"
                  type={"email"}
                  placeholder={"Enter Email"}
                />
                <div className="invalid-feedback" />
              </div>
              {/* tel input type selects a different input keyboard but does not include automatic pattern matching  */}
              <div className={"form-group"}>
                <label htmlFor={"phone"}>Phone Number</label>
                <input
                  id={"phone"}
                  className={"form-control"}
                  required={true}
                  name="phone"
                  type={"tel"}
                  placeholder={"Enter Phone Number"}
                  minLength={10}
                  pattern="(?=.*\d).{10,}"
                />
                <small className="form-text text-muted">Phone number must be at least 10 digits and without dashes</small>
                <div className="invalid-feedback" />
              </div>

              <div className={"form-group"}>
                <label htmlFor={"password"}>Password</label>
                <input
                  id={"password"}
                  className={"form-control"}
                  required={true}
                  name="password"
                  type={"password"}
                  placeholder={"Enter Password"}
                  minLength={8}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                />
                <small className="form-text text-muted">Password must be at least 8 characters long and contain uppercase and lowercase letters and numbers</small>
                <div className="invalid-feedback" />
              </div>

              <div className={"form-group"}>
                <label htmlFor={"passwordConfirm"}>Password Confirmation</label>
                <input
                  id={"passwordConfirm"}
                  className={"form-control"}
                  required={true}
                  name={"passwordConfirm"}
                  type={"password"}
                  placeholder={"Enter Password Confirmation"}
                  onChange={this.checkPasswordMatch}
                />
                <div className="invalid-feedback" />
              </div>

              <div className={"row justify-content-md-center"}>
                <div className={"col-sm-12"}>
                  <Button type="submit" className={"btn btn-primary btn-block"}>Register</Button>
                </div>
              </div>
            </form>
            <div className="text-center mt-4">
              <p>Already a registered user? | <Link to="/login"> Login here</Link></p>
            </div>
            {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Registration;
