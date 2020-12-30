import '../styles/globals.css'
import {Provider} from 'react-redux';
import configureStore, { initialState } from '../redux/configureStore'

const store = configureStore(initialState);

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )}

export default MyApp
