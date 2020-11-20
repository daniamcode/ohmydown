import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loadStatus } from "../actions/loadStatus";
import { showStatus } from "../actions/showStatus";
import { hideStatus } from "../actions/hideStatus";
import Spinner from "./Spinner";
import EnhancedTable from "./EnhancedTable";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = ({ show, status, isLoading }) => {
  let [url, setUrl] = useState("");
  let dispatch = useDispatch();

  function onFieldChange(value, setValue) {
    dispatch(hideStatus);
    setValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    dispatch(showStatus);
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
        ) : isLoading === true ? (
          <Spinner />
        ) : status === undefined ? (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__up")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__down")}{" "}
            {document.getElementById('status-message')?.classList.add("status__error")}Sorry, that was an
            error, try again!
          </h1>
        ) : status.data.status === "UP" ? (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__error")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__down")}{" "}
            {document.getElementById('status-message')?.classList.add("status__up")}
            {status.data.url} is {status.data.status}!
            <p className="status__delay">
              There was a delay of {status.data.delay} ms.
            </p>
          </h1>
        ) : (
          <h1>
            {document.getElementById('status-message')?.classList.remove("status__initial")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__error")}{" "}
            {document.getElementById('status-message')?.classList.remove("status__up")}{" "}
            {document.getElementById('status-message')?.classList.add("status__down")}
            {status.data.url} is {status.data.status}!
          </h1>
        )}
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
