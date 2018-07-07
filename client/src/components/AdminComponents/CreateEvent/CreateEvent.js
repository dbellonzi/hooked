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
                    <form className="grey-text">
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" className="form-control" id="eventName" placeholder="Enter Event Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDate">Event Date</label>
                            <input type="date" className="form-control" id="eventDate" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventTime">Event Time</label>
                            <input type="time" className="form-control" id="eventTime" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventAddress">Event Address</label>
                            <input type="text" className="form-control" id="eventAddress" placeholder="Enter Event Address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDescription">Event Description</label>
                            <textarea className="form-control" id="eventDescription" rows="3" placeholder="Enter Event Description"></textarea>
                        </div>
                        <div className="custom-file mb-3">
                            <label class="custom-file-label" htmlFor="eventImage">Upload Event Image</label>
                            <input type="file" className="custom-file-input" id="eventImage" accept="image/png, image/jpeg" />
                        </div>
                        <div className="custom-file mb-3">
                            <label class="custom-file-label" htmlFor="eventMap">Upload Event Map</label>
                            <input type="file" className="custom-file-input" id="eventMap" accept="image/png, image/jpeg" />
                        </div>
                        <br />
                        <Row>
                            <Col>
                                <Button className="btn-block">Preview Event</Button>
                            </Col>
                            <Col>
                                <Link to="/admin"><Button className="btn-block">Create Event</Button></Link>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default createEvent;