import actionTypes from '../actions/actionTypes';

const profileReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case actionTypes.LOAD_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.ADD_PROFILE_WEB:
      return {
        ...state,
        profileUrls: [...state.profile?.response?.data?.responses, action.payload]
      };
    case actionTypes.DELETE_PROFILE_WEBS:
      return {
        ...state,
        profileUrls: state.profile?.response?.data?.responses.filter(x => !action.payload.includes(x.name))
      };
    default:
      return state;
  }
}

export default profileReducers