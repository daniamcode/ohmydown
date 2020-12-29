"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadDetailDelayGraph = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadDetailDelayGraph = function loadDetailDelayGraph(id, token) {
  return function _callee(dispatch) {
    var isLoading, response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isLoading = true;
            dispatch({
              type: _actionTypes["default"].LOAD_DETAIL_DELAY_GRAPH,
              payload: {
                isLoading: isLoading
              }
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:8080/historical/".concat(id), {
              id: id
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
                type: _actionTypes["default"].LOAD_DETAIL_DELAY_GRAPH,
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
              dispatch({
                type: _actionTypes["default"].LOAD_DETAIL_DELAY_GRAPH,
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

exports.loadDetailDelayGraph = loadDetailDelayGraph;