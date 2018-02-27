import types from './types';
import alertTypes from '../../../common/alert/types';
import api from '../../../api';

function callApi() {
    return (dispatch) => {
        dispatch({ ...types.CALL_API, payload: api.get() });
    };
}

function createAlert() {
    return (dispatch) => {
        dispatch({
            ...alertTypes.SHOW_ALERT,
            payload: {
                behavior: 'success',
                header: 'success',
                body: 'success',
            },
        });
    };
}


const actions = {
    callApi,
    createAlert,
};

export { actions as default };
