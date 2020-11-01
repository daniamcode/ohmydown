// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

// import {
//     showStatus
// } from "./showStatus";
// import actionTypes from "./actionTypes";

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// // allows us to easily return reponses and/or success/fail for a thunk that calls a service
// const mockServiceCreator = (body, succeeds = true) => () =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
//     });

// describe('authenticate action', () => {
//     let store;
//     // set up a fake store for all our tests
//     beforeEach(() => {
//         store = mockStore({
//             phoneNumbers: []
//         });
//     });
// })



// describe('when a user logs in', () => {
//     it('fires a login request action', () =>
//         store
//         .dispatch(showStatus({
//                 username: 'user',
//                 password: 'pass'
//             },
//             mockServiceCreator(REQUIRED_BODY),
//         ))
//         .then(() => expect(store.getActions()).toContainEqual({
//             type: SHOW_STATUS
//         })))
// })