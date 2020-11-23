import actionTypes from '../actions/actionTypes';

const loadStatusReducer = (state = {loadStatusResponse: {response: {}, isLoading: false, error: {}}}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_STATUS:
            return action.payload;
        default:
            return state;
    }
}

export default loadStatusReducer;