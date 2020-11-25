import rootReducer from './rootReducer';

xdescribe('rootReducer', () => {
    it('calls combineReducers', () => {
    const combineReducers = jest.fn();
    rootReducer()
    
    expect(combineReducers.mock.calls.length).toBe(1);
})
})