import React from 'react';
import CardDeck from '../../CardDeck/CardDeck';
import AdminEventCard from '../../CardDeck/AdminEventCard/AdminEventCard';
import { Link } from 'react-router-dom';

// As the Admin Dashboard component, we need to be able to pull the correct events to populate the CardDeck component as well as validate some user settings to allow access to this part of the site

const dashboard = () => {
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