import types from './types';

const initialState = {
    tasks: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS_FULFILLED.type:
            return { ...state, tasks: action.payload };
        default:
            return state;
    }
};
