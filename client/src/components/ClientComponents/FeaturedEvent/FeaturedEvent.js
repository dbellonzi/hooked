import React from 'react';

import { Row, Col } from 'mdbreact';
import { Link } from 'react-router-dom';

// featuredEvent component needs to receive a single event as props to use for dynamic content
const featuredEvent = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" alt="Placeholder"/>
            <br />
            <Row>
                <Col sm="4" className="text-left">
                    <p>Event Date: </p>
                    <p>Event Time: </p>
                    <p>Event Address: </p>
                </Col>
                <Col sm="8">
                    <h3>Event Description</h3>
                    {/* <p>{props.event.description}</p> */}
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