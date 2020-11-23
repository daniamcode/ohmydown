import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showStatus, hideStatus, loadStatus } from "../actions/statusActions";
import Spinner from "./Spinner";
import EnhancedTable from "./EnhancedTableLanding";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = ({ show, loadStatusResponse }) => {
  let [url, setUrl] = useState("");
  let dispatch = useDispatch();

  function onFieldChange(value, setValue) {
    dispatch(hideStatus());
    setValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    dispatch(showStatus());
    dispatch(loadStatus(url));
  }
 
  return (
    <div className="status__form-container">
      <form className="status__form" onSubmit={handleSubmit}>
        <label className="status__form-label">
          Welcome to Caucana!
          <br />
          Is your site up or down?
        </label>
        <div className="status__form-inner-container">
          <TextField
            id="filled-basic"
            variant="filled"
            className="status__form-input"
            placeholder="Write any url here"
            name="url"
            required
            value={url}
            onChange={(event) => onFieldChange(event.target.value, setUrl)}
          />
          <Button
            variant="contained"
            color="primary"
            className="status__form-button"
            type="submit"
          >
            Check
          </Button>
        </div>
      </form>
      <section id="status-message" className="status__result">
        {!show ? (
          <></>
        ) : loadStatusResponse.isLoading === true ? (
          <Spinner />
        ) : loadStatusResponse?.error?.response?.status === 400 ? (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__up")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__down")}{" "}
            {document.getElementById('status-message')?.classList.add("status__error")}Sorry, that was an
            invalid domain name, try again!
          </h1>
        ) : loadStatusResponse?.error?.response?.status === 408 ? (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__up")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__down")}{" "}
            {document.getElementById('status-message')?.classList.add("status__error")}Sorry, that was a
            timeout, try again!
          </h1>
        ) : (loadStatusResponse?.error?.response?.status >= 500 || loadStatusResponse?.error?.response?.status < 600) ? (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__up")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__down")}{" "}
            {document.getElementById('status-message')?.classList.add("status__error")}Sorry, our server is overloaded, please try again later!
          </h1>
        ) : loadStatusResponse?.error?.response === 'Network Error' ? (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__up")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__down")}{" "}
            {document.getElementById('status-message')?.classList.add("status__error")}Sorry, our server is down now, please try again later!
          </h1>
        ) : loadStatusResponse?.response?.data?.status === 'UP' ? (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__error")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__down")}{" "}
            {document.getElementById('status-message')?.classList.add("status__up")}
            {loadStatusResponse?.response?.data?.url} is {loadStatusResponse?.response?.data?.status}!
            <p className="status__delay">
              There was a delay of {loadStatusResponse?.response?.data?.delay} ms.
            </p>
          </h1>
        ) : loadStatusResponse?.response?.data?.status === 'DOWN' ? (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__error")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__up")}{" "}
            {document.getElementById('status-message')?.classList.add("status__down")}
            {loadStatusResponse?.response?.data?.url} is {loadStatusResponse?.response?.data?.status}!
          </h1>
        ) : <></>}
      </section>
      <p className="link-to-profile">
        Go to your <Link to="/profile">Profile</Link> and add up to 5 websites
        to follow their uptimes for free, with free monitoring and notifications
        if you want to.
      </p>
      <EnhancedTable />
      <br></br>
    </div>
  );
};

export default LandingPage;
