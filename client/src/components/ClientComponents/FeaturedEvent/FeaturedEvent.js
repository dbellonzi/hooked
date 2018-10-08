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
                    <p>Event Time: 8:00 a.m -3p.m </p>
                    <p>Event Location: Albion River Campground </p>
                </Col> */}
                <Col sm="12">
                    <h3 className="text-center">Event Description</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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