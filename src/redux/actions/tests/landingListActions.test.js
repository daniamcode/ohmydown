import axios from 'axios'
import {
    loadLandingList
} from "../landingListActions";

jest.mock('axios');

describe('dispatch loadLandingList', () => {
    let dispatch = null;
    beforeEach(() => {
        dispatch = jest.fn();
      });
    
      afterEach(() => {
        dispatch.mockClear();
        axios.post.mockClear();
      });

    test('dispatches', () => {
        loadLandingList()(dispatch);

        expect(dispatch).toHaveBeenCalled();
    })

    test('Should dispatch isLoading true when still loading', async () => {
        loadLandingList()(dispatch);
      
        expect(dispatch.mock.calls[0][0].payload.isLoading).toBe(true);
        });

    test('Should dispatch error when axios throws a generic error', async () => {
        axios.post.mockReturnValueOnce(Promise.reject({response: 'some error'}));
      
        await loadLandingList()(dispatch);
      
        expect(dispatch.mock.calls[1][0].payload.error).toStrictEqual({response: 'some error'});
        });

    test('Should dispatch error when axios throws a network error', async () => {
        axios.post.mockReturnValueOnce(Promise.reject({}));
        
        await loadLandingList()(dispatch);
        
        expect(dispatch.mock.calls[1][0].payload.error).toStrictEqual({response: 'Network Error'});
        });

    test('Should dispatch response when axios returns response', async () => {
        axios.post.mockReturnValueOnce(Promise.resolve({data:{url:'yavendras.com'}}));
          
        await loadLandingList()(dispatch);
          
        expect(dispatch.mock.calls[1][0].payload.response).toStrictEqual({data:{url:'yavendras.com'}});
        });
})
