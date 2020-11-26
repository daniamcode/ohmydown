import statusReducers, { initialState } from '../statusReducers';
import actionTypes from '../../actions/actionTypes';

describe('Status reducer', () => {
  it('should return initial state', () => {
    expect(statusReducers()).toEqual(initialState);
  });

  it('should handle SHOW_STATUS', () => {
    let result = {showStatus: true, loadStatus: {response: {}, isLoading: false, error: {}}}
    expect(
      statusReducers(
        {
          ...initialState,
        },
        {
          type: actionTypes.SHOW_STATUS,
          payload: true
        },
      ),
    ).toEqual(
        result
    );
  })

  it('should handle LOAD_STATUS', () => {
    let result = {showStatus: false, loadStatus: {response: {status: 'UP'}, isLoading: false}}
    expect(
      statusReducers(
        {
          ...initialState,
        },
        {
          type: actionTypes.LOAD_STATUS,
          payload: {response: {status: 'UP'}, isLoading: false}
        },
      ),
    ).toEqual(
        result
    );
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