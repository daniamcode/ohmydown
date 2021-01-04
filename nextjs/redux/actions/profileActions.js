import axios from "axios";
import actionTypes from "./actionTypes";

export const loadProfile = (token) => {
  return async function getServerSideProps (dispatch) {
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

export const addProfileWeb = (url, token) => {
  return async function (dispatch) {
    let isLoading = true;
    console.log(url)
    dispatch({
      type: actionTypes.ADD_PROFILE_WEB,
      payload: {
        isLoading
      }
    });
    const response = await axios.post(
        'http://localhost:8080/profile/addurl', {url}, {
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
          type: actionTypes.ADD_PROFILE_WEB,
          payload: {
            error,
            isLoading
          }
        })
      })
      console.log(response)
    if (response !== undefined) {
      isLoading = false;
      dispatch({
        type: actionTypes.ADD_PROFILE_WEB,
        payload: {
          response,
          isLoading
        }
      })
    }
  }
};

export const deleteProfileWebs = (ids, token) => {
  return async function (dispatch) {
    let isLoading = true;
    console.log({ids})
    console.log(token)
    dispatch({
      type: actionTypes.DELETE_PROFILE_WEBS,
      payload: {
        isLoading
      }
    });
    const response = await axios.delete(
        'http://localhost:8080/profile/deleteurls', {
          headers: {
            Token: token
          },
          data: {
              ids
            }
        }
      )
      .catch(error => {
        if (!error.response) {
          error.response = 'Network Error'
        }
        isLoading = false;
        dispatch({
          type: actionTypes.DELETE_PROFILE_WEBS,
          payload: {
            error,
            isLoading
          }
        })
      })
      console.log(response)
    if (response !== undefined) {
      isLoading = false;
      dispatch({
        type: actionTypes.DELETE_PROFILE_WEBS,
        payload: {
          response,
          isLoading
        }
      })
    }
  }
};