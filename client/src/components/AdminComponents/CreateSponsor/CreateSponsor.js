import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
import Form from '../../Form/Form';
// Edit code to prepopulate fields with values if updating

class CreateSponsor extends Component {
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
                <h1>Add Sponsor</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        <Form submit={this.submit} className="grey-text">
                            {/* Figure out what validations we need for sponsor names */}
                            <div className="form-group">
                                <label htmlFor="sponsorName">Sponsor Name</label>
                                <input
                                    id="sponsorName"
                                    name="sponsorName"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    placeholder="Enter Sponsor Name"
                                    minLength={3}
                                // pattern="(?=.*[a-z]).{2,}" (Determine if we want to limit to only letters)
                                />
                                <div className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sponsorLink">Sponsor Link</label>
                                <input
                                    id="sponsorLink"
                                    name="sponsorLink"
                                    required={true}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Sponsor Link"
                                    pattern="https?://.+" />
                                <small className="form-text text-muted">Include either http:// or https:// in the url</small>
                                <div className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sponsorLogo" className="btn btn-default btn-file">Upload Sponsor Logo
                                <input
                                        id="sponsorLogo"
                                        name="sponsorLogo"
                                        required={true}
                                        type="file"
                                        accept="image/png, image/jpeg"
                                    />
                                </label>
                                <div className="invalid-feedback" />
                                <img id="previewLogo" src="#" alt="Your Sponsor Logo" />
                            </div>
                            {/* ADD CHECKBOX FOR SPONSOR LEVEL */}
                            <div className={"row justify-content-md-center"}>
                                <Col>
                                    <Button type={"submit"} className="btn-block">Create Sponsor</Button>
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

export default CreateSponsor;