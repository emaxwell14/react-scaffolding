import types from './types';

const initialState = {
    task: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASK_FULFILLED.type:
            return { ...state, task: action.payload };
        case types.GET_TASK_REJECTED.type:
            return { ...state, task: initialState.task };
        default:
            return state;
    }
};
