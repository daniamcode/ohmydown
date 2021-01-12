import React from "react";
import PropTypes from "prop-types";
import "../styles/globals.css";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import configureStore, { initialState } from "../redux/configureStore";
import withRedux from "next-redux-wrapper";

const store = configureStore(initialState);

function MyApp({ Component, pageProps }) {
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <React.Fragment>
        {/* <ThemeProvider theme={theme}> */}
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <CssBaseline /> */}
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        {/* </ThemeProvider> */}
    </React.Fragment>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };

// MyApp.getServerSideProps = async ({ Component, ctx }) => {
//   const pageProps = Component.getServerSideProps
//     ? await Component.getServerSideProps(ctx)
//     : {};
//   return { pageProps };
// };

MyApp = withRedux(configureStore, (state) => ({initialState}))(MyApp);

export default MyApp;
