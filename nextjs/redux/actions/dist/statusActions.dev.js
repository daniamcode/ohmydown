"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadStatus = exports.hideStatus = exports.showStatus = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var showStatus = function showStatus() {
  var showStatus = true;
  return {
    type: _actionTypes["default"].SHOW_STATUS,
    payload: showStatus
  };
};

exports.showStatus = showStatus;

var hideStatus = function hideStatus() {
  var showStatus = false;
  return {
    type: _actionTypes["default"].SHOW_STATUS,
    payload: showStatus
  };
};

exports.hideStatus = hideStatus;

var loadStatus = function loadStatus(url, token) {
  return function _callee(dispatch) {
    var isLoading, response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isLoading = true;
            dispatch({
              type: _actionTypes["default"].LOAD_STATUS,
              payload: {
                isLoading: isLoading
              }
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post('http://localhost:8080/status', {
              url: url
            }, {
              headers: {
                Token: token
              }
            })["catch"](function (error) {
              if (!error.response) {
                error.response = 'Network Error';
              }

              isLoading = false;
              dispatch({
                type: _actionTypes["default"].LOAD_STATUS,
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

              if (response.data.url.length > 35) {
                response.data.url = response.data.url.slice(0, 35) + '...';
              }

              dispatch({
                type: _actionTypes["default"].LOAD_STATUS,
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

exports.loadStatus = loadStatus;