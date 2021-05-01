import { GET_BARBERS_SUCCESS } from '../../actions/actionTypes';
import initialState from '../initialState';

const barberListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BARBERS_SUCCESS:
            return {
                ...state,
                barbers: action.payload
            };
        default:
            return state;
    }
}
export default barberListReducer;