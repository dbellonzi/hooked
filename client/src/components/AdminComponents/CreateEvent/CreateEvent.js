import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
// import { Link } from 'react-router-dom';
import Form from '../../Form/Form';
// Edit code to prepopulate fields with values if updating

class CreateEvent extends Component {
    state = {
        showFormSuccess: false,
    }

    // This method is the one that should handle the form sumbits.
    // Typically, it will send the form data with an ajax call to the server. IN REACT, YOU USUALLY USE THE AXIOS LIB FOR THAT
    submit = () => {
        // Replace this code with a working request to the backend when ready
        // Currently it just displays a success message
        this.setState({ showFormSuccess: true });
        setTimeout(() => { this.setState({ showFormSuccess: false }); }, 5000)
    }

    _renderSuccessMessage() {
        return (
            <div className={"alert alert-success mt-4"} role="alert">
                <p>Form was successfully validated and is ready to be submitted</p>
            </div>
        )
    }
    render() {
        return (
            <Container>
                <h1>Create Event</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">

                        <Form submit={this.submit}>
                            {/* Figure out what validations we need for event names */}
                            <div className="form-group">
                                <label htmlFor="eventName">Event Name</label>
                                <input
                                    id="eventName"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    name="eventName"
                                    placeholder="Enter Event Name"
                                    minLength={2}
                                    pattern="(?=.*[a-z]).{2,}"
                                />
                                <div className="invalid-feedback" />
                            </div>
                            {/* custom validation for date in future */}
                            <div className="form-group">
                                <label htmlFor="eventDate">Event Date</label>
                                <input
                                    id="eventDate"
                                    name="eventDate"
                                    className="form-control"
                                    required={true}
                                    type="date"
                                />
                                <div className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="eventTime">Event Time</label>
                                <input
                                    id="eventTime"
                                    name="eventTime"
                                    className="form-control"
                                    required={true}
                                    type="time"
                                />
                                <div className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="eventAddress">Event Address</label>
                                <input
                                    id="eventAddress"
                                    name="eventAddress"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    placeholder="Enter Event Address"
                                />
                                <div className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDescription">Event Description</label>
                                <textarea
                                    id="eventDescription"
                                    name="eventDescription"
                                    className="form-control"
                                    required={true}
                                    rows="3"
                                    placeholder="Enter Event Description"></textarea>
                                <div className="invalid-feedback" />
                            </div>
                            {/* Fix form inputs: label blocks file name*/}
                            <div className="custom-file mb-3">
                                <label className="custom-file-label" htmlFor="eventImage">Upload Event Image</label>
                                <input
                                    id="eventImage"
                                    name="eventImage"
                                    required={true}
                                    className="custom-file-input"
                                    type="file"
                                    accept="image/png, image/jpeg" />
                                <div className="invalid-feedback" />
                            </div>
                            <div className="custom-file mb-3">
                                <label className="custom-file-label" htmlFor="eventMap">Upload Event Map</label>
                                <input
                                    id="eventMap"
                                    name="eventMap"
                                    required={true}
                                    className="custom-file-input"
                                    type="file"
                                    accept="image/png, image/jpeg" />
                                <div className="invalid-feedback" />
                            </div>

                            <div className={"row justify-content-md-center"}>
                                <Col>
                                    <Button type={"submit"} className="btn-block">Preview Event</Button>
                                </Col>
                                <Col>
                                    <Button type={"submit"} className="btn-block">Create Event</Button>
                                </Col>
                            </div>

                        </Form>
                        {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CreateEvent;