import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import Contact from '../Contact';
import '@testing-library/jest-dom/extend-expect';

describe('Contact Component', () => {
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

  test('Should render contact', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<Contact />, { wrapper });

    expect(document.querySelector('.contact')).toBeInTheDocument();
  })
})