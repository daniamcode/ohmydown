import axios from 'axios'
import {
    showStatus, hideStatus, loadStatus
} from "../statusActions";
import actionTypes from "../actionTypes";
import { loadProfileWebs } from '../profileActions';

jest.mock('axios');

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

describe('dispatch loadStatus', () => {
    let dispatch = null;
    beforeEach(() => {
        dispatch = jest.fn();
      });
    
      afterEach(() => {
        dispatch.mockClear();
        axios.post.mockClear();
      });

    test('dispatches', () => {
        loadStatus()(dispatch);

        expect(dispatch).toHaveBeenCalled();
    })

    test('Should dispatch error when axios throws a generic error', async () => {
        axios.post.mockReturnValueOnce(Promise.reject({response: 'some error'}));
      
        await loadStatus()(dispatch);
      
        expect(dispatch.mock.calls[1][0].payload.error).toStrictEqual({response: 'some error'});
        });

    test('Should dispatch error when axios throws a network error', async () => {
        axios.post.mockReturnValueOnce(Promise.reject({}));
        
        await loadStatus()(dispatch);
        
        expect(dispatch.mock.calls[1][0].payload.error).toStrictEqual({response: 'Network Error'});
        });

    test('Should dispatch response when axios returns short url', async () => {
        axios.post.mockReturnValueOnce(Promise.resolve({data:{url:'yavendras.com'}}));
          
        await loadStatus()(dispatch);
          
        expect(dispatch.mock.calls[1][0].payload.response).toStrictEqual({data:{url:'yavendras.com'}});
        });

    test('Should dispatch response when axios returns long url', async () => {
        axios.post.mockReturnValueOnce(Promise.resolve({data:{url:'abcdefghijklmnopqrstuvwxyzabcdefghijklmn.com'}}));
              
        await loadStatus()(dispatch);
              
        expect(dispatch.mock.calls[1][0].payload.response).toStrictEqual({data:{url:'abcdefghijklmnopqrstuvwxyzabcdefghi...'}});
        });
})
