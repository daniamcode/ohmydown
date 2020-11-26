import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import Accordion from "./SimpleAccordion";
import LoginButton from "./Login";
import "../styles/Header.css";
import { hideStatus } from "../../actions/statusActions";
import { useDispatch } from "react-redux";

const Header = () => {
  let dispatch = useDispatch();

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
      <LoginButton className="header__profile" />
    </section>
  );
};

export default Header;
