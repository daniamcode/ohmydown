import statusReducer from './statusReducers'
import profileReducer from './profileReducers'
import landingListReducer from './landingListReducers'
import detailReducer from './detailReducers'
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    statusReducer,
    profileReducer,
    landingListReducer,
    detailReducer
})

export const setMessage = messageText => ({ type: 'SET_MESSAGE', message: messageText });

export const setAsyncMessage = messageText => dispatch => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    })
        .then(() => dispatch(setMessage(messageText)))
);

export default rootReducer;
