"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = errorMessage;

function errorMessage(errorResponse) {
  var message = '';

  switch (true) {
    case errorResponse.status === 400:
      message = "Sorry, that page doesn't exist, try again!";
      break;

    case errorResponse.status === 403:
      message = "Please, sign in again!";
      break;

    case errorResponse.status >= 500 && errorResponse.status < 600:
      message = "Sorry, our server is overloaded, please try again later!";
      break;

    case errorResponse === 'Network Error':
      message = "Sorry, our server is down now, please try later!";
      break;

    default:
      break;
  }

  return message;
}