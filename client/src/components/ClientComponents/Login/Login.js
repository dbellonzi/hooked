import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import Form from '../../Form/Form';
import * as actions from '../../../store/actions/index';

// Login Component needs to be able to pull data from the database to validate an authorized user login.
// Currently, validations for this login component only check for valid form inputs

class Login extends Component {
    state = {
        email: '',
        password: '',
        submitted: false
    }

    handleemailChange = event => { this.setState({ email: event.target.value }) }
    handlepasswordChange = event => { this.setState({ password: event.target.value }) }

    submit = () => {
        this.setState({ submitted: true })
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.submitToBack(user)
        if (!this.props.error && this.state.submitted) {
            this.props.history.push('/')
        }
    }

    _renderErrorMessage() {
        return (
            <div className={"alert alert-success mt-4"} role="alert">
                <p>{this.props.error}</p>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <h1>Sign In</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        {this.props.error ? this._renderErrorMessage() : null}
                        <Form submit={this.submit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    name="email"
                                    onChange={this.handleemailChange}
                                    placeholder="Enter Email"
                                />
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
                                    minLength={6}
                                    pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                                    onChange={this.handlepasswordChange}
                                />
                                <div className="invalid-feedback" />
                            </div>

                            <div className={"row justify-content-md-center"}>
                                <div className={"col-sm-12"}>
                                    <Button onClick={this.submit} className={"btn btn-primary btn-block"}>Login</Button>
                                </div>
                            </div>
                        </Form>
                        
                        <div className="text-center mt-4">
                            <p>Not a registered user? | <Link to="/register"> Register here</Link></p>
                            <p>Forgot password? | <Link to="/resetpassword"> Reset password</Link></p>
                        </div>
                    </Col>
                </Row >
            </React.Fragment >
        );
    }
};

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitToBack: (user) => dispatch(actions.auth(user, true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);