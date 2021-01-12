"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _rootReducer = _interopRequireDefault(require("../redux/reducers/rootReducer"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var configureStore = function configureStore(initialState) {
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  return (0, _redux.createStore)(_rootReducer["default"], initialState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"])));
};

var _default = configureStore;
exports["default"] = _default;