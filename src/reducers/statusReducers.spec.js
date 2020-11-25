import statusReducers, { initialState } from './statusReducers';
import actionTypes from '../actions/actionTypes';

describe('Status reducer', () => {
  it('should return initial state', () => {
    expect(statusReducers()).toEqual(initialState);
  });

  it('should handle SHOW_STATUS', () => {
    expect(
      statusReducers(
        {
          ...initialState,
        },
        {
          type: actionTypes.SHOW_STATUS,
        },
      ),
    ).toEqual({
      ...initialState,
      showStatus: actionTypes.payload
    });
  })

  it('should handle LOAD_STATUS', () => {
    expect(
      statusReducers(
        {
          ...initialState,
        },
        {
          type: actionTypes.LOAD_STATUS,
        },
      ),
    ).toEqual({
      ...initialState,
      loadStatus: actionTypes.payload
    });
  })

  it('should handle default', () => {
    expect(
      statusReducers(
        {
          ...initialState,
        }
      ),
    ).toEqual({
      ...initialState
    });
  })
})