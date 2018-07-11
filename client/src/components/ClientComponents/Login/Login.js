import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
class Login extends Component {
    // Remember to add state here for the applicable fields
    render() {
        // Remember to add logic here to handle the form changes and for validations
        return (
            <Container>
                <h1>Sign In</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        <form className="grey-text">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter Your Password" />
                            </div>
                                <Button className="btn-block">Login</Button>
                            <br />
                            <div className="text-center">
                            <p>Not a registered user? | <Link to="/register"> Register here</Link></p>
                            <p>Forgot password? | <Link to="/resetpassword"> Reset password</Link></p>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Login;