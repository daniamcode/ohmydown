import axios from "axios";
import actionTypes from "./actionTypes";

export const loadStatus = (url) => {
  return async function (dispatch) {
    let isLoading = true;
    dispatch({
      type: actionTypes.LOAD_STATUS,
      payload: {
        isLoading
      }
    });
    const response = await axios.post(
        'http://localhost:8080/status', {
          url
        }
      )
      .catch(error => {
        isLoading = false;
        dispatch({
          type: actionTypes.LOAD_STATUS,
          payload: {
            error, isLoading
          }
        })
      })
    if (response !== undefined) {
      isLoading = false;
      dispatch({
        type: actionTypes.LOAD_STATUS,
        payload: {
          response,
          isLoading
        }
      });
    }
  }
};