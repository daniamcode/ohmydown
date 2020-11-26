import rootReducer from './rootReducer';
import {createStore} from "redux";
import statusReducer from './statusReducers'
import profileReducer from './profileReducers'
import landingListReducer from './landingListReducers'

describe('rootReducer', () => {
    it('tests rootReducer', () => {
        let store = createStore(rootReducer)

        // check that initial state of the root reducer matches what child reducers return given an empty action
        
        expect(store.getState().statusReducer).toEqual(statusReducer({showStatus: false, loadStatus: {response: {}, isLoading: false, error: {}}}, {}))
        expect(store.getState().profileReducer).toEqual(profileReducer( {profileUrls: []}, {}))
        expect(store.getState().landingListReducer).toEqual(landingListReducer( {landingList: {response: {}, isLoading: false, error: {}}}, {}))
})
})