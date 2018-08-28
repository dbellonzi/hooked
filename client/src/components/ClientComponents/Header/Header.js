import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'mdbreact';


// Need to fix the toggle button. It currently does not togggle when collapsed.

const header = (props) => {
    return (
        <Navbar dark color="stylish-color-dark" expand="lg" sticky="top" className="mb-5">
            <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
                <div className="navbar-nav nav-item mr-auto">
                    <Link to="/" className="nav-link ">Home</Link>
                    <Link to="/about" className="nav-link">Link</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    {props.isAdmin ?
                        <Link to="/admin" className="nav-link">Admin</Link> : null
                    }
                </div>
                {props.loggedIn ?
                    <div className="navbar-nav nav-item">
                        <Link className="nav-link" to="/user">{props.userName}</Link>
                        <Link onClick={props.logout}  className="nav-link" to="/"> Logout</Link>
                    </div> :
                    <div className="navbar-nav nav-item">
                        <Link className="nav-link" to="/login"> Login</Link>
                        <Link className="nav-link" to="/register"> Register</Link>
                    </div>
                }
            </div>
        </Navbar>
    );
}
export default header;