import statusReducers from '../statusReducers';
import { initialState } from '../../configureStore';
import actionTypes from '../../actions/actionTypes';

describe('Status reducer', () => {
  it('should handle no initial state and no action', () => {
    expect(statusReducers()).toEqual({});
  });

  it('should handle initial state and no action', () => {
    expect(statusReducers(initialState.statusReducer)).toEqual({showStatus: false, loadStatus: {response: {}, isLoading: false, error: {}}});
  });

  it('should handle SHOW_STATUS', () => {
    let result = {showStatus: true, loadStatus: {response: {}, isLoading: false, error: {}}}
    expect(
      statusReducers(
        {
          ...initialState.statusReducer,
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
          ...initialState.statusReducer,
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
          ...initialState.statusReducer,
        }
      ),
    ).toEqual({
      ...initialState.statusReducer
    });
  })
})