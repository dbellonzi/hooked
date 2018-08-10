import React, { Component } from 'react';
import Header from '../components/ClientComponents/Header/Header';
import Footer from '../components/ClientComponents/Footer/Footer';
import Dashboard from '../components/ClientComponents/Dashboard/Dashboard';
import Login from '../components/ClientComponents/Login/Login';
import Registration from '../components/ClientComponents/Registration/Registration';
import UserProfile from '../components/ClientComponents/UserProfile/UserProfile';
import ResetPassword from '../components/ClientComponents/ResetPassword/ResetPassword';
import EventPage from '../components/ClientComponents/EventPage/EventPage';
import AdminDashboard from '../components/AdminComponents/Dashboard/Dashboard';
import AdminCreateEvent from '../components/AdminComponents/CreateEvent/CreateEvent';
import AdminCreateProduct from '../components/AdminComponents/CreateProduct/CreateProduct';
import AdminCreateSponsor from '../components/AdminComponents/CreateSponsor/CreateSponsor';
import AdminProductList from '../components/AdminComponents/ProductList/ProductList';
import AdminSponsorList from '../components/AdminComponents/SponsorList/SponsorList';
import AdminParticipantList from '../components/AdminComponents/ParticipantList/ParticipantList';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    loggedIn: false,
    isAdmin: false
  }

  // lifecycle methods below
  componentDidMount() {
    // fetch the data from the db here and trickle what we need to the child components as needed
  }

  // custom methods below
  logoutHandler = () => {
    this.setState({ loggedIn: false });
    this.setState({ isAdmin: false });
  }
  loginHandler = () => {
    // logic here to check if the user will have admin rights
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
        <Router>
          <React.Fragment>
            <img style={style} src="http://thelostanchovy.com/wp-content/uploads/2018/07/banner-1.jpg" alt="Fishing Rod Header" className="img-fluid" />
            <Header loggedIn={this.state.loggedIn} isAdmin={this.state.isAdmin} logout={this.logoutHandler} />
            <div className="px-5">
              <button className="btn btn-primary" onClick={this.toggleAdminHandler}>Toggle Admin Status</button>
              <button className="btn btn-primary" onClick={this.toggleLoggedInHandler}>Toggle LoggedIn Status</button>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/login' component={Login} />
                {/* Writing the route for login this way allows us to pass props */}
                <Route path='/login'
                  render={(props) => <Login {...props} login={this.loginHandler} />}
                />
                <Route path='/register' component={Registration} />
                <Route path='/resetPassword' component={ResetPassword} />
                <Route path='/event' component={EventPage} />
                <Route path='/user' component={UserProfile} />

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
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
