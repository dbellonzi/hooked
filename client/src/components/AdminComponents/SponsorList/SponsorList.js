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
            <Link to="/admin/createSponsor"><Button className="btn btn-primary">Add Sponsor</Button></Link>
        </Container>
    );
}
export default sponsorList;