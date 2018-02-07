import { combineReducers } from 'redux';
import data from './reducer';
import taskStore from './scenes/Task/reducer';

export default combineReducers({
    data,
    taskStore,
});
