import statusReducer from './status';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    status: statusReducer
})

export default rootReducer;
