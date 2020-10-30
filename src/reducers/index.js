import loadStatusReducer from './loadStatus';
import showStatusReducer from './showStatus';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    status: loadStatusReducer,
    showStatus: showStatusReducer
})

export default rootReducer;
