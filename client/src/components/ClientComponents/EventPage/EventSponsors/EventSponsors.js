import React from 'react';
import CardDeck from '../../../CardDeck/CardDeck';
import SponsorCard from '../../../CardDeck/SponsorCard/SponsorCard';

// eventSponsors component needs to receive the sponsors in order to send each sponsor to the SponsorCard components 
const eventSponsors = (props) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}
export default eventSponsors;