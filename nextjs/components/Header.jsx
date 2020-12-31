import React from "react";
// import logo from "../img/logo.png";
import Link from "next/link";
import Image from 'next/image'
import Accordion from "./SimpleAccordion";
import styles from "../styles/Header.module.css";
import { hideStatus } from "../redux/actions/statusActions";
import { useDispatch } from "react-redux";
import FaceIcon from "@material-ui/icons/Face";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";
import Logout from "./Logout";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 40,
    color: "#3F51B5",
    marginRight: "2vw",
    cursor: "pointer",
  },
}));

const Header = () => {
  const token = useSelector(
    (state) => state.googleReducer.authResponse?.token
  );
  let dispatch = useDispatch();
  const classes = useStyles();

  function handleClick() {
    dispatch(hideStatus());
  }

  return (
    <section className={styles.header}>
      <div>
        <Link href="/">
          {/* <Image
            className={styles.header__logo}
            src={logo}
            alt="Logo"
            onClick={handleClick}
          /> */}
          <a>Home</a>
        </Link>
      </div>
      <div className={styles.header__dropdown}>
        <Accordion />
      </div>
      <div className={styles.separator}></div>

      {token ? (
        <div className={styles.header__buttons}>
          <Link href="/profile">
            <FaceIcon className={classes.root} />
          </Link>
          <Logout />
        </div>
      ) : (
        <div className={styles.header__buttons}>
          <Login />
        </div>
      )}
    </section>
  );
};

export default Header;
