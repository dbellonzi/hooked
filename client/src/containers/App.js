import React, { Component } from 'react';
import './App.css';
import Header from '../components/ClientComponents/Header/Header';
import Footer from '../components/ClientComponents/Footer/Footer';
import Dashboard from '../components/ClientComponents/Dashboard/Dashboard';
import Login from '../components/ClientComponents/Login/Login';
import Registration from '../components/ClientComponents/Registration/Registration';
import ResetPassword from '../components/ClientComponents/ResetPassword/ResetPassword';
import EventPage from '../components/ClientComponents/EventPage/EventPage';
import AdminDashboard from '../components/AdminComponents/Dashboard/Dashboard';
import AdminCreateEvent from '../components/AdminComponents/CreateEvent/CreateEvent';
import AdminCreateProduct from '../components/AdminComponents/CreateProduct/CreateProduct';
import AdminCreateSponsor from '../components/AdminComponents/CreateSponsor/CreateSponsor';
import AdminProductList from '../components/AdminComponents/ProductList/ProductList';
import AdminSponsorList from '../components/AdminComponents/SponsorList/SponsorList';
import AdminParticipantList from '../components/AdminComponents/ParticipantList/ParticipantList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'mdbreact';
class App extends Component {
  render() {
    const style={
      width:'100%',
    }
    return (
      <div className="App">
        <Router>
          <div>
            {/* Optional header image here. The navbar will stick to the top when we scroll past the image. */}
            <img style={style} src="http://thelostanchovy.com/wp-content/uploads/2018/07/banner.jpg" alt="Fishing Rod Header" className="img-fluid"/>
            <Header />
            <Container>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Registration} />
                <Route path='/resetPassword' component={ResetPassword} />
                <Route path='/event' component={EventPage} />
                <Route path='/admin/createEvent' component={AdminCreateEvent} />
                <Route path='/admin/createProduct' component ={AdminCreateProduct} />
                <Route path='/admin/createSponsor' component ={AdminCreateSponsor} />
                <Route path='/admin/product' component ={AdminProductList} />
                <Route path='/admin/sponsor' component ={AdminSponsorList} />
                <Route path='/admin/participant' component ={AdminParticipantList} />
                <Route path='/admin' component={AdminDashboard} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
