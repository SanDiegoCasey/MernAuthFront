import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts, deleteContact, addContact, inviteUser } from '../actions/contactActions';
import PropTypes from 'prop-types';
import ContactModal from '../components/ContactModal.js';

class ContactsResultContainer extends Component {

  componentDidMount() {
    this.props.getContacts();
  }

  onDeleteClickContact = (id) => {
    this.props.deleteContact(id)
  }

  onInviteClick = (username) => {
    this.props.inviteUser(username)
  }

  render(){
    console.log(this);
    const { items } = this.props.contact;
    return(
      <section>
        <div className="contacts-container">
            <div className="contactstitle">My Contacts</div>
            <ContactModal/>
        </div>
        <div className="contacts-container-photos">
          {items.map(({_id, firstname, lastname, username, img}) => (
            <div className="contact" key={_id}>
                <div className="photo" style={{backgroundImage: `url(${img})`
              , backgroundSize: 'cover',
            overflow: 'hidden'}}></div>
                <div className="name">
                  <span className="name-span">{firstname}</span>
                  <span className="name-span">{lastname}</span>
                </div>
                <div className="name-email">{username}</div>
                <input type="button"
                  value="INVITE"
                  onClick={this.onInviteClick.bind(this,username)}
                  className="invitebutton"/>
                <input type="button"
                  value="DELETE"
                  onClick={this.onDeleteClickContact.bind(this,_id)}
                  className="deletebutton"/>

            </div>
          ))}
        </div>
      <hr/>
    </section>
    )
  }

}

ContactsResultContainer.propTypes = {
  getContacts: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  contact: state.contact
})

export default connect(mapStateToProps, { inviteUser, getContacts, deleteContact, addContact })(ContactsResultContainer);
