import actionTypes from '../actions/actionTypes';

const landingListReducers = (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_LANDING_LIST:
        return {
          ...state,
          landingList: action.payload
        };
      default:
        return state;
    }
  }
  
  export default landingListReducers