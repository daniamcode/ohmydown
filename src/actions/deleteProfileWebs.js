//import axios from "axios";
import actionTypes from "./actionTypes";
import rows from '../data/mock-data'

export const deleteProfileWebs = () => {
  return (
    {
      type: actionTypes.DELETE_PROFILE_WEBS,
      payload: rows.splice(0,1)
    }
  )
};