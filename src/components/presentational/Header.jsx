import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import Accordion from "./SimpleAccordion";
import "../styles/Header.css";
import { hideStatus } from "../../redux/actions/statusActions";
import { useDispatch } from "react-redux";
import FaceIcon from "@material-ui/icons/Face";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../container/Login";
import Logout from "../container/Logout";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 32,
    color: "#3F51B5",
    marginRight: "2vw",
    cursor: "pointer",
  },
}));

const Header = () => {
  const token = useSelector(
    (state) => state.googleReducer.authResponse?.accessToken
  );
  console.log(token);
  let dispatch = useDispatch();
  const classes = useStyles();

  function handleClick() {
    dispatch(hideStatus());
  }

  return (
    <section className="header">
      <div>
        <Link to="/">
          <img
            className="header__logo"
            src={logo}
            alt="Logo"
            onClick={handleClick}
          />
        </Link>
      </div>
      <div className="header__dropdown">
        <Accordion />
      </div>
      <div className="separator"></div>

      {token ? (
        <>
          <Link to="/profile">
            <FaceIcon className={classes.root} />
          </Link>
          <Logout />
        </>
      ) : (
        <Login />
      )}
    </section>
  );
};

export default Header;
