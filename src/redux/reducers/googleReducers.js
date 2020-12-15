import actionTypes from "../actions/actionTypes"

export const googleReducers = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GOOGLE_OAUTH2: {
        return {
            ...state,
            authResponse: action.payload
          };
    }
    default:
      return state;
  }
};

export default googleReducers