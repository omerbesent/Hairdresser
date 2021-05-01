import { GET_REGISTER_SUCCESS } from '../../actions/actionTypes';
import initialState from '../initialState';

const registerReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGISTER_SUCCESS:
            return {
                ...state,
                register: action.payload
            };
        default:
            return state;
    }
}
export default registerReducers;