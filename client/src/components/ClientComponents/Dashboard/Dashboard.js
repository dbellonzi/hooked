import React from 'react';
import FeaturedEvent from '../FeaturedEvent/FeaturedEvent';
import CardDeck from '../../CardDeck/CardDeck';
import EventCard from '../../CardDeck/EventCard/EventCard';

// Need to change this component to be more dynamic and to send the correct props to its child components

const dashboard = () => {
    return (
        <div>
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
        </div>
    );
}
export default dashboard;