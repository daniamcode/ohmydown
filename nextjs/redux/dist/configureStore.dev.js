"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.preloadedState = exports.initialState = void 0;

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _rootReducer = _interopRequireDefault(require("./reducers/rootReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// check if this is necessary
if (typeof window === 'undefined') {
  global.window = {};
}

var initialState = {
  statusReducer: {
    showStatus: false,
    loadStatus: {
      response: {},
      isLoading: false,
      error: {}
    }
  },
  profileReducer: {
    profile: {
      response: [],
      isLoading: false,
      error: {}
    },
    addUrl: {
      isLoading: false,
      error: {}
    }
  },
  landingListReducer: {
    landingList: {
      response: {},
      isLoading: false,
      error: {}
    }
  },
  detailReducer: {
    detailDelayGraph: {
      response: {},
      isLoading: false,
      error: {}
    }
  },
  googleReducer: {}
};
exports.initialState = initialState;
var preloadedState = {
  statusReducer: {
    showStatus: false,
    loadStatus: {
      response: {},
      isLoading: false,
      error: {}
    }
  },
  profileReducer: {
    profile: {
      response: [],
      isLoading: false,
      error: {}
    },
    addUrl: {
      isLoading: false,
      error: {}
    }
  },
  landingListReducer: {
    landingList: {
      response: {},
      isLoading: false,
      error: {}
    }
  },
  detailReducer: {
    detailDelayGraph: 'test'
  },
  googleReducer: {}
};
exports.preloadedState = preloadedState;
var store;

function initStore(initialState) {
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  return (0, _redux.createStore)(_rootReducer["default"], initialState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"])));
} // export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState)
//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     })
//     // Reset the current store
//     store = undefined
//   }
//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store
//   // Create the store once in the client
//   if (!store) store = _store
//   return _store
// }
// const finalStore = (initialState) => {
//   // const store = useMemo(() => initializeStore(initialState), [initialState])
//   const store = initializeStore(preloadedState)
//   return store
// }


// export default finalStore
var _default = initStore;
exports["default"] = _default;