import types from './types';

const initialState = {
    tasks: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS_FULFILLED.type:
            return { ...state, tasks: action.payload };
        case types.GET_TASKS_REJECTED.type:
            return { ...state, tasks: initialState.tasks };
        default:
            return state;
    }
};
