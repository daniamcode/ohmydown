import landingListReducers from '../landingListReducers';
import { initialState } from '../../configureStore';
import actionTypes from '../../actions/actionTypes';

describe('Landing list reducer', () => {
  it('should handle no initial state and no action', () => {
    expect(landingListReducers()).toEqual({});
  });

  it('should handle initial state and no action', () => {
    expect(landingListReducers(initialState.landingListReducer)).toEqual({landingList: {response: {}, isLoading: false, error: {}}});
  });

  it('should handle LOAD_LANDING_LIST', () => {
    let result = {landingList: {response: {status: 'DOWN'}, isLoading: false}}
    expect(
      landingListReducers(
        {
          ...initialState.landingListReducer,
        },
        {
          type: actionTypes.LOAD_LANDING_LIST,
          payload: {response: {status: 'DOWN'}, isLoading: false}
        },
      ),
    ).toEqual(
        result
    );
  })

  it('should handle default', () => {
    expect(
      landingListReducers(
        {
          ...initialState.landingListReducer,
        }
      ),
    ).toEqual({
      ...initialState.landingListReducer
    });
  })
})