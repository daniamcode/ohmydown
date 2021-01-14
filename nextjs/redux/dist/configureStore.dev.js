"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _rootReducer = _interopRequireDefault(require("./reducers/rootReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// if (typeof window === 'undefined') {
//   global.window = {}
// }
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
    detailDelayGraph: 'test'
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