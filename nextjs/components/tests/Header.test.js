import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import Header from '../Header';
import { hideStatus } from "../../redux/actions/statusActions";
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../redux/actions/statusActions');

jest.mock("next/link", () => {
  return ({children}) => {
    return children;
  }
});

describe('Header Component', () => {
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

  test('Should render header', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<Header />, { wrapper });

    expect(document.querySelector('.header')).toBeInTheDocument();
  })

  test('Should execute handleClick and call hideStatus when clicking link', () => {
    const state = {};
    
    wrapper = wrapperFactory(state);

    render(<Header />, { wrapper });

    const form = screen.getByTestId('logo')

    fireEvent.click(form);

    expect(hideStatus).toHaveBeenCalled();
    expect(hideStatus).toHaveBeenCalledTimes(1)
  });
})