import React, { Component } from 'react';
import { Col } from 'mdbreact';
class SponsorCard extends Component {
    render() {
        return (
            // This is just a static image and would need to have access to props for us to grab the image dynamically and need to add link to sponsor
            <Col md="3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNoxrbGskEssZvSXSZ_APFXlLHdS_9Sq6lvaTA9KrJZk2UhtAgiQ" alt="Sponsor" />
            </Col>
        )
    }
}
export default SponsorCard;