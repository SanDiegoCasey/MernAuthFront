import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, ITEMS_LOADING } from '../actions/types';

const initialState = {
  items: [],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
      case GET_CONTACTS:
        return {
          ...state,
          items: action.payload,
          loading: false
        }
      case DELETE_CONTACT:
        return {
            ...state,
            items: state.items.filter(contact => contact._id !== action.payload)
        }
      case ADD_CONTACT:
        return {
          ...state,
          items: [action.payload, ...state.items]
        }
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        }
      default:
        return state;
  }
}
