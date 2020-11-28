import rootReducer from '../rootReducer';
import {
    createStore
} from "redux";

describe('rootReducer', () => {
    it('initial situation', () => {
        let store = createStore(rootReducer)

        expect(store.getState().statusReducer).toEqual({})
        expect(store.getState().profileReducer).toEqual({})
        expect(store.getState().landingListReducer).toEqual({})
    })
})