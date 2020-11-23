import actionTypes from '../actions/actionTypes';

const initialState = {profileUrls: []}

const profileReducers = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOAD_PROFILE_WEBS:
        return {
          ...state,
          profileUrls: action.payload
        };
        case actionTypes.DELETE_PROFILE_WEBS:
          return {
            ...state,
            profileUrls: state.profileUrls.filter(url => url.id !== action.payload),
          };
      default:
        return state;
    }
  }

  export default profileReducers