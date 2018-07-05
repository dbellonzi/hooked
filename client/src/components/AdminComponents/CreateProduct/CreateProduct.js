import React from 'react';
import { Container, Row, Col, Button, Input } from 'mdbreact';

// considering moving from using mdbreact for forms to using basic bootstrap to style our own way

const createProduct = () => {
    return (
        <Container>
            <Row>
                <Col md="1" />
                <Col md="10">
                    <form>
                        <p className="h5 text-center mb-4">Create Product</p>
                        <div className="grey-text">
                            <Input label="Product Name" id="productName " type="text" validate error="wrong" success="right" />
                            <Input type="textarea" label="Product Description" id="productDescription" validate error="wrong" success="right" />
                            <Input type="text" label="Price" id="productPrice" validate error="wrong" success="right" />
                            <label htmlFor="productSize">Product Size</label>
                            <select id="productSize" className="ml-2">
                                <option value="one-size">One Size</option>
                                <option value="x-small">X-Small</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="x-large">X-Large</option>
                                <option value="2x-large">2X-Large</option>
                            </select>
                            <br/>
                            <label htmlFor="productImage">Product Image</label>
                            <input className="ml-2" type="file"
                                id="productImage"
                                accept="image/png, image/jpeg" />
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