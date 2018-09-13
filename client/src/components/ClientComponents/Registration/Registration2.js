import React, { Component } from 'react';
import axios from 'axios'

class Registration2 extends Component {
    state = { 
        first_name:'',
        last_name: '',
        email: '',
        phone_number: '',
        user_name: '',
        password: ''
    }    
    
        handlefNameChange = event => {this.setState({ first_name: event.target.value })}
        handlelNameChange = event => {this.setState({ last_name: event.target.value })}
        handleemailChange = event => {this.setState({ email: event.target.value })}
        handlepasswordChange = event => {this.setState({ password: event.target.value })}
        handleusernameChange = event => {this.setState({ user_name: event.target.value })}
        handlephoneChange = event => {this.setState({ phone_number: event.target.value })}

          // handleChange = event => {
    //     this.setState({ fName: event.target.value });
    //     this.setState({ lName: event.target.value });
    //     this.setState({ email: event.target.value });
    //     this.setState({ username: event.target.value });
    //     this.setState({ phone: event.target.value });
    //     this.setState({ password: event.target.value });
    //   }
    
    handleSubmit = event => {
        console.log('this is test')
        event.preventDefault();
    
        const user = {
          fName:this.state.first_name,
          lName:this.state.last_name,
          email:this.state.email,
          username: this.state.user_name,
          phone: this.state.phone_number, 
          password: this.state.password
        };
        console.log(user)

        axios.post('/api/users', user)
          .then(res => {
            console.log(res);
            console.log(res.data)
          })
        } 
        
    render() {
        console.log(this.state) 
        return (  
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="fName" className="form-control" onChange={this.handlefNameChange}/>
                    </div>
                    <div className="form-group">
                    <label>last Name</label>
                    <input type="text" name="lName" className="form-control" onChange={this.handlelNameChange}/>
                    </div>
                    <div className="form-group">
                    <label>email</label>
                    <input type="email" name="email" className="form-control" onChange={this.handleemailChange}/>
                    </div>
                    <div className="form-group">
                    <label>username</label>
                    <input type="text" name="username" className="form-control" onChange={this.handleusernameChange}/>
                    </div>
                    <div className="form-group">
                    <label>phone</label>
                    <input type="text" name="phone" className="form-control" onChange={this.handlephoneChange}/>
                    </div>
                    <div className="form-group">
                    <label>password</label>
                    <input type="password" name="password" className="form-control" onChange={this.handlepasswordChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Registration2;