import actionTypes from "./actionTypes";
import axios from "axios";


export const loadDetailDelayGraph = (id, token) => {
    return async function (dispatch) {
        let isLoading = true;
        dispatch({
            type: actionTypes.LOAD_DETAIL_DELAY_GRAPH,
            payload: {
                isLoading
            }
        });
        const response = await axios.get(
                `http://localhost:8080/historical/${id}`, {
                    id
                },{
                    headers: token
                }
            )
            .catch(error => {
                if (!error.response) {
                    error.response = 'Network Error'
                }
                isLoading = false;
                dispatch({
                    type: actionTypes.LOAD_DETAIL_DELAY_GRAPH,
                    payload: {
                        error,
                        isLoading
                    }
                })
            })
        if (response !== undefined) {
            isLoading = false;
            dispatch({
                type: actionTypes.LOAD_DETAIL_DELAY_GRAPH,
                payload: {
                    response,
                    isLoading
                }
            })}
        }
};