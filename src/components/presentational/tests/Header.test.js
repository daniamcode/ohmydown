import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import Header from '../../presentational/Header';
import { hideStatus } from "../../../redux/actions/statusActions";

jest.mock('../../../redux/actions/statusActions');

describe('Header Component', () => {
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

  test('Should render header', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<Header />, { wrapper });

    expect(document.querySelector('.header')).toBeInTheDocument();
  })

  test('Should execute handleClick and call hideStatus when clicking link', () => {
    const state = {
      
    };
    wrapper = wrapperFactory(state);

    render(<Header />, { wrapper });

    const form = document.querySelector('.header__logo');

    fireEvent.click(form);

    expect(hideStatus).toHaveBeenCalled();
  });
})