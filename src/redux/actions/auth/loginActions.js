import { GET_LOGIN } from '../actionTypes';
import axios from 'axios';
import Config from "react-native-config";

const API_URL = Config.API_URL;

export function getLoginSuccess(login1) {
    return {
        type: GET_LOGIN,
        payload: login1,
    };
}

export function getLogin(email, password) {
    return async (dispatch) => {
        try {
            const apiReq = await axios.post(API_URL + 'auth/login',
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