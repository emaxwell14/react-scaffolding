import types from './types';
import api from '../../../api';

function callApi() {
    return (dispatch) => {
        dispatch({ ...types.CALL_API, payload: api.get() });
    };
}


const actions = {
    callApi,
};

export { actions as default };
