import actionTypes from "./actionTypes";
import axios from "axios";


export const showStatus = () => {
    let showStatus = true;
    return ({
        type: actionTypes.SHOW_STATUS,
        payload: showStatus
    });
}

export const hideStatus = () => {
    let showStatus = false;
    return ({
        type: actionTypes.SHOW_STATUS,
        payload: showStatus
    });
}

export const loadStatus = (url) => {
    return async function (dispatch) {
        let isLoading = true;
        dispatch({
            type: actionTypes.LOAD_STATUS,
            payload: {
                isLoading
            }
        });
        const response = await axios.post(
                'http://localhost:8080/status', {
                    url
                }
            )
            .catch(error => {
                if(!error.response) {
                    error.response = 'Network Error'
                }
                isLoading = false;
                dispatch({
                    type: actionTypes.LOAD_STATUS,
                    payload: {
                        error,
                        isLoading
                    }
                })
            })
        if (response !== undefined) {
            isLoading = false;
            if(response.data.url.length > 35) {
                response.data.url = response.data.url.slice(0, 35) + '...'
            }
            dispatch({
                type: actionTypes.LOAD_STATUS,
                payload: {
                    response,
                    isLoading
                }
            });
        }
    }
};