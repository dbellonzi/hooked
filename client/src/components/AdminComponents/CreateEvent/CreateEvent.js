import React from 'react';
import { Container, Row, Col, Button, Input } from 'mdbreact';

// 

const createEvent = () => {
    return (
        <Container>
            <Row>
                <Col md="1" />
                <Col md="10">
                    <form>
                        <p className="h5 text-center mb-4">Create Event</p>
                        <div className="grey-text">
                            <Input label="Event Name" id="eventName "type="text" validate error="wrong" success="right" />
                            {/* figure out how to fix the styling issues */}
                            <Input label="Event Date"
                             id="eventDate" type="date" validate error="wrong" success="right" />
                             <Input label="Event Time"id="eventTime" type="time" validate error="wrong" success="right" />
                            <Input label="Event Address" id="eventAddress" type="text" validate error="wrong" success="right" />
                            <Input type="textarea" label="Event Description" id="eventDescription" validate error="wrong" success="right"/>
                            <Input type="textarea" label="Event Tournament Scoring" id="eventScoring" validate error="wrong" success="right"/>
                            {/* adjust styling issues */}
                            <Input type="file" lable="Event Image" id="eventImage" validate error="wrong" success="right"/>
                        </div>
                        <div className="text-center">
                            <Button className="btn-block">Create Event</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default createEvent;