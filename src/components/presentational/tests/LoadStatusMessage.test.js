import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import LoadStatusMessage from '../LoadStatusMessage';

jest.mock('../../../redux/actions/statusActions');

describe('LandingPage Component', () => {
  let wrapper = null;
  let store = null;
  const wrapperFactory = (wrapperState) => {
    store = configureStore(wrapperState);
    store.dispatch = jest.fn();

    return ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  };

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('Should render isLoading case', () => {

    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: {}, isLoading: true, error: {}}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.spinner-active')).toBeInTheDocument();
  })

  test('Should render status error', () => {

    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: {}, isLoading: false, error: {response: 500}}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.error-case')).toBeInTheDocument();
  })

  test('Should render status up', () => {

    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: { data: { status: 'UP' } }}, isLoading: false, error: {}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.up-case')).toBeInTheDocument();
  })

  test('Should render status down', () => {

    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: { data: { status: 'DOWN' } }}, isLoading: false, error: {}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.down-case')).toBeInTheDocument();
  })

  test('Should render default case', () => {

    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: { data: { status: 'ANOTHER-RESPONSE' } }}, isLoading: false, error: {}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.default-case')).toBeInTheDocument();
  })
})