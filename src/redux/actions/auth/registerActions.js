import { GET_REGISTER_SUCCESS } from '../actionTypes';
import axios from 'axios';

export function getRegisterSuccess(register1) {
    return {
        type: GET_REGISTER_SUCCESS,
        payload: register1,
    };
}

export function getRegister(email, password, firstName, lastName, phoneNumber) {
    return async (dispatch) => {
        try {
            const apiReq = await axios.post('http://api.omerbesent.com.tr/api/auth/register',
                {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber
                }, {
                'Content-Type': 'application/json'
            }).then(response => response)
                .catch(error => error.response);
            await dispatch(getRegisterSuccess(apiReq));
            return apiReq;
        } catch (error) {
            console.error(error);
        }
    };
}