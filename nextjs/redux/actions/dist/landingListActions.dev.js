"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadLandingList = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadLandingList = function loadLandingList(token) {
  return function getServerSideProps(dispatch) {
    var isLoading, response;
    return regeneratorRuntime.async(function getServerSideProps$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isLoading = true;
            dispatch({
              type: _actionTypes["default"].LOAD_LANDING_LIST,
              payload: {
                isLoading: isLoading
              }
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post('http://localhost:8080/landing-list', {
              headers: {
                Token: token
              }
            })["catch"](function (error) {
              if (!error.response) {
                error.response = 'Network Error';
              }

              isLoading = false;
              dispatch({
                type: _actionTypes["default"].LOAD_LANDING_LIST,
                payload: {
                  error: error,
                  isLoading: isLoading
                }
              });
            }));

          case 4:
            response = _context.sent;

            if (response !== undefined) {
              console.log(response);
              isLoading = false;
              dispatch({
                type: _actionTypes["default"].LOAD_LANDING_LIST,
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

exports.loadLandingList = loadLandingList;