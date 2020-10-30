import actionTypes from '../actions/actionTypes';

const loadStatusReducer = (state = {status: null, isLoading: false}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_STATUS:
            return action.payload;
        default:
            return state;
    }
}

export default loadStatusReducer;