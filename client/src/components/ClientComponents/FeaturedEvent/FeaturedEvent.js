import React from 'react';

import { Row, Col } from 'mdbreact';
import { Link } from 'react-router-dom';

// featuredEvent component needs to receive a single event as props to use for dynamic content
const featuredEvent = (props) => {
    console.log("From FeaturedEvent.js", props)
    return (
        <React.Fragment>
            <div className="container">
            <img src="http://thelostanchovy.com/wp-content/uploads/2017/08/Big-Sur-Coast-1.jpg" alt="Placeholder" className="img-thumbnail"/>
            </div>
            <br />
            <Row >
                {/* <Col sm="3" className="text-left">
                    <p>Event Date: Saturday, August 28, 2019 </p>
                    <p>Event Time: 8:00 a.m - 3p.m </p>
                    <p>Event Location: Albion River Campground </p>
                </Col> */}
                <Col sm="12">
                    <h3 className="text-center">Event Description</h3>
                    <p>{props.event.description}</p>
                </Col>
            </Row>
            <Link to="/event">
                <button className="btn btn-warning mx-5"> Participant List</button>
            </Link>
            <Link to="/event">
                <button className="btn btn-success mx-5"> Register Here</button>
            </Link>
            {/* <Link to="/event">
                <button className="btn btn-primary mx-5"> Event Page </button>
            </Link> */}
            <Link to={`/event/${props.event.id}`}><button className="btn btn-primary">Event Page</button> </Link>
        </React.Fragment>
    );
}
export default featuredEvent;