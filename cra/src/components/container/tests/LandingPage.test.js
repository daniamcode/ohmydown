import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import LandingPage from '../LandingPage';
import { showStatus, loadStatus } from "../../../redux/actions/statusActions";
import userEvent from '@testing-library/user-event'

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

  test('Should render status form', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<LandingPage />, { wrapper });

    expect(document.querySelector('.status__form')).toBeInTheDocument();
  })

  test('Should execute handleSubmit and call showStatus and loadStatus when clicking "Check"', () => {
    const state = {
      
    };
    wrapper = wrapperFactory(state);

    render(<LandingPage />, { wrapper });

    const form = document.querySelector('.status__form');

    fireEvent.submit(form);

    expect(showStatus).toHaveBeenCalled();
    expect(loadStatus).toHaveBeenCalled();
  });

  xtest('Manage input field', () => {
    const state = {
      
    };
    wrapper = wrapperFactory(state);

    render(<LandingPage />, { wrapper });

    userEvent.type(screen.getByRole('textbox'), 'google.com')
    expect(screen.getByRole('textbox')).toHaveValue('google.com')
  });
})