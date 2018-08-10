import React from 'react';
import { Button } from 'mdbreact';
import { Link } from 'react-router-dom';


// productButtons will receive the product as props in order to bind it with the correct product
// Add delete functionality to the delete button
const productButtons = (props) => {
    return (
        <React.Fragment>
            <Link to="/admin/updateProduct"><Button className="btn-primary btn-sm">Edit</Button></Link>
            {/* Add logic to handle button click for delete and maybe show a popup for verification of deletion? */}
            <Button className="btn-primary btn-sm">Delete</Button>
        </React.Fragment>
    )
}
export default productButtons;