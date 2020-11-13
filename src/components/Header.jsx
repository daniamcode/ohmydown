import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import Accordion from "./SimpleAccordion";
import LoginButton from "./Login";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div>
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
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
