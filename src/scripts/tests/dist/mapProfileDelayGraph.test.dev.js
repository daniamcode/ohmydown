"use strict";

var _mapProfileDelayGraph = _interopRequireDefault(require("../mapProfileDelayGraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('mapProfileDelayGraph function', function () {
  it('should return right response with 2 webs and 2 objects per web', function () {
    var response = [{
      id: {
        value: 'amazon.com'
      },
      healthCheckResponse: [{
        time: "Mon Dec 21 2020 20:29:02 GMT+0100 (hora estándar de Europa central)",
        url: "https://www.amazon.com/",
        delay: 1999,
        status: 200
      }, {
        time: "Mon Dec 21 2020 20:31:02 GMT+0100 (hora estándar de Europa central)",
        url: "https://www.amazon.com/",
        delay: 2999,
        status: 200
      }]
    }, {
      id: {
        value: 'google.com'
      },
      healthCheckResponse: [{
        time: "Mon Dec 21 2020 20:29:02 GMT+0100 (hora estándar de Europa central)",
        url: "https://www.google.com/",
        delay: 100,
        status: 200
      }, {
        time: "Mon Dec 21 2020 20:31:02 GMT+0100 (hora estándar de Europa central)",
        url: "https://www.google.com/",
        delay: 112,
        status: 200
      }]
    }];
    var result = [['x', 'amazon.com', 'google.com'], [new Date('2020-12-21T19:29:02.000Z'), 1999, 100], [new Date('2020-12-21T19:31:02.000Z'), 2999, 112]];
    expect((0, _mapProfileDelayGraph["default"])(response)).toEqual(result);
  });
});