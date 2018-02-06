import types from './types';

const initialState = {
    apiResponse: 'Initial Value',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CALL_API_FULFILLED.type:
            return { ...state, apiResponse: action.payload.body(false) };
        case types.CALL_API_REJECTED.type:
            return { ...state, apiResponse: 'No Response!' };
        default:
            return state;
    }
};
