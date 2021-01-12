import rootReducer from "../redux/reducers/rootReducer";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

if (typeof window === 'undefined') {
  global.window = {}
}

const initialState = {
    statusReducer: {showStatus: false, loadStatus: {response: {}, isLoading: false, error: {}}},
    profileReducer: { profile: {response: [], isLoading: false, error: {}}, addUrl: {isLoading: false, error: {}}},
    landingListReducer: {landingList: {response: {}, isLoading: false, error: {}}},
    detailReducer: {detailDelayGraph: {response: {}, isLoading: false, error: {}}},
    googleReducer: {}
  };

const configureStore = (initialState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
}

export { initialState }
export default configureStore