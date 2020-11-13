import actionTypes from "./actionTypes";


export const hideStatus = (dispatch) => {
  let showStatus = false;
  return dispatch({
    type: actionTypes.SHOW_STATUS,
    payload: showStatus
  });
}

