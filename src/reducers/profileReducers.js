import actionTypes from '../actions/actionTypes';

const initialState = {
  profileUrls: []
}


const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PROFILE_WEBS:
      return {
        ...state,
        profileUrls: action.payload
      };
    case actionTypes.ADD_PROFILE_WEB:
      return {
        ...state,
        profileUrls: [...state.profileUrls, action.payload]
      };
    case actionTypes.DELETE_PROFILE_WEBS:
      return {
        ...state,
        profileUrls: state.profileUrls.filter(url => (
      
          url.name !== action.payload[0])),
      };
    default:
      return state;
  }
}

export default profileReducers