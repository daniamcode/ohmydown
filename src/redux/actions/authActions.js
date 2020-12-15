import actionTypes from "./actionTypes";

export const googleOAuth2 = (googleResponse) => {
    return async (dispatch) => {
        //console.log(googleResponse)
        if (typeof googleResponse === 'undefined') {
            googleResponse = [];
        }

        dispatch({ type: actionTypes.GOOGLE_OAUTH2, payload: googleResponse });
    };
};