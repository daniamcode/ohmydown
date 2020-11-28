import profileReducers, { initialState } from '../profileReducers';
import actionTypes from '../../actions/actionTypes';

describe('Profile reducer', () => {
  it('should return initial state', () => {
    expect(profileReducers()).toEqual(initialState);
  });

  it('should handle LOAD_PROFILE_WEBS', () => {
    let result = {profileUrls: [{name: 'sport.es'}, {name: 'amazon.com'}]}
    expect(
      profileReducers(
        {
          ...initialState,
        },
        {
          type: actionTypes.LOAD_PROFILE_WEBS,
          payload: [{name: 'sport.es'}, {name: 'amazon.com'}]
        },
      ),
    ).toEqual(
        result
    );
  })

  it('should handle ADD_PROFILE_WEB', () => {
    initialState.profileUrls = [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}]
    let result = {profileUrls: [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}, {name: 'amazon.com'}]}
    
    expect(
      profileReducers(
        {
          ...initialState,
        },
        {
          type: actionTypes.ADD_PROFILE_WEB,
          payload: {name:'amazon.com'}
        },
      ),
    ).toEqual(
      result
    );
  })

  it('should handle DELETE_PROFILE_WEBS', () => {
    initialState.profileUrls = [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}]
    let result = {profileUrls: [{name: 'yavendras.com'}]}
    expect(
      profileReducers(
        {
          ...initialState,
        },
        {
          type: actionTypes.DELETE_PROFILE_WEBS,
          payload: ['google.com', 'sport.es']
        },
      ),
    ).toEqual(
        result
    );
  })

it('should handle default', () => {
    expect(
      profileReducers(
        {
          ...initialState,
        }
      ),
    ).toEqual({
      ...initialState
    });
  })

})