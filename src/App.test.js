import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

test('renders some text', () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  render(<Provider store={store}><App /></Provider>);
  const textElement = screen.getByText(/We show in real time/);
  expect(textElement).toBeInTheDocument();
});

