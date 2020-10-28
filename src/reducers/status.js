import actionTypes from '../actions/actionTypes';

const statusReducer = (state = {status: null, isLoading: true}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_STATUS:
            return action.payload;
        default:
            return state;
    }
}

export default statusReducer;