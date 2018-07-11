import React from 'react';
import { Button } from 'mdbreact';
import { Link } from 'react-router-dom'
import ProductButtons from './ProductButtons/ProductButtons';

const productList = () => {
    return (
        <div className="text-left">
            <h1>Event Products</h1>
            <table className="table mt-4 text-center">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Event Registration</td>
                        <td>Registration Description</td>
                        <td>$25</td>
                        <td><ProductButtons/></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Short-Sleeve T-Shirt</td>
                        <td>Product Description</td>
                        <td>$8</td>
                        <td><ProductButtons/></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Long-Sleeve T-Shirt</td>
                        <td>Product Description</td>
                        <td>$10</td>
                        <td><ProductButtons/></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Engraved Thermos</td>
                        <td>Product Description</td>
                        <td>$28</td>
                        <td><ProductButtons/></td>
                    </tr>
                </tbody>
            </table>
            <Link to="/admin/createProduct"><Button className="btn-secondary btn-sm">Add Product</Button></Link>
        </div>
    );
}
export default productList;