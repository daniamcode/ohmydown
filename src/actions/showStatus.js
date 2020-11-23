import actionTypes from "./actionTypes";


export const showStatus = () => {
  let showStatus = true;
  return ({
    type: actionTypes.SHOW_STATUS,
    payload: showStatus
  });
}

