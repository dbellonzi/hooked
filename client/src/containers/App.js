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
import AdminProductList from '../components/AdminComponents/ProductList/ProductList';
import AdminParticipantList from '../components/AdminComponents/ParticipantList/ParticipantList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'mdbreact';
class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <div>
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
                <Route path='/admin/product' component ={AdminProductList} />
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
