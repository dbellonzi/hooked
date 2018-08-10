import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'mdbreact';
import Form from '../../Form/Form';
// Edit code to prepopulate fields with values if updating

class CreateProduct extends Component {
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
            <React.Fragment>
                <h1>Create Product</h1>
                <Row>
                    <Col md="1" />
                    <Col md="10 text-left">
                        <Form submit={this.submit} className="grey-text">
                            {/* Figure out what validations we need for product names */}
                            <div className="form-group">
                                <label htmlFor="productName">Product Name</label>
                                <input
                                    id="productName"
                                    name="productName"
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    placeholder="Enter Product Name"
                                    minLength={3}
                                    maxLength={45}
                                />
                                <div className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="productDescription">Product Description</label>
                                <textarea
                                    id="productDescription"
                                    name="productDescription"
                                    className="form-control"
                                    required={true}
                                    rows="3"
                                    placeholder="Enter Product Description"
                                    minLength={3}
                                    maxLength={280}></textarea>
                                <div className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="productPrice">Product Price</label>
                                <input
                                    id="productPrice"
                                    name="productPrice"
                                    className="form-control"
                                    required={true}
                                    input type="text"
                                    pattern="\d+(\.\d{2})?"
                                />
                                <small className="form-text text-muted">Product price to be listed in USD.</small>
                                <div className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="salesTax">Sales Tax</label>
                                <input
                                    id="salesTax"
                                    name="salesTax"
                                    className="form-control"
                                    required={true}
                                    input type="text"
                                    pattern="\d+(\.\d{2})?"
                                />
                                <small className="form-text text-muted">Product price to be listed in USD.</small>
                                <div className="invalid-feedback" />
                            </div>

                            {/* Fix form inputs: label blocks file name*/}
                            <div className="custom-file mb-3">
                                <label className="custom-file-label" htmlFor="productImage">Upload Product Image</label>
                                <input
                                    id="productImage"
                                    name="productImage"
                                    required={true}
                                    className="custom-file-input"
                                    type="file"
                                    accept="image/png, image/jpeg" />
                                <div className="invalid-feedback" />
                            </div>
                            <div class="form-group">
                                <label for="productSize">Product Size</label>
                                <select class="form-control" id="productSize">
                                    <option value="one-size">One Size</option>
                                    <option value="x-small">X-Small</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="x-large">X-Large</option>
                                    <option value="2x-large">2X-Large</option>
                                </select>
                            </div>
                            <div className={"row justify-content-md-center"}>
                                <Col>
                                    <Button type={"submit"} className="btn-block">Create Product</Button>
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
export default CreateProduct;