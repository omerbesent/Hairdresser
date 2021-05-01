import { GET_LOGIN } from '../actionTypes';
import axios from 'axios';

export function getLoginSuccess(login1) {
    return {
        type: GET_LOGIN,
        payload: login1,
    };
}

export function getLogin(email, password) {
    return async (dispatch) => {
        try {
            const apiReq = await axios.post('http://api.omerbesent.com.tr/api/auth/login',
                {
                    email: email,
                    password: password
                }, {
                'Content-Type': 'application/json'
            }).then(response => response)
                .catch(error => error.response);
            await dispatch(getLoginSuccess(apiReq));
            return apiReq;
        } catch (error) {
            console.error(error);
        }
    };
}