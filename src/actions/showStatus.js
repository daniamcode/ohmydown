import actionTypes from "./actionTypes";


export const showStatus = (dispatch) => {
  let showStatus = true;
  return dispatch({
    type: actionTypes.SHOW_STATUS,
    payload: showStatus
  });
}

