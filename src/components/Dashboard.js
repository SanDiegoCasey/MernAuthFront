import React, { Component } from 'react';
import PolicySection from './PolicySection';
import ContactsResultContainer from './ContactsResultContainer';

class Dashboard extends Component {

    constructor() {
        super();
        const username = localStorage.getItem('username');
        // const userImage = localStorage.getItem('userImage');
        const userId = localStorage.getItem('userId');


        this.state = {
          user: username,
          userID: userId
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
                        <h1>Welcome back {this.state.user},</h1>
                        <div className="profilePhoto" >
                          <div className="photo" style={ { backgroundImage: `url(${this.state.userIMG})` } }></div>
                        edit photo
                        </div>

                </header>
                {/*<PolicySection/>
                <ContactsResultContainer/>*/}
            </main>
        </div>
       )
   }
}


export default Dashboard;
