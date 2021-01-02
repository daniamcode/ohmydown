import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import Profile from '../profile';
import { addProfileWeb } from "../../redux/actions/profileActions";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../redux/actions/profileActions');

describe('Profile Component', () => {
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

  xtest('Should render profile', () => {
    const state = {
      profileReducer: { profile: [{url:'yavendras.com'}] },
    };
    wrapper = wrapperFactory(state);

    render(<Profile />, { wrapper });

    expect(document.querySelector('.profile')).toBeInTheDocument();
  })

  xtest('Should execute handleSubmit and call addProfileWeb when clicking "Add"', () => {
    const state = {
      profileReducer: { profile: [{url:'yavendras.com'}] },
    };
    wrapper = wrapperFactory(state);

    render(<Profile />, { wrapper });

    const form = document.querySelector('.profile__add');

    fireEvent.submit(form);

    expect(addProfileWeb).toHaveBeenCalled();
  });

  xtest('Manage input field', () => {
    const state = {
      profileReducer: { profile: [{url:'yavendras.com'}] },
    };
    wrapper = wrapperFactory(state);

    render(<Profile />, { wrapper });

    userEvent.type(screen.getByRole('textbox'), 'google.com')
    expect(screen.getByRole('textbox')).toHaveValue('google.com')
  });

})