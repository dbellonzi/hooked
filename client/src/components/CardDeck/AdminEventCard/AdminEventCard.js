import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios'
class AdminEventCard extends Component {
    constructor(props) {
        super(props)
    }

    // Need to change component to pull dynamic content (from props?)
    // deleteEvent = (id) => {
    //     axios.delete(`/api/event/${this.props.event.id}`)
    //     console.log('Delete Event Method Fired! id:', this.props.event.id)
    //     console.log('this is a test')
    //   }

    render() {
        console.log('delete props', this.props.delete)
        return (
            <Col sm="4">
                <Card className="m-1">
                    <CardImage className="img-fluid img-cover" width="100%" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                    <CardBody>
                        <CardTitle className="text-center">{this.props.event.title}</CardTitle>
                        <CardText className="text-center">{this.props.event.description}.</CardText>
                        <Row>
                            <Col md="4">
                                <Link to="/admin/product"><button className="btn p-1 m-1 btn-sm btn-block btn-primary">Products</button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/participant"><button className="btn p-1 m-1 btn-sm btn-block btn-default">Participants</button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/sponsor"><button className="btn p-1 m-1 btn-sm btn-block btn-secondary">Sponsors</button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/orders"><button className="btn p-1 m-1 btn-sm btn-block btn-primary">Orders</button> </Link>
                            </Col>
                            <Col md="4">
                                <Link to="/admin/event/edit"><button className="btn p-1 m-1 btn-sm btn-block btn-default">Update</button> </Link>
                            </Col>
                            <Col md="4">
                                {/* Add functionality to handle the button click */}
                                <button className="btn p-1 m-1 btn-sm btn-block btn-secondary" onClick={this.props.delete}>Delete</button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}
export default AdminEventCard;