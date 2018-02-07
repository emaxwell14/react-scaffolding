import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mainStore from './Main/reducers';

export default combineReducers({
    mainStore,
    routerReducer,
});
