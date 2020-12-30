"use strict";

var _ownErrorMessage = _interopRequireDefault(require("../ownErrorMessage"));

var _constants = require("../../data/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ErrorMessage function', function () {
  it('should return right message for case 400', function () {
    var errorResponse = {
      status: 400
    };
    var message = _constants.OWN_400;
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 403', function () {
    var errorResponse = {
      status: 403
    };
    var message = _constants.OWN_403;
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 500-599', function () {
    var errorResponse = {
      status: 500
    };
    var message = _constants.OWN_500_599;
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case Netword Error', function () {
    var errorResponse = 'Network Error';
    var message = _constants.OWN_NETWORK_ERROR;
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for default case', function () {
    var errorResponse = '';
    var message = '';
    expect((0, _ownErrorMessage["default"])(errorResponse)).toEqual(message);
  });
});