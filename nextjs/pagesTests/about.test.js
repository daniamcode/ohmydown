import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import About from '../pages/about';
// import '@testing-library/jest-dom/extend-expect';
// import {describe, expect } from '@jest/globals'

describe('About Component', () => {
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

  test('Should render about', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<About />, { wrapper });

    expect(document.querySelector('.about')).toBeInTheDocument();
  })
})