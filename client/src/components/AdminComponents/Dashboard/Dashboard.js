import React, { Component } from 'react';
import CardDeck from '../../CardDeck/CardDeck';
import AdminEventCard from '../../CardDeck/AdminEventCard/AdminEventCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import axios from 'axios'

// AdminDashboard will receive all events as props. We need to filter which events are available to the user based on access privilages to populate the card deck

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchAllEvents();
    }

    // deleteEvent = (id) => {
    //     console.log("delete event id",id)
    //     axios.delete(`/api/event/${id}`)
    //     // console.log('Delete Event Method Fired! id:', this.props.event.id)
    //     console.log('this is a test')
    //     this.props.fetchAllEvents();
    //     console.log('render method ran')
    // }

    render() {
        const deleteEvent = (id) => {
            console.log("delete event id", id)
            axios.delete(`/api/event/${id}`)
            // console.log('Delete Event Method Fired! id:', this.props.event.id)
            console.log('this is a test')
            this.props.fetchAllEvents();
            console.log('render method ran')
        }
        return (
            <React.Fragment className="text-left">
                <CardDeck>
                    {this.props.events.map((event) => {
                        return <AdminEventCard key={event.id} event={event} delete={deleteEvent} />
                    })
                    }
                </CardDeck>
                <hr />
                <Link to="/admin/createEvent"><button className="btn btn-primary text-left">Create Event</button></Link>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        events: state.event.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllEvents: () => dispatch(actions.fetchAllEvents()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

