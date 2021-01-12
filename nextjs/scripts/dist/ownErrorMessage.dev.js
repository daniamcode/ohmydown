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
      message = _constants.OWN_400;
      break;

    case errorResponse.status === 403:
      message = _constants.OWN_403;
      break;

    case errorResponse.status >= 500 && errorResponse.status < 600:
      message = _constants.OWN_500_599;
      break;

    case errorResponse.status === 701:
      message = _constants.OWN_701;
      break;

    case errorResponse === 'Network Error':
      message = _constants.OWN_NETWORK_ERROR;
      break;

    default:
      break;
  }

  return message;
}