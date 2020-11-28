import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import LoadStatusMessage from '../LoadStatusMessage';

jest.mock('../../../redux/actions/statusActions');

xdescribe('LandingPage Component', () => {
  let wrapper = null;
  let store = null;
  const wrapperFactory = () => {
    store = configureStore();
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

  test('Should render status message', () => {
    
    wrapper = wrapperFactory();

    render(<LoadStatusMessage />, { wrapper });

    expect(document.querySelector('.status__message')).toBeInTheDocument();
  })
})