import { createStore, combineReducers, applyMiddleware } from 'redux';
import barberListReducer from './barbers/barberListReducers';
import loginReducers from './auth/loginReducers';
import registerReducers from './auth/registerReducers';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
        barberList: barberListReducer,
        login: loginReducers,
        register: registerReducers,
        form: formReducer
    }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;