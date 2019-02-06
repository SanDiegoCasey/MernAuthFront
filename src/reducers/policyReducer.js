import { GET_POLICIES, ADD_POLICY, DELETE_POLICY, ITEMS_LOADING } from '../actions/types';

const initialState = {
  items:  [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POLICIES:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case DELETE_POLICY:
      return {
        ...state,
        items: state.items.filter(policy => policy._id !== action.payload)
      }
    case ADD_POLICY:
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
