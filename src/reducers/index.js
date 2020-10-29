import statusReducer from './status';
import showStatusReducer from './showStatus';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    status: statusReducer,
    showStatus: showStatusReducer
})

export default rootReducer;
