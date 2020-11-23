import actionTypes from '../actions/actionTypes';

const loadProfileWebsReducer = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_PROFILE_WEBS:
            return action.payload;
        default:
            return state;
    }
}

export default loadProfileWebsReducer;