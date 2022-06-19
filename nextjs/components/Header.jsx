import React, {useEffect} from "react";
import Link from "next/link";
import Accordion from "./SimpleAccordion";
import headerStyles from "../styles/Header.module.css";
import { hideStatus } from "../redux/actions/statusActions";
import { useDispatch } from "react-redux";
import FaceIcon from "@material-ui/icons/Face";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { googleOAuth2 } from "../redux/actions/authActions";
// import Image from 'next/image'

const Header = (props) => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(googleOAuth2());
  }, [dispatch]);

  const token = useSelector((state) => state.googleReducer.authResponse?.token);

  const logo = require("../img/logo.png");

  const useStyles = makeStyles((theme) => ({
    root: {
      fontSize: 40,
      color: "#3F51B5",
      marginRight: "2vw",
      cursor: "pointer",
    },
  }));

  const classes = useStyles();

  function handleClick() {
    dispatch(hideStatus());
  }
  return (
    <section className={headerStyles.header}>
      <div>
        <Link href="/">
          <img
            className={headerStyles.header__logo}
            data-testid="logo"
            src={logo}
            alt="Logo"
            onClick={handleClick}
          />
        </Link>
      </div>
      <div className={headerStyles.header__dropdown}>
        <Accordion />
      </div>
      <div className={headerStyles.separator}></div>
      {token ? (
        <div className={headerStyles.header__buttons}>
          <Link href="/profile">
            <FaceIcon className={classes.root} />
          </Link>
          <Logout />
        </div>
      ) : (
        <div className={headerStyles.header__buttons}>
          <Login />
        </div>
      )}
    </section>
  );
};

// export async function getServerSideProps() {
//   return {
//     props: {
      
//     },
//   };
// }

export default Header;
