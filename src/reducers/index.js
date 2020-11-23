import loadStatusReducer from './loadStatus';
import showStatusReducer from './showStatus';
import {
    combineReducers
} from 'redux';
import loadProfileWebsReducer from './loadProfileWebs';
import deleteProfileWebsReducer from './deleteProfileWebs';

const rootReducer = combineReducers({
    loadStatus: loadStatusReducer,
    showStatus: showStatusReducer,
    loadProfileWebs: loadProfileWebsReducer,
    deleteProfileWebs: deleteProfileWebsReducer
})

export default rootReducer;
