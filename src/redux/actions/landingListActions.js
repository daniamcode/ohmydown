import actionTypes from "./actionTypes";
import axios from "axios";


export const loadLandingList = () => {
    return async function (dispatch) {
        let isLoading = true;
        dispatch({
            type: actionTypes.LOAD_LANDING_LIST,
            payload: {
                isLoading
            }
        });
        const response = await axios.post(
                'http://localhost:8080/landing-list'
            )
            .catch(error => {
                if (!error.response) {
                    error.response = 'Network Error'
                }
                isLoading = false;
                dispatch({
                    type: actionTypes.LOAD_LANDING_LIST,
                    payload: {
                        error,
                        isLoading
                    }
                })
            })
        if (response !== undefined) {
            isLoading = false;
            console.log(response)
            }
            dispatch({
                type: actionTypes.LOAD_LANDING_LIST,
                payload: {
                    response,
                    isLoading
                }
            });
        }
};