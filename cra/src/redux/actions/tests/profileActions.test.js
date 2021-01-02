import {
    loadProfile, addProfileWeb, deleteProfileWebs
} from "../profileActions";


describe('loadProfileWebs', () => {
    xit('returns expected value', () => {
    const result = loadProfile();

    expect(result.payload[0].name).toEqual('sport.es')
})
})

describe('addProfileWeb', () => {
    xit('returns expected value', () => {
    const url = 'nbc.com'
        const result = addProfileWeb(url);

    expect(result.type).toEqual('ADD_PROFILE_WEB')
    expect(result.payload).toEqual({name: 'nbc.com'})
})
})

describe('deleteProfileWebs', () => {
    it('returns expected value', () => {
    const urls = ['bbc.co.uk', 'amazon.com']
        const result = deleteProfileWebs(urls);

    expect(result.type).toEqual('DELETE_PROFILE_WEBS')
    expect(result.payload).toEqual(['bbc.co.uk', 'amazon.com'])
})
})
