import React from "react";
import { useDispatch } from "react-redux";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleLogin } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../data/constants";
import { googleOAuth2 } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 32,
    color: "#3F51B5",
    marginRight: "2vw",
    cursor: "pointer",
  },
}));

const Login = () => {
  const classes = useStyles();
  let dispatch = useDispatch();
  let history = useHistory();

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
      onSuccess={(response) => {
        dispatch(googleOAuth2(response));
        history.push("/profile");
      }}
      onFailure={(response) => {
        dispatch(googleOAuth2(response));
        history.push("/");
      }}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default Login;
