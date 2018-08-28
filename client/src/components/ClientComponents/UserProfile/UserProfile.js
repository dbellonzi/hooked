import React from 'react';
import { Row, Col } from 'mdbreact';

const userProfile = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col md="4" className="text-center">
                    <h2>Shiro Copycat</h2>
                    <img className="m-2 img-thumbnail" src="https://rennlist.com/forums/customavatars/avatar170231_3.gif" alt="User Avatar"/>
                </Col>
                <Col md="8" className="mt-5">
                <div className="text-left">
                    <p>Name: Keith Nguyen</p>
                    <p>Email: Keithnguyen@hooked.com</p>
                    <p>Username: Admin2018</p>
                    <p>Phone Number: 408-555-9998</p>
                </div>
                    <button className="btn btn-danger float-right">Order History</button>
                </Col>
            </Row>

            <Row className="mt-4 bg-light p-3 rounded m-2">
                <Row className="mb-2">
                    <Col md="4">
                    <img className="img-thumbnail img-fluid" src="http://thelostanchovy.com/wp-content/uploads/2017/08/Big-Sur-Coast-1.jpg"    alt="Event Image"/>
                    </Col>

                    <Col md="8">
                    <h2 className="text-center">Upcoming Events</h2>
                    <p>Event Description</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <button className="btn btn-danger float-right">Remove Event</button>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                    <img className="img-thumbnail img-fluid" src="http://thelostanchovy.com/wp-content/uploads/2017/08/Big-Sur-Coast-1.jpg"    alt="Event Image"/>
                    </Col>

                    <Col md="8">
                    <p>Event Description</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <button className="btn btn-danger float-right">Remove Event</button>
                    </Col>
                </Row>
            </Row>
        </React.Fragment>
    );
}
export default userProfile;