import axios from 'axios';
import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, ITEMS_LOADING} from './types';
import { API_BASE_URL } from '../config'

export const getContacts = () => dispatch => {
  dispatch(setContactsLoading);
  axios
    .get(`${API_BASE_URL}/api/contacts/`)
    .then(res =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      }
    )
  )
};

export const addContact = contact => dispatch => {
  axios
    .post(`${API_BASE_URL}/api/contacts/`, contact)
    .then(res => dispatch({
      type: ADD_CONTACT,
      payload: res.data
    }))
  }

export const deleteContact = (id) => dispatch => {
  axios.delete(`${API_BASE_URL}/api/contacts/${id}`).then(res =>
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    }))
}

export const inviteUser = (username) => dispatch => {
  window.open(`mailto:${username}?subject=Invitation%20to%20SureLifeData&body=I just signed up for SureLifeData and I would like to share my life insurance policy information with you.  Please create an account at surelifedata.com`);
}

export const setContactsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
