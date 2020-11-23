import statusReducer from './statusReducers'
import profileReducer from './profileReducers'
import {
    combineReducers
} from 'redux';


const rootReducer = combineReducers({
    statusReducer,
    profileReducer
})

export default rootReducer;
