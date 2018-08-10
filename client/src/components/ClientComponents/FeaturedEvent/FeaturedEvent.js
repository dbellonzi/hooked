import React from 'react';
import EventCarousel from '../EventCarousel/EventCarousel';
import { Row, Col } from 'mdbreact';
import { Link } from 'react-router-dom';


// featuredEvent component needs to receive a single event as props to use for dynamic content
const featuredEvent = (props) => {
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
                    <p>Event Description: Lorem ipsum dolor sit amet, vim ea case timeam scaevola, ne eum delectus postulant. Id nec debet convenire, in probatus senserit est. Te atqui conceptam vim, ei eum regione persius appareat. Mea mediocrem democritum te, qui dicat tincidunt ei. Vis at reque sonet commune, ridens nostrud ut his, est eu clita legimus. Putent scripta cum eu, autem praesent ne mea. </p>
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
        </React.Fragment>
    );
}
export default featuredEvent;