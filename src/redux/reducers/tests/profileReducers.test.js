import profileReducers from '../profileReducers';
import { initialState } from '../../configureStore';
import actionTypes from '../../actions/actionTypes';

describe('Profile reducer', () => {
  it('should handle no initial state and no action', () => {
    expect(profileReducers()).toEqual({});
  });

  it('should handle initial state and no action', () => {
    expect(profileReducers(initialState.profileReducer)).toEqual({ profileUrls: [] });
  });

  it('should handle LOAD_PROFILE_WEBS', () => {
    let result = {profileUrls: [{name: 'sport.es'}, {name: 'amazon.com'}]}
    expect(
      profileReducers(
        {
          ...initialState.profileReducer,
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
    initialState.profileReducer.profileUrls = [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}]
    let result = {profileUrls: [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}, {name: 'amazon.com'}]}
    
    expect(
      profileReducers(
        {
          ...initialState.profileReducer,
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
    initialState.profileReducer.profileUrls = [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}]
    let result = {profileUrls: [{name: 'yavendras.com'}]}
    expect(
      profileReducers(
        {
          ...initialState.profileReducer,
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
          ...initialState.profileReducer,
        }
      ),
    ).toEqual({
      ...initialState.profileReducer
    });
  })

})