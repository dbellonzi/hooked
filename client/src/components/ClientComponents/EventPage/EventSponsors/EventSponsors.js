import React from 'react';
import CardDeck from '../../../CardDeck/CardDeck';
import SponsorCard from '../../../CardDeck/SponsorCard/SponsorCard';

const eventSponsors = () => {
    return (
        <div>
            <h3>Sponsors</h3>
            <CardDeck>
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
            </CardDeck>
        </div>
    );
}
export default eventSponsors;