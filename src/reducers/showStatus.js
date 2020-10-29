import actionTypes from '../actions/actionTypes';

const showStatusReducer = (state = false, action) => {
    switch(action.type) {
        case actionTypes.SHOW_STATUS:
            return action.payload;
        default:
            return state;
    }
}

export default showStatusReducer;