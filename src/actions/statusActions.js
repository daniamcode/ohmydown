//import axios from "axios";
import actionTypes from "./actionTypes";
import mockData from '../data/mock-data'

export const loadStatus = (url) => {
  console.log(url)
  return function (dispatch) {
    const isLoading = false;
    dispatch({
      type: actionTypes.LOAD_STATUS,
      payload: {status: mockData, isLoading}
    });
  };
};


// export const loadStatus = (url) => {
//   return async function (dispatch) {
//     const status = await axios.post(
//       'api/status', url
//     );
//     const isLoading = false;
//     dispatch({
//       type: actionTypes.LOAD_STATUS,
//       payload: {status, isLoading}
//     });
//   };
// };

