import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/ClientComponents/Header/Header';
import Footer from '../components/ClientComponents/Footer/Footer';
import Dashboard from '../components/ClientComponents/Dashboard/Dashboard';
import Login from '../components/ClientComponents/Login/Login';
import Registration from '../components/ClientComponents/Registration/Registration';
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
import Reset from '../components/ClientComponents/Reset/Reset'

import * as actions from '../store/actions/index';

class App extends Component {
  render() {
    const style = {
      width: '100%',
    }
    let routes = (
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Registration} />
        <Route exact path='/resetPassword' component={ResetPassword} />
        <Route path='/reset/:token' component={Reset}/>
        <Route path='/user/:userId' component={UserProfile} />
        <Route path='/event/:eventId' component={EventPage} />
        <Route path='/participants' component={ParticipantList} />
        <Redirect to="/" />
      </Switch>
    )
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Registration} />
          <Route exact path='/resetPassword' component={ResetPassword} />
          <Route path='/user/:userId' component={UserProfile} />
          <Route path='/event/:eventId' component={EventPage} />
          <Route path='/participants' component={ParticipantList} />
          <Route path='/admin/createEvent' component={AdminCreateEvent} />
          <Route path='/admin/createProduct' component={AdminCreateProduct} />
          <Route path='/admin/createSponsor' component={AdminCreateSponsor} />
          <Route path='/admin/product' component={AdminProductList} />
          <Route path='/admin/sponsor' component={AdminSponsorList} />
          <Route path='/admin/participant' component={AdminParticipantList} />
          <Route path='/admin' component={AdminDashboard} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <div className="text-center">
        <img style={style} src="http://thelostanchovy.com/wp-content/uploads/2018/07/banner-1.jpg" alt="Fishing Rod Header" className="img-fluid" />
        <Header loggedIn={this.props.isAuthenticated} isAdmin={this.props.isAdmin} userName={this.props.userName} />
        <div className="px-1">
          {routes}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    userName: state.auth.userName,
    isAdmin: state.auth.isAdmin,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
