import types from './types';
import api from '../../../api';

function callApi() {
    return (dispatch) => {
        api.get().then((payload) => {
            dispatch({ ...types.CALL_API, payload });
        });
    };
}


const actions = {
    callApi,
};

export { actions as default };
