import React from 'react';
import { Col } from 'mdbreact';

// sponsorCard componenet needs to receive a sponsor as props to display dynamic content
const sponsorCard = (props) => {
    return (
        <Col md="3">
        {/* Remember to wrap the image in an a tag to link to the sponsor */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNoxrbGskEssZvSXSZ_APFXlLHdS_9Sq6lvaTA9KrJZk2UhtAgiQ" alt="Sponsor" />
        </Col>
    )

}
export default sponsorCard;