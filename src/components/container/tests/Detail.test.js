import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import Detail from '../Detail';
import Chart from "react-google-charts";

jest.mock('react-google-charts')

describe('Detail Component', () => {
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

  test('Should render detail', () => {
    const state = {
   
    };

    wrapper = wrapperFactory(state);

    render(<Detail match={{params: {url: 'yavendras.com'}}}/>, { wrapper });

    expect(document.querySelector('.detail')).toBeInTheDocument();
    expect(Chart.mock.calls[0][0]).toBeTruthy();
  })

})