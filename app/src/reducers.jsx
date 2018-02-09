import { combineReducers } from 'redux';
import mainStore from './Main/reducers';
import commonStore from './common/reducers';

export default combineReducers({
    mainStore,
    commonStore,
});
