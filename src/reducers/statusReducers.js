import actionTypes from '../actions/actionTypes';

const initialState = {showStatus: false, loadStatus: {response: {}, isLoading: false, error: {}}}

const statusReducers = (state = initialState, action = {}) => {
    switch (action.type) {
      case actionTypes.SHOW_STATUS:
        return {
          ...state,
          showStatus: action.payload
        };
        case actionTypes.LOAD_STATUS:
        return {
          ...state,
          loadStatus: action.payload
        };
      default:
        return state;
    }
  }
  
  export { initialState };
  export default statusReducers