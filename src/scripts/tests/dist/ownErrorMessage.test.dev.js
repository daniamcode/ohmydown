"use strict";

var _ownErrorMessage = _interopRequireDefault(require("../ownErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ErrorMessage function', function () {
  it('should return right message for case 400', function () {
    var errorResponse = {
      status: 400
    };
    var message = "Sorry, that page doesn't exist, try again!";
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 403', function () {
    var errorResponse = {
      status: 403
    };
    var message = "Please, sign in again!";
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 500-599', function () {
    var errorResponse = {
      status: 500
    };
    var message = "Sorry, our server is overloaded, please try again later!";
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case Netword Error', function () {
    var errorResponse = 'Network Error';
    var message = "Sorry, our server is down now, please try later!";
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for default case', function () {
    var errorResponse = '';
    var message = '';
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
});