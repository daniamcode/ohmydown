import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import LoadStatusMessage from '../LoadStatusMessage';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../redux/actions/statusActions');

describe('LandingPage Component', () => {
  let wrapper = null;
  let store = null;
  const wrapperFactory = (wrapperState) => {
    store = configureStore(wrapperState);
    store.dispatch = jest.fn();

    return ({ children }) => (
      <Provider store={store}>
          {children}
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

    expect(document.querySelector('.spinner_active')).toBeInTheDocument();
  })

  test('Should render own error', () => {
    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: {}, isLoading: false, error: {response: 500}}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.error_case')).toBeInTheDocument();
  })

  test('Should render issue', () => {
    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: { data: { status: 404 } }}, isLoading: false, error: {}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.error_case')).toBeInTheDocument();
  })

  test('Should render status up', () => {
    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: { data: { status: 200 } }}, isLoading: false, error: {}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.up_case')).toBeInTheDocument();
  })

  test('Should render status down', () => {
    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: { data: { status: 500 } }}, isLoading: false, error: {}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.down_case')).toBeInTheDocument();
  })

  test('Should render default case', () => {
    const state = {
        statusReducer: {showStatus: true, loadStatus: {response: { data: { status: 'ANOTHER-RESPONSE' } }}, isLoading: false, error: {}},
      };
    wrapper = wrapperFactory(state);

    render(<LoadStatusMessage show={true} loadStatusResponse={state.statusReducer.loadStatus} />, { wrapper });

    expect(document.querySelector('.default_case')).toBeInTheDocument();
  })
})