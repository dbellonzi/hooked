import React from 'react';
import EventCarousel from '../EventCarousel/EventCarousel';
import EventSponsors from './EventSponsors/EventSponsors';
import EventMap from './EventMap/EventMap';
import { Container, Row, Col } from 'mdbreact';
import { Link } from 'react-router-dom';

// All content still needs to be changed to dynamic content
// Maybe add a check to see if user is logged in and a participant to change link from "Register Here" to "" 
// Maybe add a feature to show if limited spaces are available for the event
const eventPage = () => {
    return (
        <React.Fragment>
            <EventCarousel />
            <br />
            <Row>
                <Col sm="4" className="text-left">
                    <p>Event Date: </p>
                    <p>Event Time: </p>
                    <p>Event Location: </p>
                    <p>Event Address: </p>
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
            <hr/>
            <EventMap/>
            <hr/>
            <EventSponsors/>
        </React.Fragment>
    );
}
export default eventPage;