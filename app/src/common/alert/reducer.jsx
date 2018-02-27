import uuid from 'uuid/v4';
import { get } from 'lodash';
import types from './types';

const initialState = {
    alerts: [],
};

export default (state = initialState, action) => {
    if (action.type.includes('_REJECTED')) {
        const error = get(action, 'payload.response.data[0].error_code') ?
            action.payload.response.data[0].error_code : action.type;
        return {
            ...state,
            alerts: [...state.alerts, {
                id: uuid(),
                behavior: 'danger',
                header: 'SERVER_HEADER',
                body: error,
            }],
        };
    } else if (action.type === types.CLEAR_ALERT.type) {
        return { ...state, alerts: state.alerts.filter(alert => alert.id !== action.payload) };
    } else if (action.type === types.SHOW_ALERT.type) {
        return {
            ...state,
            alerts: [...state.alerts, {
                id: uuid(),
                behavior: action.payload.behavior,
                header: action.payload.header,
                body: action.payload.body,
            }],
        };
    }
    return state;
};
