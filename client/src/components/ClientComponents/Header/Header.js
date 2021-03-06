import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'mdbreact';


const header = (props) => {
    let userURL=`/user/${props.id}`;
    return (
        <Navbar dark color="stylish-color-dark" expand="lg" sticky="top" className="mb-5">
            <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
                <div className="navbar-nav nav-item mr-auto" data-target=".navbar-collapse.show" data-toggle="collapse">
                    <Link to="/" className="nav-link">Home</Link>
                    {props.isAdmin ?
                        <Link to="/admin" className="nav-link">Admin</Link> : null
                    }
                </div>
                {props.loggedIn ?
                    <div className="navbar-nav nav-item" data-target=".navbar-collapse.show" data-toggle="collapse">
                        <Link className="nav-link" to={userURL}>Welcome {props.firstName}</Link>
                        <Link className="nav-link" to="/logout"> Logout</Link>
                    </div> :
                    <div className="navbar-nav nav-item" data-target=".navbar-collapse.show" data-toggle="collapse">
                        <Link className="nav-link" to="/login"> Login</Link>
                        <Link className="nav-link" to="/register"> Register</Link>
                    </div>
                }
            </div>
        </Navbar>
    );
}

export default header;
