"use strict";

var _mapDetailDelayGraph = _interopRequireDefault(require("../mapDetailDelayGraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('mapDetailDelayGraph function', function () {
  it('should return right response', function () {
    var response = [{
      time: "Mon Dec 21 2020 20:29:02 GMT+0100 (hora estándar de Europa central)",
      url: "https://www.amazon.com/",
      delay: 1999,
      status: 200
    }, {
      time: "Mon Dec 21 2020 20:31:02 GMT+0100 (hora estándar de Europa central)",
      url: "https://www.amazon.com/",
      delay: 2999,
      status: 200
    }];
    var id = 'amazon.com';
    var result = [['x', 'amazon.com'], [new Date('2020-12-21T19:29:02.000Z'), 1999], [new Date('2020-12-21T19:31:02.000Z'), 2999]];
    expect((0, _mapDetailDelayGraph["default"])(response, id)).toEqual(result);
  });
});