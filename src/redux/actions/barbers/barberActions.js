import {GET_BARBERS_SUCCESS} from '../actionTypes';
import axios from 'axios';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

export function getBarbersSuccess(barberList) {
  return {
    type: GET_BARBERS_SUCCESS,
    payload: barberList,
  };
}

export function getBarbers() {
  return async dispatch => {
    try {
      const apiReq = await axios
        .get(API_URL + 'barbers/getall')
        .then(response => response)
        .catch(error => error.response);
      await dispatch(getBarbersSuccess(apiReq));
      return apiReq;
    } catch (error) {
      console.error(error);
    }
  };
}
