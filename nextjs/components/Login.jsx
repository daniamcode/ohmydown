import React from "react";
import { useDispatch } from "react-redux";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleLogin } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../data/constants";
import { googleOAuth2 } from "../redux/actions/authActions";
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 40,
    color: "#3F51B5",
    marginRight: "2vw",
    cursor: "pointer",
  },
}));

const Login = () => {
  const classes = useStyles();
  let dispatch = useDispatch();
  const router = useRouter()

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <LockIcon
          className={classes.root}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        />
      )}
      // uxMode="redirect"
      // redirectUri="http://localhost:3000/"
      onSuccess={(response) => {
        document.cookie = `token = ${response.tokenId}; path=/; Max-Age=2592000` 
        document.cookie = `name = ${response.profileObj.name}; path=/; Max-Age=2592000`
        dispatch(googleOAuth2());
        // Make sure we're in the browser
        if (typeof window !== 'undefined') {
          router.push('/profile')}
      }}
      onFailure={(response) => {
        dispatch(googleOAuth2());
        router.push('/')
      }}
      cookiePolicy={"single_host_origin"}
      isSignedIn={false}
    />
  );
};


// export async function getServerSideProps(ctx) {
//   if (ctx && ctx.req) {
//     console.log('server side')
//     ctx.res.writeHead(302, {Location: `/profile`})
//     ctx.res.end()
// } else {
//     console.log('client side')
//     Router.push(`/profile`)
// }
// }

export default Login;
