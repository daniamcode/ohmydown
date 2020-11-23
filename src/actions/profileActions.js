//import axios from "axios";
import actionTypes from "./actionTypes";
import rows from '../data/mock-data'

export const loadProfileWebs = () => {
  return (
    {
      type: actionTypes.LOAD_PROFILE_WEBS,
      payload: rows
    }
  )
};

export const deleteProfileWebs = (id) => {
  return (
    {
      type: actionTypes.DELETE_PROFILE_WEBS,
      payload: id
    }
  )
};

