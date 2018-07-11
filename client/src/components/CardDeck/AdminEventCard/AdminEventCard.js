import React, { Component } from 'react';
import { Row, button, Col, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';
class AdminEventCard extends Component {

    // Need to change component to pull dynamic content (from props?)

    render() {

        return (
            <Col sm="6">
                <Card className="m-1">
                    <CardImage className="img-fluid mt-2 p-0" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                    <CardBody>
                        <CardTitle className="text-center">Event Name</CardTitle>
                        <CardText className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Row>
                            <Col md="4">
                                <Link to="/admin/product"><button className="btn p-1 m-1 btn-block btn-primary">Products</button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/participant"><button className="btn p-1 m-1 btn-block btn-default">Participants</button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/sponsor"><button className="btn p-1 m-1 btn-block btn-secondary">Sponsors</button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/orders"><button className="btn p-1 m-1 btn-block btn-primary">Orders</button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/event/edit"><button className="btn p-1 m-1 btn-block btn-default">Update</button> </Link>
                            </Col>
                            <Col md="4">
                            {/* Add functionality to handle the button click */}
                                <button className="btn p-1 m-1 btn-block btn-secondary">Delete</button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}
export default AdminEventCard;