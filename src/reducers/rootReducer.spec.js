import rootReducer from './rootReducer';

describe('rootReducer', () => {
    it('calls combineReducers', () => {
    const combineReducers = jest.fn();
    rootReducer()
    
    expect(combineReducers.mock.calls.length).toBe(1);
})
})