import api from '../../../../../api';
import types from './types';

const getTask = id => dispatch => dispatch({ ...types.GET_TASK, payload: api.getTask(id) });

const actions = {
    getTask,
};

export { actions as default };
