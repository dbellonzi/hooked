import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import Form from '../../Form/Form';
// Login Component needs to be able to pull data from the database to validate an authorized user login.
// Currently, validations for this login component only check for valid form inputs

class Login extends Component {
    state = {
        showFormSuccess: false,
        touched: {
            email: false,
            password: false
        }
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

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    render() {
        return (
            <Container>
                <h1>Sign In</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        <form method="POST" action="/login">
                            <div className={"form-group"}>
                                <label htmlFor={"email"}>Email</label>
                                <input
                                    // id={"email"}
                                    className={"form-control"}
                                    required={true}
                                    name="username"
                                    type={"text"}
                                    placeholder={"Enter username"}
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
                                />
                                <div className="invalid-feedback" />
                            </div>
                            <div className={"row justify-content-md-center"}>
                                <div className={"col-sm-12"}>
                                    <Button type="submit" className={"btn btn-primary btn-block"}>Login</Button>
                                </div>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <p>Not a registered user? | <Link to="/register"> Register here</Link></p>
                            <p>Forgot password? | <Link to="/resetpassword"> Reset password</Link></p>
                        </div>
                        {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
                    </Col>
                </Row >
            </Container >
        );
    }
};

export default Login;