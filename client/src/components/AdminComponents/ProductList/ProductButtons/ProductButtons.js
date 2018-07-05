import React from 'react';
import { Button } from 'mdbreact';
import { Link } from 'react-router-dom';

const productButtons = () => {
    return (
        <div>
            <Link to="/admin/updateProduct"><Button className="btn-primary btn-sm">Edit</Button></Link>
            {/* Add logic to handle button click for delete and maybe show a popup for verification of deletion? */}
            <Button className="btn-primary btn-sm">Delete</Button>
        </div>
    )
}
export default productButtons;