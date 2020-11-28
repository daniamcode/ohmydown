import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../index';
import LandingPage from '../LandingPage';
import EnhancedTableLanding from "../presentational/LandingTable";

jest.mock('../../../actions/statusActions');
jest.mock(EnhancedTableLanding);

describe('LandingPage Component', () => {
  let wrapper = null;
  let store = null;
  const wrapperFactory = (wrapperInitialState) => {
    store = configureStore(wrapperInitialState);
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

  test('Should render status form', () => {
    const initialState = {statusReducer: {showStatus: false, loadStatus: {response: {}, isLoading: false, error: {}}}};
    wrapper = wrapperFactory(initialState);

    render(<LandingPage />, { wrapper });

    expect(document.querySelector('.status__form')).toBeInTheDocument();
  })
})