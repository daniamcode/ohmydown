"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = errorMessage;

var _constants = require("../data/constants");

function errorMessage(errorResponse) {
  var message = '';

  switch (true) {
    case errorResponse.status === 400:
      message = {
        OWN_400: _constants.OWN_400
      };
      break;

    case errorResponse.status === 403:
      message = {
        OWN_403: _constants.OWN_403
      };
      break;

    case errorResponse.status >= 500 && errorResponse.status < 600:
      message = {
        OWN_500_599: _constants.OWN_500_599
      };
      break;

    case errorResponse === 'Network Error':
      message = {
        OWN_NETWORK_ERROR: _constants.OWN_NETWORK_ERROR
      };
      break;

    default:
      break;
  }

  return message;
}