import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import Accordion from "./SimpleAccordion";
import "../styles/Header.css";
import { hideStatus } from "../../redux/actions/statusActions";
import { useDispatch } from "react-redux";
import FaceIcon from '@material-ui/icons/Face';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 32,
    color: '#3F51B5',
    marginRight: '2vw',
    cursor: 'pointer'
  },
}));

const Header = () => {
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
      <FaceIcon className={classes.root} />
      <LockIcon className={classes.root} />
    </section>
  );
};

export default Header;
