import {
    showStatus, hideStatus, loadStatus
} from "../statusActions";
import actionTypes from "../actionTypes";


describe('showStatus', () => {
    it('returns expected value', () => {
    const result = showStatus();

    expect(result.payload).toBe(true)
})
})

describe('hideStatus', () => {
    it('returns expected value', () => {
    const result = hideStatus();

    expect(result.payload).toBe(false)
})
})

xdescribe('dispatch loadStatus', () => {
    it('dispatches', () => {
    const dispatch = jest.fn();
    jest.mock('axios')
    loadStatus(dispatch);
    
    expect(dispatch.mock.calls.length).toBe(2);

    expect(dispatch.mock.calls[0][0]).toEqual({
        type: actionTypes.LOAD_STATUS,
        payload: true
    })
})
})
