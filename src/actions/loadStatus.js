import axios from "axios";
import actionTypes from "./actionTypes";

export const loadStatus = (url) => {
  return async function (dispatch) {
    let isLoading = true;
    dispatch({
      type: actionTypes.LOAD_STATUS,
      payload: {isLoading}
    });
    const status = await axios.post(
      'http://localhost:8080/status', {url}
      ).catch(error => {
        console.log('Sorry, that was an error, try again!');
      })
      isLoading = false;
      console.log(status)
    dispatch({
      type: actionTypes.LOAD_STATUS,
      payload: {status, isLoading}
    });
  }
};


