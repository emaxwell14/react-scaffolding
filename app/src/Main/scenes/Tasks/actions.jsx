import api from '../../../api';
import types from './types';

// const getTasks = () => dispatch => dispatch({ ...types.GET_TASKS, payload: api.getTasks() });

function getTasks() {
    return (dispatch) => {
        dispatch({ ...types.GET_TASKS, payload: api.getTasks() });
    };
}


const actions = {
    getTasks,
};

export { actions as default };
