import React from 'react';
import { Container, Row, Col, Button, Input } from 'mdbreact';

// Edit code to prepopulate fields with values if updating

const createProduct = () => {
    return (
        <Container>
            <h1>Create Product</h1>
            <Row>
                <Col md="1" />
                <Col md="10 text-left">
                    <form className="grey-text">
                        <div class="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" class="form-control" id="productName" placeholder="Enter Product Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productDescription">Product Description</label>
                            <textarea className="form-control" id="productDescription" rows="3" placeholder="Enter Product Description"></textarea>
                        </div>
                        <div class="form-group">
                            <label htmlFor="productPrice">Product Price</label>
                            <input type="text" class="form-control" id="productPrice" placeholder="Enter Product Price" />
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
                        <div className="custom-file mb-3">
                            <label class="custom-file-label" htmlFor="productImage">Upload Product Image</label>
                            <input type="file" className="custom-file-input" id="productImage" accept="image/png, image/jpeg"/>
                        </div>
                        <div className="text-center mt-2">
                            <Button className="btn-block">Create Product</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
export default createProduct;