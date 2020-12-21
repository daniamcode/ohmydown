import profileReducers from '../profileReducers';
import { initialState } from '../../configureStore';
import actionTypes from '../../actions/actionTypes';

describe('Profile reducer', () => {
  it('should handle no initial state and no action', () => {
    expect(profileReducers()).toEqual({});
  });

  it('should handle initial state and no action', () => {
    expect(profileReducers(initialState.profileReducer)).toEqual({ profile: {response: {}, isLoading: false, error: {}} });
  });

  it('should handle LOAD_PROFILE_WEBS', () => {
    let result = {profile: {response: [{name: 'sport.es'}, {name: 'amazon.com'}]}, isLoading: false, error: {}}
    expect(
      profileReducers(
        {
          ...initialState.profileReducer,
        },
        {
          type: actionTypes.LOAD_PROFILE_WEBS,
          payload: {response: [{name: 'sport.es'}, {name: 'amazon.com'}], isLoading: false}
        },
      ),
    ).toEqual(
        result
    );
  })

  xit('should handle ADD_PROFILE_WEB', () => {
    initialState.profileReducer.profile = [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}]
    let result = {profile: [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}, {name: 'amazon.com'}]}
    
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

  xit('should handle DELETE_PROFILE_WEBS', () => {
    initialState.profileReducer.profile = [{name: 'sport.es'}, {name: 'yavendras.com'}, {name: 'google.com'}]
    let result = {profile: [{name: 'yavendras.com'}]}
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