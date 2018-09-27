import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Header from '../components/ClientComponents/Header/Header';
import Footer from '../components/ClientComponents/Footer/Footer';
import Dashboard from '../components/ClientComponents/Dashboard/Dashboard';
import Login from '../components/ClientComponents/Login/Login';
import Registration from '../components/ClientComponents/Registration/Registration';
import Registration2 from '../components/ClientComponents/Registration/Registration2';
import UserProfile from '../components/ClientComponents/UserProfile/UserProfile';
import ResetPassword from '../components/ClientComponents/ResetPassword/ResetPassword';
import EventPage from '../components/ClientComponents/EventPage/EventPage';
import ParticipantList from '../components/ClientComponents/Participantslist/Participantslist';
import AdminDashboard from '../components/AdminComponents/Dashboard/Dashboard';
import AdminCreateEvent from '../components/AdminComponents/CreateEvent/CreateEvent';
import AdminCreateProduct from '../components/AdminComponents/CreateProduct/CreateProduct';
import AdminCreateSponsor from '../components/AdminComponents/CreateSponsor/CreateSponsor';
import AdminProductList from '../components/AdminComponents/ProductList/ProductList';
import AdminSponsorList from '../components/AdminComponents/SponsorList/SponsorList';
import AdminParticipantList from '../components/AdminComponents/ParticipantList/ParticipantList';

import * as actions from '../store/actions/index';

class App extends Component {
  state = {
    loggedIn: false,
    isAdmin: false,
    isSuper: false,
    userName: "",
    events: [],
    error: null,
  }

  componentDidMount() {
    this.props.fetchAllEvents();
    axios.get('/api/events/all')
      .then(result => this.setState({events: result.data}))
      .catch(error => this.setState({error}));
  }

  // custom methods below
  logoutHandler = () => {
    this.setState({ loggedIn: false });
    this.setState({ isAdmin: false });
  }
  loginHandler = (username) => {
    this.setState({ loggedIn: true });
    this.setState({ userName: username })
  }

  // toggle functions are only necessary for testing and will be removed for production
  toggleAdminHandler = () => {
    const admin = this.state.isAdmin;
    this.setState({ isAdmin: !admin })
  }
  toggleLoggedInHandler = () => {
    const log = this.state.loggedIn;
    this.setState({ loggedIn: !log })
  }

  render() {
    const style = {
      width: '100%',
    }
    return (
      <div className="text-center">
            <img style={style} src="http://thelostanchovy.com/wp-content/uploads/2018/07/banner-1.jpg" alt="Fishing Rod Header" className="img-fluid" />
            <Header loggedIn={this.state.loggedIn} isAdmin={this.state.isAdmin} logout={this.logoutHandler} userName={this.state.userName} />
            <div className="px-5">
              <button className="btn btn-primary" onClick={this.toggleAdminHandler}>Toggle Admin Status</button>
              <button className="btn btn-primary" onClick={this.toggleLoggedInHandler}>Toggle LoggedIn Status</button>
              <Switch>
                {/* Writing the route for login this way allows us to pass props */}
                <Route exact path='/'
                  render={(props) => <Dashboard {...props} events={this.state.events} />}
                />
                <Route exact path='/login'
                  render={(props) => <Login {...props} login={this.loginHandler} />}
                />
                <Route exact path='/register' component={Registration} />
                <Route exact path='/register2' component={Registration2} />
                <Route exact path='/resetPassword' component={ResetPassword} />
                <Route path='/user/:userId' component={UserProfile} />
                <Route path='/event/:eventId' component={EventPage} />
                <Route path ='/participants' component={ParticipantList}/>
                {/* Using the PrivateRoute component allows us to have protected routes based on admin status */}
                <PrivateRoute authed={this.state.isAdmin} path='/admin/createEvent' component={AdminCreateEvent} />
                <PrivateRoute authed={this.state.isAdmin} path='/admin/createProduct' component={AdminCreateProduct} />
                <PrivateRoute authed={this.state.isAdmin} path='/admin/createSponsor' component={AdminCreateSponsor} />
                <PrivateRoute authed={this.state.isAdmin} path='/admin/product' component={AdminProductList} />
                <PrivateRoute authed={this.state.isAdmin} path='/admin/sponsor' component={AdminSponsorList} />
                <PrivateRoute authed={this.state.isAdmin} path='/admin/participant' component={AdminParticipantList} />
                <PrivateRoute authed={this.state.isAdmin} path='/admin' component={AdminDashboard} />
              </Switch>
            </div>
            <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllEvents: () => dispatch(actions.fetchAllEvents()),
    // onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
