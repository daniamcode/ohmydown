import actionTypes from '../actions/actionTypes';

const deleteProfileWebsReducer = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.DELETE_PROFILE_WEBS:
            return action.payload;
        default:
            return state;
    }
}

export default deleteProfileWebsReducer;