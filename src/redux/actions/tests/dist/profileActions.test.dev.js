"use strict";

var _profileActions = require("../profileActions");

describe('loadProfileWebs', function () {
  it('returns expected value', function () {
    var result = (0, _profileActions.loadProfile)();
    expect(result.payload[0].name).toEqual('sport.es');
  });
});
describe('addProfileWeb', function () {
  it('returns expected value', function () {
    var url = 'nbc.com';
    var result = (0, _profileActions.addProfileWeb)(url);
    expect(result.type).toEqual('ADD_PROFILE_WEB');
    expect(result.payload).toEqual({
      name: 'nbc.com'
    });
  });
});
describe('deleteProfileWebs', function () {
  it('returns expected value', function () {
    var urls = ['bbc.co.uk', 'amazon.com'];
    var result = (0, _profileActions.deleteProfileWebs)(urls);
    expect(result.type).toEqual('DELETE_PROFILE_WEBS');
    expect(result.payload).toEqual(['bbc.co.uk', 'amazon.com']);
  });
});