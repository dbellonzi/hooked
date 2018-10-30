import React, { Component } from 'react';
import { Row, Col, Button } from 'mdbreact';
// import { Link } from 'react-router-dom';
import Form from '../../Form/Form';
import axios from 'axios'
// Edit code to prepopulate fields with values if updating

// ADD CHECKBOX FOR MULTIDAY EVENTS FOR START/END DATE OR JUST DATE

class CreateEvent extends Component {
    state = {
        showFormSuccess: false,
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        // still need add event photo  and map photo
    }
  handletitleChange = event => { this.setState({ title: event.target.value }) }
  handledateChange = event => { this.setState({ date: event.target.value }) }
  handletimeChange = event => { this.setState({ time: event.target.value }) }
  handlelocationChange = event => { this.setState({ location: event.target.value }) }
  handledescriptionChange = event => { this.setState({ description: event.target.value }) }

    // This method is the one that should handle the form sumbits.
    // Typically, it will send the form data with an ajax call to the server. IN REACT, YOU USUALLY USE THE AXIOS LIB FOR THAT
    submit = () => {
        // Replace this code with a working request to the backend when ready
        // Currently it just displays a success message
        const event = {
            title: this.state.title,
            date: this.state.date,
            time: this.state.time,
            location: this.state.location,
            description: this.state.description,
          };
          axios.post('/api/events', event).then(res=>{
              console.log(res)
          })
        this.setState({ showFormSuccess: true });
        this.props.history.push('/admin')
        // setTimeout(() => { this.setState({ showFormSuccess: false }); }, 5000)
    }

    _renderSuccessMessage() {
        return (
            <div className={"alert alert-success mt-4"} role="alert">
                <p>Form was successfully validated and is ready to be submitted</p>
            </div>
        )
    }

    handleDateChange = (event) => {
        // Code to validate for future date input
    }
    handleEndDateChange = (event) => {
        // Code to toggle the end date input
    }
    render() {
        return (
            <React.Fragment>
                <h1>Create Event</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        <Form submit={this.submit} method="POST" action="/api/events">
                            {/* Figure out what validations we need for event names */}
                            {/* Event Name Validations: required, unique (call to check for uniqueness on change), length*/}
                            <div className="form-group">
                                <label htmlFor="eventName">Event Name</label>
                                <input
                                    id="eventName"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    name="title"
                                    placeholder="Enter Event Name"
                                    minLength={6}
                                    onChange={this.handletitleChange}
                                />
                                <small>Event names need to be unique. For annual events, please include the event year.</small>
                                <div className="invalid-feedback" />
                            </div>
                            {/* Event Date Validations: required, custom validation for date in future */}
                            <div className="form-group">
                                <label htmlFor="eventDate">Event Date</label>
                                <input
                                    id="eventDate"
                                    name="eventDate"
                                    className="form-control"
                                    required={true}
                                    type="date"
                                    // onChange={(event) => this.handleDateChange(event)}
                                    onChange={this.handledateChange}
                                />
                                <div className="invalid-feedback" />
                            </div>
                            {/* Event Time Validations: required */}
                            <div className="form-group">
                                <label htmlFor="eventTime">Event Start Time</label>
                                <input
                                    id="eventStartTime"
                                    name="eventStartTime"
                                    className="form-control"
                                    required={true}
                                    type="time"
                                    onChange={this.handletimeChange}
                                />
                                <div className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="eventAddress">Event Address</label>
                                <input
                                    id="eventAddress"
                                    name="location"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    placeholder="Enter Event Address"
                                    minLength={10}
                                    onChange = {this.handlelocationChange}
                                />
                                <div className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDescription">Event Description</label>
                                <textarea
                                    id="eventDescription"
                                    name="description"
                                    className="form-control"
                                    required={true}
                                    rows="3"
                                    placeholder="Enter Event Description"
                                    onChange = {this.handledescriptionChange}
                                    minLength={50}
                                    maxLength={1000}></textarea>
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
                                <small>Accepted filetypes: png, jpeg</small>
                                <div className="invalid-feedback" />
                            </div>

                            <div className={"row justify-content-md-center"}>
                                {/* <Col>
                                    <Button type={"submit"} className="btn-block">Preview Event</Button>
                                </Col> */}
                                <Col>
                                    <Button type="submit" onClick={this.submit} className="btn-block">Create Event</Button>
                                </Col>
                            </div>

                        </Form>
                        {this.state.showFormSuccess ? this._renderSuccessMessage() : null}
                    </Col>
                </Row>
            </React.Fragment>
        );
    }

}

export default CreateEvent;