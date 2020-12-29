import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import DetailDelayGraph from '../DetailDelayGraph';
import Chart from "react-google-charts";

jest.mock('react-google-charts')

describe('DetailDelayGraph Component', () => {
  let wrapper = null;
  let store = null;
  const wrapperFactory = (wrapperState) => {
    store = configureStore(wrapperState);
    
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

  test('Should call Chart', () => {
    const state = {
        
      };
   
    wrapper = wrapperFactory(state);
    const detailDelayGraph = {response: {data:[{delay: 123}]}}

    render(<DetailDelayGraph detailDelayGraph={detailDelayGraph}/>, { wrapper });

    expect(Chart.mock.calls[0][0]).toBeTruthy();
  })

})