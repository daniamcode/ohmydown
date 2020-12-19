import actionTypes from "./actionTypes";

export const googleOAuth2 = () => {
    return async (dispatch) => {
        // if (typeof googleResponse === 'undefined') {
        //     googleResponse = [];
        // }
        const cookies = document.cookie.split(';')
            .map(cookie => cookie.split('='))
            .reduce((accumulator, [key, value]) =>
                ({
                    ...accumulator,
                    [key.trim()]: decodeURIComponent(value)

                }), {})
        
        let token = '';
        let name = '';
        if(cookies.token !== undefined) {
            token = cookies.token;
            name = cookies.name
        }
        console.log(token)
        console.log(name)
        dispatch({
            type: actionTypes.GOOGLE_OAUTH2,
            payload: {
                token,
                name
           }
            
        });
    };
};