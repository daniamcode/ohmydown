import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

// check if this is necessary
if (typeof window === 'undefined') {
  global.window = {}
}

const initialState = {
    statusReducer: {showStatus: false, loadStatus: {response: {}, isLoading: false, error: {}}},
    profileReducer: { profile: {response: [], isLoading: false, error: {}}, addUrl: {isLoading: false, error: {}}},
    landingListReducer: {landingList: {response: {}, isLoading: false, error: {}}},
    detailReducer: {detailDelayGraph: {response: {}, isLoading: false, error: {}}},
    googleReducer: {authResponse: {token: 'init'}}
  };

let store

function initStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

const useStore = (initialState) => {
  // const store = useMemo(() => initializeStore(initialState), [initialState])
  const store = initializeStore(initialState)
  return store
}

export { initialState }
export default useStore