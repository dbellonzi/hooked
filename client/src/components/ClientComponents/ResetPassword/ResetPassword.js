// import React from 'react';
import React, { Component } from 'react';
import { Row, Col, Button } from 'mdbreact';
import { connect } from 'react-redux';
import axios from 'axios'

class resetPassword extends Component {
    state = {
        validate: false,
        submitted: false,
        email: '',
    }
    handleemailChange = event => { this.setState({ email: event.target.value }) }

    submit = () => {
        this.setState({ submitted: true })
        const user = {
            email: this.state.email,
        };
        axios.post('/resetpassword', user).then(res=>{
            console.log('From ResetPassword.js email: ', user.email)
            console.log(res)
        })
        this.props.history.push('/')
    }

    _renderErrorMessage() {
        return (
          <div className={"alert alert-danger mt-4 alert-dismissible"} role="alert">
          <a class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <p>{this.props.error}</p>
          </div>
        )
      }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Reset Password</h1>
                <Row>
                <Col md="1" />
                <Col md="10 text-left">
                {/* Should we wrap this in a FORM class?? */}
                {this.props.error ? this._renderErrorMessage() : null}
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Enter Valid Email"
                            onChange={this.handleemailChange}
                            required={true}
                            minLength={2}
                        />
                        <div className="invalid-feedback" />
                    </div>
                    <div className={"row justify-content-md-center"}>
                        <div className={"col-sm-12"}>
                            <Button className={"btn btn-primary btn-block"} onClick={this.submit} type="submit" >Reset Password</Button>
                        </div>
                    </div> 
                </form>
            </Col>
            </Row>
        </React.Fragment>
        );
    }
}

export default resetPassword;

// const resetPassword = () => {
//     return(
//         <React.Fragment>
//             <h1>Reset Password</h1>

//         </React.Fragment>
//     )
// }
// export default resetPassword;