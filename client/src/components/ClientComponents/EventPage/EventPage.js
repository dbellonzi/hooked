import React, { Component } from 'react';
import axios from 'axios';

import EventCarousel from '../EventCarousel/EventCarousel';
import EventSponsors from './EventSponsors/EventSponsors';
import EventMap from './EventMap/EventMap';
import { Row, Col } from 'mdbreact';
import { Link } from 'react-router-dom';

// Maybe add a check to see if user is logged in and a participant to change link from "Register Here" to "" 
// Maybe add a feature to show if limited spaces are available for the event
class EventPage extends Component {
    state = {
        event: {}
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`/api/event/${params.eventId}`)
            .then(res => {
                console.log(res);
                this.setState({ event: res.data })
            })
            .catch(error => this.setState({error}));
    }

    render() {
        return (
            <React.Fragment>
               <h1 className="text-center">{this.state.event.title}</h1> 
               <img className="d-block w-100 img-fluid" height="500px" src="http://thelostanchovy.com/wp-content/uploads/2017/08/Big-Sur-Coast-1.jpg"/>
                <br />
                <Row>
                    <Col sm="4" className="text-left">
                        <p>Event Date: {this.state.event.date}</p>
                        <p>Event Time: {this.state.event.time}</p>
                        <p>Event Address: {this.state.event.location}</p>
                    </Col>
                    <Col sm="8">
                        <h3>Event Description</h3>
                        <p>{this.state.event.description}</p>
                    </Col>
                </Row>
                <Link to="/event">
                    <button className="btn btn-warning mx-5"> Participant List</button>
                </Link>
                <Link to="/event">
                    <button className="btn btn-success mx-5"> Register Here</button>
                </Link>
                <hr />
                <EventMap />
                <hr />
                <EventSponsors />
            </React.Fragment>
        );
    }
}
export default EventPage;