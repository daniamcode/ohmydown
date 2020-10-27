//import axios from "axios";
import actionTypes from "./actionTypes";
import mockData from '../data/mock-data'

export const loadStatus = () => {
  return function (dispatch) {
    const isLoading = false;
    dispatch({
      type: actionTypes.LOAD_GIFS,
      payload: {status: mockData.status, isLoading}
    });
  };
};
