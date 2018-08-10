import React, { Component } from 'react';
import FeaturedEvent from '../FeaturedEvent/FeaturedEvent';
import CardDeck from '../../CardDeck/CardDeck';
import EventCard from '../../CardDeck/EventCard/EventCard';

// Need to pull data from db to populate FeaturedEvent and CardDeck

class Dashboard extends Component {

    render () {
        return (
            <React.Fragment>
                <FeaturedEvent />
                <hr/>
                <h1>Upcoming Events</h1>
                <CardDeck>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </CardDeck>
            </React.Fragment>
        );
    }
}
export default Dashboard;