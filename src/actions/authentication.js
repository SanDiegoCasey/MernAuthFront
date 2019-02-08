import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';
import { API_BASE_URL } from '../config';

export const registerUser = (user, history) => dispatch => {
    axios.post(`${API_BASE_URL}/api/users/register`, user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user, history) => dispatch => {
    axios.post(`${API_BASE_URL}/api/users/login`, user)
            .then(res => {
              console.log(res);
                const { name } = res.data;
                const { token } = res.data;
                const { userId } = res.data;
                const {img } = res.data;
                localStorage.setItem('name', name)
                localStorage.setItem('token', token);
                localStorage.setItem('id', userId);
                localStorage.setItem('img', img);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('userImage');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}
