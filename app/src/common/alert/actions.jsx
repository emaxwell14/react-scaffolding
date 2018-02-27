import types from './types';

function clearAlert(alertId) {
    return (dispatch) => {
        dispatch({ ...types.CLEAR_ALERT, payload: alertId });
    };
}

const actions = {
    clearAlert,
};

export { actions as default };
