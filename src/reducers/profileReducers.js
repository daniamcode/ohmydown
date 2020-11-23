import actionTypes from '../actions/actionTypes';

const initialState = {}

const profileReducers = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOAD_PROFILE_WEBS:
        return {
          ...state,
          loadProfileUrls: action.payload
        };
        case actionTypes.DELETE_PROFILE_WEBS:
          return {
            ...state,
            deleteProfileUrls: action.payload
          };
      default:
        return state;
    }
  }

  export default profileReducers