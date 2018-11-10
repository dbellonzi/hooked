import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import Form from '../../Form/Form';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = event => { this.setState({ email: event.target.value }) }
    handlePasswordChange = event => { this.setState({ password: event.target.value }) }

    _renderErrorMessage() {
        return (
          <div className={"alert alert-danger mt-4 alert-dismissible"} role="alert">
            <a class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <p>{this.props.error}</p>
          </div>
        )
      }

    render() {
        let userData = {
            email: this.state.email,
            password: this.state.password,
        };
        return (
            <React.Fragment>
                <h1>Sign In</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        {this.props.error ? this._renderErrorMessage() : null}
                        <Form data={userData} isLogin={true}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    name="email"
                                    onChange={this.handleEmailChange}
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
                                    minLength={8}
                                    pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                                    onChange={this.handlePasswordChange}
                                />
                                <div className="invalid-feedback" />
                            </div>

                            <div className={"row justify-content-md-center"}>
                                <div className={"col-sm-12"}>
                                    <Button className={"btn btn-primary btn-block"} onClick={this.submit} type="submit" >Login</Button>
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

export default connect(mapStateToProps)(Login);