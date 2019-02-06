import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contactActions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

class ContactModal extends Component {
  state = {
    modal: false,
    firstname: '',
    lastname: '',
    username: '',
    img: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChangeFirstName = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeLastName = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeUsername = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeImg = (e) => {
    this.setState(!e.target.value ? {[e.target.name]:'http://www.caseywhitcher.com/caseywhitcher/projects/familiarfaces/images/mj01.jpg'} : {[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      img: this.state.img
    }

    console.log(newContact);

    this.props.addContact(newContact);

    this.toggle();

    }

    render(){
      return(
        <div>
          <Button
            style={{marginBottom: '.5rem'}}
            onClick={this.toggle}
            className="policyadd"
            >Add New Contact
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>
              Add A New Contact
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>

                <FormGroup>
                  <Label for="firstname">First Name</Label>
                  <Input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Add name of new contact"
                    onChange={this.onChangeFirstName}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="lastname">Last Name</Label>
                  <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Add name of new contact"
                    onChange={this.onChangeLastName}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="username">eMail</Label>
                  <Input
                    type="text"
                    name="username"
                    id="email"
                    placeholder="Add email to contact"
                    onChange={this.onChangeUsername}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="img">Hyperlink to Image (Optional)</Label>
                  <Input
                    type="text"
                    name="img"
                    id="img"
                    placeholder="example: http://www.mysite.com/mypicture.jpg"
                    onChange={this.onChangeImg}
                    />
                </FormGroup>
                <Button
                  className="policyadd"
                  style={{marginTop: '1rem'}}
                  block
                  >Add Contact
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>

      )
    }
}

const mapStateToProps = state => ({
  contact: state.contact
})


export default connect(mapStateToProps, {addContact})(ContactModal)
