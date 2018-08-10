import React from 'react';
import { Container, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import CardDeck from '../../CardDeck/CardDeck';
import AdminSponsorCard from '../../CardDeck/AdminSponsorCard/AdminSponsorCard';

// sponsorList component needs to receive the list of sponsors as props to dynamically display content
const sponsorList = (props) => {
    return (
        <React.Fragment>
            <CardDeck>
                <AdminSponsorCard />
                <AdminSponsorCard />
                <AdminSponsorCard />
                <AdminSponsorCard />
                <AdminSponsorCard />
                <AdminSponsorCard />
                <AdminSponsorCard />
                <AdminSponsorCard />
                <AdminSponsorCard />
            </CardDeck>
            <hr/>
            <Link to="/admin/createSponsor"><Button className="btn btn-primary">Add Sponsor</Button></Link>
        </React.Fragment>
    );
}
export default sponsorList;