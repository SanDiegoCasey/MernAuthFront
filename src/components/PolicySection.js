import React, { Component } from 'react';
import PoliciesSectionTitle from './PoliciesSectionTitle';
import PolicyResultContainer from './PolicyResultContainer';



class PolicySection extends Component {



  render(){

      return(
        <section className="policies-section">
          <PoliciesSectionTitle/>
          <PolicyResultContainer/>
        </section>
    )
  }
}



export default PolicySection;
