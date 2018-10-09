import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import Form from '../../Form/Form';
import * as actions from '../../../store/actions/index';

class Registration extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    user_name: '',
    password: '',
    submitted: false
  }

  handlefNameChange = event => { this.setState({ first_name: event.target.value }) }
  handlelNameChange = event => { this.setState({ last_name: event.target.value }) }
  handleemailChange = event => { this.setState({ email: event.target.value }) }
  handlepasswordChange = event => { this.setState({ password: event.target.value }) }
  handleusernameChange = event => { this.setState({ user_name: event.target.value }) }
  handlephoneChange = event => { this.setState({ phone_number: event.target.value }) }

  submit = () => {
    this.setState({ submitted: true })
    const user = {
      fName: this.state.first_name,
      lName: this.state.last_name,
      email: this.state.email,
      username: this.state.user_name,
      phone: this.state.phone_number,
      password: this.state.password,
    };
    console.log('fName: ', user.fName)
    //this is the action from the auth reducer REFERENCE MAPDISPATCHTOPROPS
    this.props.submitToBack(user)
    if (!this.props.error && this.state.submitted) {
      this.props.history.push('/')
    }
  }

  _renderErrorMessage() {
    return (
      <div className={"alert alert-danger mt-4"} role="alert">
        <p>{this.props.error}</p>
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
            {this.props.error ? this._renderErrorMessage() : null}
            <Form submit={this.submit}>
              <div className="form-group">
                <label htmlFor="fName">First Name</label>
                <input
                  id="fName"
                  className="form-control"
                  type="text"
                  name="fName"
                  placeholder="Enter First Name"
                  onChange={this.handlefNameChange}
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
                  onChange={this.handlelNameChange}
                  placeholder="Enter Last Name"
                  required={true}
                  minLength={2}
                  pattern="(?=.*[a-z]).{2,}"
                />
                <div className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="form-control"
                  required={true}
                  type="text"
                  name="username"
                  onChange={this.handleusernameChange}
                  placeholder="Enter Username"
                />
                <div className="invalid-feedback" />
              </div>
              <div className={"form-group"}>
                <label htmlFor={"email"}>Email</label>
                <input
                  id={"email"}
                  className={"form-control"}
                  required={true}
                  name="email"
                  onChange={this.handleemailChange}
                  type={"email"}
                  placeholder={"Enter Email"}
                />
                <div className="invalid-feedback" />
              </div>
              <div className={"form-group"}>
                <label htmlFor={"phone"}>Phone Number</label>
                <input
                  id={"phone"}
                  className={"form-control"}
                  required={true}
                  name="phone"
                  onChange={this.handlephoneChange}
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
                  onChange={this.handlepasswordChange}
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
                  <Button className={"btn btn-primary btn-block"} onClick={this.submit} type="submit" >Register</Button>
                </div>
              </div>
            </Form>
            <div className="text-center mt-4">
              <p>Already a registered user? | <Link to="/login"> Login here</Link></p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitToBack: (user) => dispatch(actions.auth(user, false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);