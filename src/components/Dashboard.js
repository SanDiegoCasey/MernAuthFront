import React, { Component } from 'react';
import PolicySection from './PolicySection';
import ContactsResultContainer from './ContactsResultContainer';
import { Link } from 'react-router-dom'

class Dashboard extends Component {

    constructor() {
        super();
        const username = localStorage.getItem('name');
        const userImage = localStorage.getItem('img');
        const userId = localStorage.getItem('id');


        this.state = {
          user: username,
          userID: userId,
          userIMG: userImage
        };
      }

   render(){

     var authTokenhas = localStorage.getItem('token');
     if (!authTokenhas) {
        window.location = '/login';
      }
       return (
        <div className="content-container">
            <main role="main">
                <header role="banner" className="dash-header">
                        <h1>Welcome back <span className="username-dashboard">{this.state.user}</span>,</h1>
                        <div className="profilePhoto" >
                          <div className="photo" style={ { backgroundImage: `url(${this.state.userIMG})` } }></div>
                          <Link to={`/edit-profile/${this.state.userID}`}>edit profile</Link>
                        </div>

                </header>
                <PolicySection/>
                <ContactsResultContainer/>
            </main>
        </div>
       )
   }
}


export default Dashboard;
