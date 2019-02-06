import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
          <ul className="">
            <Link to="#" className="guest-menu-link" onClick={this.onLogout.bind(this)}>
              <img src={user.avatar} alt={user.name} title={user.name}
                className="rounded-circle"
                style={{ width: '25px', marginRight: '5px'}} />
                logoutUser
            </Link>
          </ul>
        )
        const guestLinks = (
          <div className="guest-menu">
            <span><Link className="guest-menu-link" to="/register">Sign Up</Link></span>
            <span><Link className="guest-menu-link" to="/login">Sign In</Link></span>
          </div>
        )
        return(
              <nav className="dashboard-nav" role="navigation">
                  <div className="parent">
                      <div className="left-nav"><Link to="/dashboard">Home</Link></div>
                      <div className="center-nav"><Link to="/"><img src="../SureLifeDataLogo-White-300w.png" alt="SureLifeData Logo"/></Link></div>
                      <div className="">
                        {isAuthenticated ? authLinks : guestLinks}
                      </div>
                  </div>
              </nav>
        )
    }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
