import actionTypes from '../actions/actionTypes';

const detailReducers = (state = {}, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_DETAIL_DELAY_GRAPH:
        return {
          ...state,
          detailDelayGraph: action.payload
        };
      default:
        return state;
    }
  }
  
  export default detailReducers