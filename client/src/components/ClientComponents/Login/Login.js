import React, { Component } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
class Login extends Component {
    // Remember to add state here for the applicable fields
    render() {
        // Remember to add logic here to handle the form changes and for validations
        return (
            <Container>
                <Row>
                    <Col md="1" />
                    <Col md="10">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <Input label="Type your email" type="email" validate error="wrong" success="right" />
                                <Input label="Type your password" type="password" validate />
                            </div>
                            <div className="text-center">
                                <Button className="btn-block">Login</Button>
                            </div>
                            <br />
                            <p>Not a registered user? | <Link to="/register"> Register here</Link></p>
                            <p>Forgot password? | <Link to="/resetpassword"> Reset password</Link></p>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Login;