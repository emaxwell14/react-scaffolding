import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import alertReducer from './alert/reducer';

export default combineReducers({
    routerReducer,
    alertReducer,
});
