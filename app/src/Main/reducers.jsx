import { combineReducers } from 'redux';
import homeStore from './scenes/Home/reducer';
import tasksStore from './scenes/Tasks/reducer';
import taskStore from './scenes/Task/reducer';

export default combineReducers({
    homeStore,
    tasksStore,
    taskStore,
});
