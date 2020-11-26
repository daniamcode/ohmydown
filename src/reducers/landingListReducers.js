import actionTypes from '../actions/actionTypes';

const initialState = {landingList: {response: {}, isLoading: false, error: {}}}

const statusReducers = (state = initialState, action = {}) => {
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
  
  export { initialState };
  export default statusReducers