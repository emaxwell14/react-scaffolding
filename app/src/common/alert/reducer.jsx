import types from './types';

const initialState = {
    alerts: [],
};

export default (state = initialState, action) => {
    if (action.type.includes('_REJECTED')) {
        // TODO get error code from payload if exists
        return { ...state, alerts: [...state.alerts, action.type] };
    } else if (action.type === types.CLEAR_ALERT.type) {
        return { ...state, alerts: state.alerts.filter(alert => alert !== action.payload) };
    }
    return state;
};
