import actionTypes from "./actionTypes";
import axios from "axios";


export const loadLandingList = (token) => {
    return async function getServerSideProps (dispatch) {
        let isLoading = true;
        dispatch({
            type: actionTypes.LOAD_LANDING_LIST,
            payload: {
                isLoading
            }
        });
        const response = await axios.post(
                'http://localhost:8080/landing-list', {
                    headers: {Token: token}
                }
            )
            ?.catch(error => {
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
            console.log(response)
            isLoading = false;
            dispatch({
                type: actionTypes.LOAD_LANDING_LIST,
                payload: {
                    response,
                    isLoading
                }
            })}
        }
};