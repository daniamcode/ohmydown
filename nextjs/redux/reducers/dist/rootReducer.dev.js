"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _statusReducers = _interopRequireDefault(require("./statusReducers"));

var _profileReducers = _interopRequireDefault(require("./profileReducers"));

var _landingListReducers = _interopRequireDefault(require("./landingListReducers"));

var _detailReducers = _interopRequireDefault(require("./detailReducers"));

var _googleReducers = _interopRequireDefault(require("./googleReducers"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  statusReducer: _statusReducers["default"],
  profileReducer: _profileReducers["default"],
  landingListReducer: _landingListReducers["default"],
  detailReducer: _detailReducers["default"],
  googleReducer: _googleReducers["default"]
}); // export const setMessage = messageText => ({ type: 'SET_MESSAGE', message: messageText });
// export const setAsyncMessage = messageText => dispatch => (
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), 2000);
//     })
//         .then(() => dispatch(setMessage(messageText)))
// );

var _default = rootReducer;
exports["default"] = _default;