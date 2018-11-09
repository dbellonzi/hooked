import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeaturedEvent from '../FeaturedEvent/FeaturedEvent';
import CardDeck from '../../CardDeck/CardDeck';
import EventCard from '../../CardDeck/EventCard/EventCard';
import * as actions from '../../../store/actions/index';

// Instead of rotating through by data created, i think there needs to be an Admin option to make which event will the featured event. 

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchAllEvents();
        // this.props.authCheckState();
    }

    render() {
        console.log("From Dashboard.js", this.props.events)
        let featuredEvent = <h3>No Featured Event</h3>
        let events = <h3>No Upcoming Events</h3>;
        if (this.props.events.length > 0) {
            events = (
                <CardDeck>
                    {this.props.events.map((event, index) => {
                        if(index !== 0){
                            return <EventCard key={event.id} event={event} />
                        }
                    })
                    }
                </CardDeck>
            )
            featuredEvent = <FeaturedEvent event={this.props.events[0]} />
        }
        return (
            <React.Fragment>
                {featuredEvent}
                < hr />
                <h1>Upcoming Events</h1>
                {events}
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
        // authCheckState: () => dispatch(actions. authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);