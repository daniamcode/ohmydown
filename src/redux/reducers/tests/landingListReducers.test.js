import landingListReducers, { initialState } from '../landingListReducers';
import actionTypes from '../../actions/actionTypes';

describe('Landing list reducer', () => {
  it('should return initial state', () => {
    expect(landingListReducers()).toEqual(initialState);
  });

  it('should handle LOAD_LANDING_LIST', () => {
    let result = {landingList: {response: {status: 'DOWN'}, isLoading: false}}
    expect(
      landingListReducers(
        {
          ...initialState,
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
          ...initialState,
        }
      ),
    ).toEqual({
      ...initialState
    });
  })
})