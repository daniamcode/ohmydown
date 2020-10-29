import actionTypes from "./actionTypes";


export const showStatus = (dispatch) => {
  let showStatus = true;
  dispatch({
    type: actionTypes.SHOW_STATUS,
    payload: showStatus
  });
}

