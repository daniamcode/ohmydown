import axios from "axios";
import actionTypes from "./actionTypes";
//import rows from '../../data/mock-data'

// export const loadProfileWebs = () => {
//   return (
//     {
//       type: actionTypes.LOAD_PROFILE_WEBS,
//       payload: rows
//     }
//   )
// };

export const loadProfileWebs = (token) => {
  console.log(token)
  return async function (dispatch) {
      let isLoading = true;
      dispatch({
          type: actionTypes.LOAD_PROFILE_WEBS,
          payload: {
              isLoading
          }
      });
      const response = await axios.get(
              'http://localhost:8080/profile', {
                  headers: {token}
              }
          )
          .catch(error => {
              if (!error.response) {
                  error.response = 'Network Error'
              }
              isLoading = false;
              dispatch({
                  type: actionTypes.LOAD_PROFILE_WEBS,
                  payload: {
                      error,
                      isLoading
                  }
              })
          })
      if (response !== undefined) {
          isLoading = false;
          dispatch({
              type: actionTypes.LOAD_PROFILE_WEBS,
              payload: {
                  response,
                  isLoading
              }
          })}
      }
};

export const addProfileWeb = (webName) => {
    return (
      {
        type: actionTypes.ADD_PROFILE_WEB,
        payload: {name: webName}
      }
    )
  };
  
export const deleteProfileWebs = (webNames) => {
  return (
    {
      type: actionTypes.DELETE_PROFILE_WEBS,
      payload: webNames
    }
  )
};
