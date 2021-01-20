import React from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
//import initStore, { initialState, preloadedState } from "../redux/configureStore";
import finalStore, {
  initialState,
  preloadedState,
} from "../redux/configureStore";
// import withRedux from "next-redux-wrapper";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const store = finalStore(initialState);

export const cache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps }) {
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

// MyApp = withRedux(configureStore, (state) => ({initialState}))(MyApp);

export default MyApp;
