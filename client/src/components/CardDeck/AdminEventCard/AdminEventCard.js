import React, { Component } from 'react';
import { Row, Button, Col, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
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
                                <Link to="/admin/product"><Button className="btn-sm btn-primary">Products</Button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/participant"><Button className="btn-sm btn-default">Participants</Button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/sponsor"><Button className="btn-sm btn-secondary">Sponsors</Button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/orders"><Button className="btn-sm btn-primary">Orders</Button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/event/edit"><Button className="btn-sm btn-default">Edit Event</Button> </Link>
                            </Col>
                            <Col md="4">
                            {/* Add functionality to handle the button click */}
                                <Button className="btn-sm btn-secondary">Delete Event</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}
export default AdminEventCard;