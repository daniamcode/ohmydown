"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = errorMessage;

var _constants = require("../data/constants");

function errorMessage(errorResponse) {
  var message = '';

  switch (true) {
    case errorResponse.status === 301:
      message = _constants.THIRD_PARTY_301;
      break;

    case errorResponse.status === 302:
      message = _constants.THIRD_PARTY_302;
      break;

    case errorResponse.status === 400:
      message = _constants.THIRD_PARTY_400;
      break;

    case errorResponse.status === 403:
      message = _constants.THIRD_PARTY_403;
      break;

    case errorResponse.status === 404:
      message = _constants.THIRD_PARTY_404;
      break;

    case errorResponse.status === 406:
      message = _constants.THIRD_PARTY_406;
      break;

    case errorResponse.status === 408:
      message = _constants.THIRD_PARTY_408;
      break;

    case errorResponse.status === 421:
      message = _constants.THIRD_PARTY_421;
      break;

    case errorResponse.status === 429:
      message = _constants.THIRD_PARTY_429;
      break;

    case errorResponse.status === 495:
      message = _constants.THIRD_PARTY_495;
      break;

    default:
      break;
  }

  return message;
}