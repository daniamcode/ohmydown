import axios from "axios";
import actionTypes from "./actionTypes";

export const loadProfile = (token) => {
  return async function (dispatch) {
    let isLoading = true;
    dispatch({
      type: actionTypes.LOAD_PROFILE,
      payload: {
        isLoading
      }
    });
    const response = await axios.get(
        'http://localhost:8080/profile', {
          headers: {
            Token: token
          }
        }
      )
      .catch(error => {
        if (!error.response) {
          error.response = 'Network Error'
        }
        isLoading = false;
        dispatch({
          type: actionTypes.LOAD_PROFILE,
          payload: {
            error,
            isLoading
          }
        })
      })
    if (response !== undefined) {
      isLoading = false;
      console.log(response)
      dispatch({
        type: actionTypes.LOAD_PROFILE,
        payload: {
          response,
          isLoading
        }
      })
    }
  }
};

export const addProfileWeb = (webName) => {
  return ({
    type: actionTypes.ADD_PROFILE_WEB,
    payload: {
      name: webName
    }
  })
};

export const deleteProfileWebs = (webNames) => {
  return ({
    type: actionTypes.DELETE_PROFILE_WEBS,
    payload: webNames
  })
};