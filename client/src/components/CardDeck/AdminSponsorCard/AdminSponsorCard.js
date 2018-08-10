import React from 'react';
import { Row, Col, Button } from 'mdbreact';

// sponsorCard componenet needs to receive a sponsor as props to display dynamic content
const adminSponsorCard = (props) => {
    return (
        <Col md="3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNoxrbGskEssZvSXSZ_APFXlLHdS_9Sq6lvaTA9KrJZk2UhtAgiQ" alt="Sponsor" />
            <h3>Sponsor Name</h3>
            {/* Add functionality to delete the sponsor */}
            <Row>
                <Col md="6">
                    <Button className="btn-sm">Update</Button>
                </Col>
                <Col md="6">
                    <Button className="btn-sm">Delete</Button>
                </Col>
            </Row>
        </Col>
    )
}
export default adminSponsorCard;