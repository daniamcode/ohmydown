import axios from "axios";
import actionTypes from "./actionTypes";
//import mockData from '../data/mock-data'

// export const loadStatus = (url) => {
//   console.log(url)
//   return function (dispatch) {
//     const isLoading = false;
//     dispatch({
//       type: actionTypes.LOAD_STATUS,
//       payload: {status: mockData, isLoading}
//     });
//   };
// };


export const loadStatus = (url) => {
  return async function (dispatch) {
    let isLoading = true;
    dispatch({
      type: actionTypes.LOAD_STATUS,
      payload: {isLoading}
    });
    const status = await axios.post(
      'http://httpstat.us/200', {url}
    ).catch(error => {
      console.log('Sorry, that was an error, try again!');
    })
    isLoading = false;
    dispatch({
      type: actionTypes.LOAD_STATUS,
      payload: {status, isLoading}
    });
  }
};


