import React from 'react';
import { Container, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import CardDeck from '../../CardDeck/CardDeck';
import SponsorCard from '../../CardDeck/SponsorCard/SponsorCard';

const sponsorList = () => {
    return (
        <Container>
            <CardDeck>
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
            </CardDeck>
            <hr/>
            <Link to="/admin/createSponsor"><button className="btn btn-primary">Add Sponsor</button></Link>
        </Container>
    );
}
export default sponsorList;