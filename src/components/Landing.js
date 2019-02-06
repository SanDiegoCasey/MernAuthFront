import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
   render(){
       return (
        <div className="content-container">
            <div className="landing-hero">
                <div className="landing-tagline">
                    <h2 className="h2-landing">
                        Be sure they find your policies when they need them most.
                    </h2>
                </div>
            </div>
            <div className="get-started-desc">
                <div className="description">
                    SureLifeData.com is a voluntary searchable nationwide database of life and disability insurance policies.
                    <br/><br/>When tragedy strikes, it can be very difficult for loved ones to find or even know about existing
                    policies that you may already have in place.
                    <br/><br/>Rest easy with your data secure on our servers,  connect with your family
                    so that they can find any policies you have quickly and easily.
                </div>
            </div>
            <div className="get-started">
                <div className="started-button">
                    <Link to="/register">Get Started</Link>
                </div>
            </div>
            {/*<div className="search-button-div">
                <div className="search-button">
                    <Link to="/search">Search User Database</Link>
                </div>
            </div>*/}
        </div>
       )
   }
}


export default Landing;
