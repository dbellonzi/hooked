import React from 'react';
import CardDeck from '../../CardDeck/CardDeck';
import AdminEventCard from '../../CardDeck/AdminEventCard/AdminEventCard';
import { Link } from 'react-router-dom';

// AdminDashboard will receive all events as props. We need to filter which events are available to the user based on access privilages to populate the card deck

const dashboard = (props) => {
    return (
        <div className="text-left">
            <CardDeck>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
                <AdminEventCard/>
            </CardDeck>
            <hr/>
            <Link to="/admin/createEvent"><button className="btn btn-primary">Create Event</button></Link>
        </div>
    )
}
export default dashboard;