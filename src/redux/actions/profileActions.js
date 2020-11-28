//import axios from "axios";
import actionTypes from "./actionTypes";
import rows from '../../data/mock-data'

export const loadProfileWebs = () => {
  return (
    {
      type: actionTypes.LOAD_PROFILE_WEBS,
      payload: rows
    }
  )
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
