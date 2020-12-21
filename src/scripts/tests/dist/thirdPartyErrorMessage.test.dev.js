"use strict";

var _thirdPartyErrorMessage = _interopRequireDefault(require("../thirdPartyErrorMessage"));

var _constants = require("../../data/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ErrorMessage function', function () {
  it('should return right message for case 301', function () {
    var errorResponse = {
      status: 301
    };
    var message = {
      THIRD_PARTY_301: _constants.THIRD_PARTY_301
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 302', function () {
    var errorResponse = {
      status: 302
    };
    var message = {
      THIRD_PARTY_302: _constants.THIRD_PARTY_302
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 400', function () {
    var errorResponse = {
      status: 400
    };
    var message = {
      THIRD_PARTY_400: _constants.THIRD_PARTY_400
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 403', function () {
    var errorResponse = {
      status: 403
    };
    var message = {
      THIRD_PARTY_403: _constants.THIRD_PARTY_403
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 404', function () {
    var errorResponse = {
      status: 404
    };
    var message = {
      THIRD_PARTY_404: _constants.THIRD_PARTY_404
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 406', function () {
    var errorResponse = {
      status: 406
    };
    var message = {
      THIRD_PARTY_406: _constants.THIRD_PARTY_406
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 408', function () {
    var errorResponse = {
      status: 408
    };
    var message = {
      THIRD_PARTY_408: _constants.THIRD_PARTY_408
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 421', function () {
    var errorResponse = {
      status: 421
    };
    var message = {
      THIRD_PARTY_421: _constants.THIRD_PARTY_421
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 429', function () {
    var errorResponse = {
      status: 429
    };
    var message = {
      THIRD_PARTY_429: _constants.THIRD_PARTY_429
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for case 495', function () {
    var errorResponse = {
      status: 495
    };
    var message = {
      THIRD_PARTY_495: _constants.THIRD_PARTY_495
    };
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
  it('should return right message for default case', function () {
    var errorResponse = '';
    var message = '';
    expect((0, _thirdPartyErrorMessage["default"])(errorResponse)).toEqual(message);
  });
});