import React from 'react';
import { Container, Row, Col, Button } from 'mdbreact';

// Edit code to prepopulate fields with values if updating

const CreateSponsor = () => {
    return (
        <Container>
            <h1>Add Sponsor</h1>
            <Row>
                <Col md="1" />
                <Col md="10 text-left">
                    <form>
                    <div className="form-group">
                            <label htmlFor="sponsorName">Sponsor Name</label>
                            <input type="text" class="form-control" id="sponsorName" placeholder="Enter Sponsor Name" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="sponsorLink">Sponsor Link</label>
                            <input type="text" class="form-control" id="sponsorLink" placeholder="Enter Sponsor Link" />
                        </div>
                        <div className="custom-file mb-3">
                            <label class="custom-file-label" htmlFor="sponsorImage">Upload Sponsor Logo</label>
                            <input type="file" className="custom-file-input" id="sponsorImage" accept="image/png, image/jpeg"/>
                        </div>
                        <div className="text-center mt-2">
                            <Button className="btn-block">Add Sponsor</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateSponsor;