import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showStatus, hideStatus, loadStatus } from "../../redux/actions/statusActions";
import EnhancedTableLanding from "../presentational/LandingTable";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import LoadStatusMessage from "../presentational/LoadStatusMessage";
import { useSelector } from "react-redux";
import { loadLandingList } from "../../redux/actions/landingListActions";
import Countdown from 'react-countdown';
import {LANDING_PAGE_TITLE} from '../../data/constants'
import {LANDING_PAGE_SUBTITLE} from '../../data/constants'


const LandingPage = () => {
  let [url, setUrl] = useState("");
  let dispatch = useDispatch();
  const loadStatusResponse = useSelector((state) => state.statusReducer.loadStatus);
  const show = useSelector((state) => state.statusReducer.showStatus);
  const rawRows = useSelector((state) => state.landingListReducer.landingList);

  let timer = Date.now() + 300000

  useEffect(() => {
    dispatch(loadLandingList());
    const interval = setInterval(()=>{
      dispatch(loadLandingList());
    },300000)
    
    return()=>clearInterval(interval)
    
  }, [dispatch]);

  const onFieldChange = (value, setValue) => {
    dispatch(hideStatus());
    setValue(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch(showStatus());
    dispatch(loadStatus(url));
  }
 
  return (
    <section className="center">
    <div className="status__form-container">
      <form className="status__form" onSubmit={handleSubmit}>
        <label className="status__form-label">
          {LANDING_PAGE_TITLE}
          <br />
          {LANDING_PAGE_SUBTITLE}
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
      <LoadStatusMessage
      show = {show} loadStatusResponse={loadStatusResponse} />
      </section>
      <p className="link-to-profile">
        You can go to your <Link to="/profile">Profile</Link> and add up to 5 websites
        to follow their uptimes and delays for free, with customized monitoring and notifications.
      </p>
      <h3 className="landingTable__title">Looking after 1000+ website's health:</h3>
      <p>(New real-time data in <span> </span>
      <Countdown className="landingPage__countdown" date={timer} daysInHours={true} overtime={true} />)</p>
      <EnhancedTableLanding rawRows={rawRows}/>
      <br></br>
    </div>
    </section>
  );
};

export default LandingPage;
