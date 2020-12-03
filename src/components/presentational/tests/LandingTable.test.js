import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import LandingTable from '../../presentational/LandingTable';
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TablePagination from "@material-ui/core/TablePagination";
// import TableRow from "@material-ui/core/TableRow";
// import TableSortLabel from "@material-ui/core/TableSortLabel";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Switch from "@material-ui/core/Switch";

// jest.mock('@material-ui/core/Table')
// jest.mock('@material-ui/core/TableBody')
// jest.mock('@material-ui/core/TableCell')
// jest.mock('@material-ui/core/TableContainer')
// jest.mock('@material-ui/core/TableHead')
// jest.mock('@material-ui/core/TablePagination')
// jest.mock('@material-ui/core/TableRow')
// jest.mock('@material-ui/core/TableSortLabel')
// jest.mock('@material-ui/core/Toolbar')
// jest.mock('@material-ui/core/Typography')
// jest.mock('@material-ui/core/Paper')
// jest.mock('@material-ui/core/FormControlLabel')
// jest.mock('@material-ui/core/Switch')

describe('LandingTable Component', () => {
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

  xtest('Should render LandingTable', () => {
    const state = {
   
    };

    wrapper = wrapperFactory(state);

    render(<LandingTable rawRows={'yavendras.com'}/>, { wrapper });

    expect(document.querySelector('.{classes.root}')).toBeInTheDocument();
  })

})