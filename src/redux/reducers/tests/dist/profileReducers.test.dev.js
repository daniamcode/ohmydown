"use strict";

var _profileReducers = _interopRequireDefault(require("../profileReducers"));

var _configureStore = require("../../configureStore");

var _actionTypes = _interopRequireDefault(require("../../actions/actionTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Profile reducer', function () {
  it('should handle no initial state and no action', function () {
    expect((0, _profileReducers["default"])()).toEqual({});
  });
  it('should handle initial state and no action', function () {
    expect((0, _profileReducers["default"])(_configureStore.initialState.profileReducer)).toEqual({
      profile: {
        response: {},
        isLoading: false,
        error: {}
      }
    });
  });
  xit('should handle LOAD_PROFILE_WEBS', function () {
    var result = {
      profile: {
        response: [{
          name: 'sport.es'
        }, {
          name: 'amazon.com'
        }]
      },
      isLoading: false,
      error: {}
    };
    expect((0, _profileReducers["default"])(_objectSpread({}, _configureStore.initialState.profileReducer), {
      type: _actionTypes["default"].LOAD_PROFILE_WEBS,
      payload: {
        response: [{
          name: 'sport.es'
        }, {
          name: 'amazon.com'
        }],
        isLoading: false
      }
    })).toEqual(result);
  });
  xit('should handle ADD_PROFILE_WEB', function () {
    _configureStore.initialState.profileReducer.profile = [{
      name: 'sport.es'
    }, {
      name: 'yavendras.com'
    }, {
      name: 'google.com'
    }];
    var result = {
      profile: [{
        name: 'sport.es'
      }, {
        name: 'yavendras.com'
      }, {
        name: 'google.com'
      }, {
        name: 'amazon.com'
      }]
    };
    expect((0, _profileReducers["default"])(_objectSpread({}, _configureStore.initialState.profileReducer), {
      type: _actionTypes["default"].ADD_PROFILE_WEB,
      payload: {
        name: 'amazon.com'
      }
    })).toEqual(result);
  });
  xit('should handle DELETE_PROFILE_WEBS', function () {
    _configureStore.initialState.profileReducer.profile = [{
      name: 'sport.es'
    }, {
      name: 'yavendras.com'
    }, {
      name: 'google.com'
    }];
    var result = {
      profile: [{
        name: 'yavendras.com'
      }]
    };
    expect((0, _profileReducers["default"])(_objectSpread({}, _configureStore.initialState.profileReducer), {
      type: _actionTypes["default"].DELETE_PROFILE_WEBS,
      payload: ['google.com', 'sport.es']
    })).toEqual(result);
  });
  it('should handle default', function () {
    expect((0, _profileReducers["default"])(_objectSpread({}, _configureStore.initialState.profileReducer))).toEqual(_objectSpread({}, _configureStore.initialState.profileReducer));
  });
});