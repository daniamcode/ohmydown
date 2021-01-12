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
        addUrl: action.payload
        // profile: [...state.profile?.response?.data?.responses, action.payload]
      };
    case actionTypes.DELETE_PROFILE_WEBS:
      return {
        ...state,
        profile: {
          response: state.profile.response?.filter(x => !action.payload?.response?.config?.data?.includes(x.endpoint?.id))
        }
      };
    default:
      return state;
  }
}

export default profileReducers