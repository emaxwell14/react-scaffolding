import { combineReducers } from 'redux';
import homeStore from './scenes/Home/reducer';
import tasksStore from './scenes/Task/reducers';

export default combineReducers({
    homeStore,
    tasksStore,
});
