import actionTypes from '../actions/actionTypes';

const statusReducers = (state = {}, action = {}) => {
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
  
  export default statusReducers