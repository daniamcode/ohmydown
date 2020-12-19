import React from "react";
import { useDispatch } from "react-redux";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleLogout } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../data/constants";
import { googleOAuth2 } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 40,
    color: "#3F51B5",
    marginRight: "2vw",
    cursor: "pointer",
    marginTop: "0vw"
  },
}));

const Logout = () => {
  const classes = useStyles();
  let dispatch = useDispatch();
  let history = useHistory();
  
  return (
    <>
      <GoogleLogout
        clientId={GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <LockOpenIcon
            className={classes.root}
            onClick={renderProps.onClick}
          />
        )}
        onLogoutSuccess={(response) => {
          document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          dispatch(googleOAuth2())
            history.push("/");}}
      />
    </>
  );
};

export default Logout;
