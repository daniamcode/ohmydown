import React from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import useStore, {
  initialState,
} from "../redux/configureStore";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import ReactGA from 'react-ga';

const store = useStore(initialState);

export const cache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps }) {
  ReactGA.initialize('G-QMT6YX9BD8');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

// MyApp.getServerSideProps = async ({ Component, ctx }) => {
//   const pageProps = Component.getServerSideProps
//     ? await Component.getServerSideProps(ctx)
//     : {};
//   return { pageProps };
// };

export default MyApp;
