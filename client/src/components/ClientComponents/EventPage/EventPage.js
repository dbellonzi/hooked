import React, { Component } from 'react';
import axios from 'axios';
import EventSponsors from './EventSponsors/EventSponsors';
import EventMap from './EventMap/EventMap';
import { Row, Col } from 'mdbreact';
import { Link } from 'react-router-dom';
import Moment from 'react-moment'

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
                this.setState({ event: res.data })
            })
            .catch(error => this.setState({error}));
    }

    render() {
        return (
            <React.Fragment>
               <h1 className="text-center">{this.state.event.title}</h1> 
               <img className="d-block w-100 img-fluid shadow" height="500px" src="http://thelostanchovy.com/wp-content/uploads/2017/08/Big-Sur-Coast-1.jpg"/>
                <br />
                <Row className="container-fluid">
                    <Col md="3" className="text-left">
                        <p><i class="fas fa-calendar-alt mr-2"></i>Event Date: <Moment format="MMMM Do YYYY">{this.state.event.date}</Moment></p>
                        <p><i class="fas fa-clock mr-2"></i>Event Time:{this.state.event.time}</p>
                        <p><i class="fas fa-map-marker-alt mr-2"></i>Event Location: {this.state.event.location}</p>
                    </Col>
                    <Col md="6">
                        <h3><i class="fas fa-clipboard-list mr-2"></i>Event Description</h3>
                        <p className="text-justify">{this.state.event.description}</p>
                    </Col>
                    <Col md="3">
                    <div>
                        <Link to="/participants">
                            <button className="btn btn-warning mx-5 rounded"> Participants List</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/event">
                            <button className="btn btn-danger mx-5 rounded"> Register Here</button>
                        </Link>
                    </div>
                    </Col>
                </Row>
                <hr />
                <EventMap />
                <hr />
                <EventSponsors />
            </React.Fragment>
        );
    }
}
export default EventPage;