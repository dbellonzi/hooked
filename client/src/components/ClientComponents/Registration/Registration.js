import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { Link } from 'react-router-dom';

// This is a functional component and does not have access to state. If this component needs access to state then it needs to be changed to a stateful component

// We still need to add logic into this component to handle validations and process input

const registration = () => {
    return (
        <Container>
            <Row>
                <Col md="1" />
                <Col md="10">
                    <form>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">
                            <Input label="First Name" id="firstName "type="text" validate error="wrong" success="right" />
                            <Input label="Last Name" id="lastName" type="text" validate error="wrong" success="right" />
                            <Input label="Email" id="email" type="email" validate error="wrong" success="right" />
                            <Input label="Confirm Email" id="confirmEmail" type="email" validate error="wrong" success="right" />
                            <Input label="Phone Number" id="phoneNumber" type="text" validate error="wrong" success="right" />
                            <Input label="Password" id="pw" type="password" validate />
                            <Input label="Confirm Password" id="confirmPW" type="password" validate />
                        </div>
                        <div className="text-center">
                            <Button className="btn-block">Register</Button>
                        </div>
                        <br />
                        <p>Already a registered user? | <Link to="/login"> Login here</Link></p>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default registration;