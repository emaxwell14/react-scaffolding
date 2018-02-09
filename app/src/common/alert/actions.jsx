import types from './types';

function clearAlert(alert) {
    return (dispatch) => {
        dispatch({ ...types.CLEAR_ALERT, payload: alert });
    };
}

const actions = {
    clearAlert,
};

export { actions as default };
