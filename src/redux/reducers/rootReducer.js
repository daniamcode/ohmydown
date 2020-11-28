import statusReducer from './statusReducers'
import profileReducer from './profileReducers'
import landingListReducer from './landingListReducers'
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    statusReducer,
    profileReducer,
    landingListReducer
})

export default rootReducer;
