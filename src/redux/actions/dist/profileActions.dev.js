"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfileWebs = exports.addProfileWeb = exports.loadProfile = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadProfile = function loadProfile(token) {
  return function _callee(dispatch) {
    var isLoading, response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isLoading = true;
            dispatch({
              type: _actionTypes["default"].LOAD_PROFILE,
              payload: {
                isLoading: isLoading
              }
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get('http://localhost:8080/profile', {
              headers: {
                Token: token
              }
            })["catch"](function (error) {
              if (!error.response) {
                error.response = 'Network Error';
              }

              isLoading = false;
              dispatch({
                type: _actionTypes["default"].LOAD_PROFILE,
                payload: {
                  error: error,
                  isLoading: isLoading
                }
              });
            }));

          case 4:
            response = _context.sent;

            if (response !== undefined) {
              isLoading = false;
              console.log(response);
              dispatch({
                type: _actionTypes["default"].LOAD_PROFILE,
                payload: {
                  response: response,
                  isLoading: isLoading
                }
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.loadProfile = loadProfile;

var addProfileWeb = function addProfileWeb(webName) {
  return {
    type: _actionTypes["default"].ADD_PROFILE_WEB,
    payload: {
      name: webName
    }
  };
};

exports.addProfileWeb = addProfileWeb;

var deleteProfileWebs = function deleteProfileWebs(webNames) {
  return {
    type: _actionTypes["default"].DELETE_PROFILE_WEBS,
    payload: webNames
  };
};

exports.deleteProfileWebs = deleteProfileWebs;