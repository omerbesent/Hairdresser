import { GET_LOGIN } from '../../actions/actionTypes';
import initialState from '../initialState';

const loginReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                login: action.payload
            };
        default:
            return state;
    }
}
export default loginReducers;