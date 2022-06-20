import axios from 'axios';
import {
    loadProfile, addProfileWeb, deleteProfileWebs
} from "../profileActions";
import actionTypes from "../actionTypes";

jest.mock('axios');

describe('loadProfileWebs', () => {
    let dispatch = null;
    beforeEach(() => {
        dispatch = jest.fn();
      });
    
      afterEach(() => {
        dispatch.mockClear();
        axios.get.mockClear();
      });
    xit('returns expected value', async() => {
        // we resolve the promise with the data we want to return
        axios.get.mockReturnValueOnce(Promise.resolve({data: ['sport.es', 'md.com']}));
              
        await loadProfile()(dispatch);
        
        expect(dispatch.mock.calls[0][0].type).toStrictEqual(actionTypes.LOAD_PROFILE);
        expect(dispatch.mock.calls[0][0].payload).toStrictEqual({isLoading: true});
        expect(dispatch.mock.calls[1][0].type).toStrictEqual(actionTypes.LOAD_PROFILE);
        expect(dispatch.mock.calls[1][0].payload.isLoading).toStrictEqual(false);
        expect(dispatch.mock.calls[1][0].payload.error).toStrictEqual(undefined);
        expect(dispatch.mock.calls[1][0].payload.response).toStrictEqual({data: ['sport.es', 'md.com']});
    })
})

describe('addProfileWeb', () => {
    let dispatch = null;
    beforeEach(() => {
        dispatch = jest.fn();
      });
    
      afterEach(() => {
        dispatch.mockClear();
        axios.post.mockClear();
      });
    it('returns expected value', async() => {
        const url = 'nbc.com'

        // we resolve the promise with the data we want to return
        axios.post.mockReturnValueOnce(Promise.resolve({data: {url}}));
              
        await addProfileWeb()(dispatch);
        
        expect(dispatch.mock.calls[0][0].type).toStrictEqual(actionTypes.ADD_PROFILE_WEB);
        expect(dispatch.mock.calls[0][0].payload).toStrictEqual({isLoading: true});
        expect(dispatch.mock.calls[2][0].type).toStrictEqual(actionTypes.ADD_PROFILE_WEB);
        expect(dispatch.mock.calls[2][0].payload).toStrictEqual({isLoading:false});
        expect(dispatch.mock.calls[2][0].payload.error).toStrictEqual(undefined);
    })
})

describe('deleteProfileWebs', () => {
    let dispatch = null;
    beforeEach(() => {
        dispatch = jest.fn();
      });
    
      afterEach(() => {
        dispatch.mockClear();
        axios.delete.mockClear();
      });
    it('returns expected value', async() => {
        const urls = ['bbc.co.uk', 'amazon.com']

        // we resolve the promise with the data we want to return
        axios.delete.mockReturnValueOnce(Promise.resolve({ok: true}));
              
        await deleteProfileWebs()(dispatch);
        
        expect(dispatch.mock.calls[0][0].type).toStrictEqual(actionTypes.DELETE_PROFILE_WEBS);
        expect(dispatch.mock.calls[0][0].payload).toStrictEqual({isLoading: true});
        expect(dispatch.mock.calls[1][0].type).toStrictEqual(actionTypes.DELETE_PROFILE_WEBS);
        expect(dispatch.mock.calls[1][0].payload.response).toStrictEqual({ok: true});
        expect(dispatch.mock.calls[1][0].payload.isLoading).toStrictEqual(false);
        expect(dispatch.mock.calls[1][0].payload.error).toStrictEqual(undefined);
    })
    it('returns expected value (2)', async() => {
        const urls = ['bbc.co.uk', 'amazon.com']

        // we can decide to resolve the promise with another object
        axios.delete.mockReturnValueOnce(Promise.resolve({urls}));
        await deleteProfileWebs()(dispatch);
        expect(dispatch.mock.calls[1][0].payload.response).toStrictEqual({urls});
    })
})
