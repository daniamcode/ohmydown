import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import SimpleAccordion from '../SimpleAccordion';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('SimpleAccordion Component', () => {
  let wrapper = null;
  let store = null;
  const wrapperFactory = (wrapperState) => {
    store = configureStore(wrapperState);

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

  test('Should render accordion', () => {
    const state = {}
    wrapper = wrapperFactory(state);

    render(<SimpleAccordion />, { wrapper });

    expect(document.querySelector('.accordion')).toBeInTheDocument();
  })

  xtest('Should execute handleChange and call setExpanded when clicking link', () => {
    const state = {
      
    };
    wrapper = wrapperFactory(state);

    render(<SimpleAccordion />, { wrapper });

    const form = document.querySelector('.header__dropdown_subcategories');

    fireEvent.submit(form);

    // expect(setExpanded).toHaveBeenCalled();
  });

  xtest('Manage change', () => {
    const state = {
      
    };
    wrapper = wrapperFactory(state);

    render(<SimpleAccordion />, { wrapper });

    userEvent.click(screen.getByText('Check'))
    expect(screen.getByLabelText('Check')).toHaveAttribute('checked', true)
  });
})