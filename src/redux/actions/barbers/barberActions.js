import { GET_BARBERS_SUCCESS } from '../actionTypes';
import axios from 'axios';

export function getBarbersSuccess(barberList) {
    return {
        type: GET_BARBERS_SUCCESS,
        payload: barberList,
    };
}

export function getBarbers() {
    return async (dispatch) => {
        try {
            const apiReq = await axios.get('http://api.omerbesent.com.tr/api/barbers/getall')
                .then(res => res.data); 
            await dispatch(getBarbersSuccess(apiReq));
            return apiReq;
        } catch (error) {
            console.error(error);
        }
    };
}