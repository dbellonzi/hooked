import React, { Component } from 'react';
import FeaturedEvent from '../FeaturedEvent/FeaturedEvent';
import CardDeck from '../../CardDeck/CardDeck';
import EventCard from '../../CardDeck/EventCard/EventCard';

// Need to pull data from db to populate FeaturedEvent
// Instead of rotating through by data created, i think there needs to be an Admin option to make which event will the featured event. 

class Dashboard extends Component {
    render () {

        return (
            <React.Fragment>
                <FeaturedEvent event={this.props.events[0]}/>
                <hr/>
                <h1>Upcoming Events</h1>
                <CardDeck>
                    { this.props.events.map((event, index) => {
                        if(index !== 0){
                            return <EventCard event={event}/>
                        }
                    })
                    }
                </CardDeck>
            </React.Fragment>
        );
    }
}
export default Dashboard;