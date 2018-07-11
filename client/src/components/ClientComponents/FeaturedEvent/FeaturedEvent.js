import React from 'react';
import EventCarousel from '../EventCarousel/EventCarousel';
import { Row, Col } from 'mdbreact';
import {Link} from 'react-router-dom';

const featuredEvent = () => {
    return (
        <div className="container">
            <EventCarousel />
            <br />
            <Row>
                <Col sm="4">
                    <p>Event Date & Time</p>
                    <p>Event Location</p>
                    <p>Event Address</p>
                    <p>Event Blah Blah</p>
                </Col>
                <Col sm="8">
                    <p>Event Description: blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
                </Col>
            </Row>
            <Link to="/event">
                <button className="btn btn-warning mx-5"> Participant List</button>
            </Link>
            <Link to="/event">
                <button className="btn btn-success mx-5"> Register Here</button>
            </Link>
            <Link to="/event">
                <button className="btn btn-primary mx-5"> Event Page </button>
            </Link>
        </div>
    );
}
export default featuredEvent;