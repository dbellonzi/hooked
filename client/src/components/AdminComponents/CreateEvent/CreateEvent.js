import React from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
import { Link } from 'react-router-dom';

// Edit code to prepopulate fields with values if updating

const createEvent = () => {
    return (
        <Container>
            <h1>Create Event</h1>
            <Row>
                <Col md="1" />
                <Col md="10 text-left">
                    <form className="grey-text" method="post" action="/api/events">
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" className="form-control" id="eventName" placeholder="Enter Event Name" name ="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDate">Event Date</label>
                            <input type="date" className="form-control" id="eventDate" name ="date"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventTime">Event Time</label>
                            <input type="time" className="form-control" id="eventTime" name ="time"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventAddress">Event Address</label>
                            <input type="text" className="form-control" id="eventAddress" placeholder="Enter Event Address" name ="location"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDescription">Event Description</label>
                            <textarea className="form-control" id="eventDescription" rows="3" placeholder="Enter Event Description"name ="description"></textarea>
                        </div>
                        <div className="custom-file mb-3">
                            <label class="custom-file-label" htmlFor="eventImage">Upload Event Image</label>
                            <input type="file" className="custom-file-input" id="eventImage" accept="image/png, image/jpeg" name ="event_photo"/>
                        </div>
                        <div className="custom-file mb-3">
                            <label class="custom-file-label" htmlFor="eventMap">Upload Event Map</label>
                            <input type="file" className="custom-file-input" id="eventMap" accept="image/png, image/jpeg" name ="map_photo"/>
                        </div>
                        <br />
                        <Row>
                            <Col>
                                <Button className="btn-block">Preview Event</Button>
                            </Col>
                            <Col>
                                <Button className="btn-block" type="submit">Create Event</Button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default createEvent;