import actionTypes from "./actionTypes";


export const hideStatus = () => {
  let showStatus = false;
  return ({
    type: actionTypes.SHOW_STATUS,
    payload: showStatus
  });
}

