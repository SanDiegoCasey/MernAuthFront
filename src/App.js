import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './setAuthToken';
// import { setCurrentUser, logoutUser} from './actions/authentication';
import EditProfile from './components/EditProfile'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
// import Home from './components/Home'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <div>
          <Navbar />
          {/* <Route exact path="/" component={Home} /> */}
          <div className="">
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={ Dashboard} />
            <Route exact path="/register" component={ Register} />
            <Route exact path="/login" component={ Login }/>
            <Route path="/edit-profile/:id" component={ EditProfile }/>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
