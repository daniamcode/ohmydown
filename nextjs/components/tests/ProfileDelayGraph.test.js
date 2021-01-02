import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import ProfileDelayGraph from '../ProfileDelayGraph';
import Chart from "react-google-charts";

jest.mock('react-google-charts')

describe('ProfileDelayGraph Component', () => {
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

  test('Should call Chart', () => {
    const state = {
        
      };
   
    wrapper = wrapperFactory(state);

    render(<ProfileDelayGraph />, { wrapper });

    expect(Chart.mock.calls[0][0]).toBeTruthy();
  })

})