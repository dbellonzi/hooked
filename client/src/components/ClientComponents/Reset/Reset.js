import React, { Component } from 'react';
import { Row, Col, Button } from 'mdbreact';
import { connect } from 'react-redux';
import axios from 'axios'

class Reset extends Component {

    state = { 
        submitted:false, 
        user: {},
        error: {},
        password: '',
        cpassword: ''

    }
    
    componentDidMount() {
        const params = this.props.match.params.token
        axios.get(`/user/${params}`)
            .then(res => {
                console.log(res);
                this.setState({ user: res.data })
            })
            .catch(error => this.setState({error}));
    }

    handlepasswordChange = event => { this.setState({ password: event.target.value }) }
    handlecpasswordChange = event => { this.setState({ cpassword: event.target.value }) }

    submit =()=>{
        const token = this.props.match.params.token
        console.log('submitted token', token)
        this.setState({ submitted: true })
        const user = {
            password: this.state.password,
            cpassword: this.state.cpassword
        };
        axios.post(`/reset/${token}`, user).then(res=>{
            console.log(res)
        })
        this.props.history.push('/login')
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
                {/* {this.props.error ? this._renderErrorMessage() : null} */}
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input
                            id="password"
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="updated password"
                            onChange={this.handlepasswordChange}
                            required={true}
                            minLength={2}
                        />
                        <div className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Confirm Password</label>
                        <input
                            id="cpassword"
                            className="form-control"
                            type="password"
                            name="cpassword"
                            placeholder="confirm password"
                            onChange={this.handlecpasswordChange}
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
 
export default Reset;