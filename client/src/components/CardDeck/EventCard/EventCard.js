import React from 'react';
import { Col, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';

// eventCard component needs to receive a single event as props to display dynamic content
const eventCard = (props) => {
    return (
        <Col md="4">
            <Card className="m-3">
                <CardImage className="img-fluid mt-3 p-0" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" />
                <CardBody>
                    <CardTitle className="text-center">Event Name</CardTitle>

                    {/* Remember to take a short substring from the event description */}
                    <CardText className="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    {/* Remember to make the link for the unique event id */}
                    <Link to="/event"><button className="btn btn-primary">View Event</button> </Link>
                </CardBody>
            </Card>
        </Col>
    )
}

export default eventCard;