import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { Link } from 'react-router-dom';

// This is a functional component and does not have access to state. If this component needs access to state then it needs to be changed to a stateful component

// We still need to add logic into this component to handle validations and process input

class registration extends React.Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    
      };
    
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
    
      }
    
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["firstname"] = "";
            fields["lasttname"] = "";
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
      }
    
      validateForm() {
    
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        if(document.getElementById('fname').value.length<3){
          formIsValid = false;
          errors["firstname"] = "*Please enter a first name with at least 3 characters"
        }
    
        if(document.getElementById('lname').value.length<3){
          formIsValid = false;
          errors["lastname"] = "*Please enter a last name with at least 3 characters"
        }
        
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "*Please enter a username.";
        }
    
        // if (typeof fields["username"] !== "undefined") {
        //   if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        //     formIsValid = false;
        //     errors["username"] = "*Please enter alphabet characters only.";
        //   }
        // }
    
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
    
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
    
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }
    
        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
          }
        }
    
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
    
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Must contain 1 capital letter and numeric number.";
          }
        }
    
        this.setState({
          errors: errors
        });
        return formIsValid;
    
      }
    render() { 
        return (
            <Container>
            <Row>
                <Col md="1" />
                <Col md="10">
                    <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} action="/users" >
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">
                            <Input label="First Name" name="firstname" id="fname" type="text" validate error="wrong" success="right" value={this.state.fields.firstname} onChange={this.handleChange} />
                            <div className="errorMsg red-text">{this.state.errors.firstname}</div>
                            <Input label="Last Name"  name="lastname" id="lname" type="text" validate error="wrong" success="right" value={this.state.fields.lastname} onChange={this.handleChange} />
                            <div className="errorMsg red-text">{this.state.errors.lastname}</div>
                            <Input label="User Name" id="username" name="username" type="text" validate error="wrong" success="right" value={this.state.fields.username} onChange={this.handleChange} />
                            <div className="errorMsg red-text">{this.state.errors.username}</div>
                            <Input label="Email" id="email" type="email" name="emailid" validate error="wrong" success="right" value={this.state.fields.emailid} onChange={this.handleChange}  />
                            <div className="errorMsg red-text">{this.state.errors.emailid}</div>
                            <Input label="Phone Number" id="phoneNumber" name="mobileno" type="text" validate error="wrong" success="right" value={this.state.fields.mobileno} onChange={this.handleChange} />
                            <div className="errorMsg red-text">{this.state.errors.mobileno}</div>
                            <Input label="Password" id="pw" type="password" name="password" validate   value={this.state.fields.password} onChange={this.handleChange} />
                            <div className="errorMsg red-text">{this.state.errors.password}</div>
                            {/* <Input label="Confirm Password" id="confirmPW" type="password" validate /> */}
                        </div>
                        <div className="text-center">
                        {/* <input type="submit" className="btn-block btn-primary" value="Register"/> */}
                        <Button input type="submit" value="Register" className="btn-block">Register</Button>
                        </div>
                        <br />
                        <p>Already a registered user? | <Link to="/login"> Login here</Link></p>
                    </form>
                </Col>
            </Row>
        </Container>
          )
    }
}
 
export default registration;
