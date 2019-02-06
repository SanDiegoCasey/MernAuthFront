import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer'
import user from './user';
import policyReducer from './policyReducer';
import contactsReducer from './contactsReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  user,
  policy: policyReducer,
  contact: contactsReducer
})
