import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

// Update to show what content we want for our footer
const footer = () => {
    return (
        <Footer color="stylish-color-dark" className="font-small pt-4 fixed">
            <Container fluid className="text-center text-md-left">
                <Row className="d-flex align-items-center">
                    <Col md="8" lg="8">
                        <p className="text-center text-md-left grey-text">&copy; 2018 Copyright: <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"> Hooked </a></p>
                    </Col>
                    <Col md="4" lg="4" className="ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
}
export default footer;