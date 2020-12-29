import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showStatus, hideStatus, loadStatus } from "../../redux/actions/statusActions";
import EnhancedTableLanding from "../presentational/LandingTable";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import LoadStatusMessage from "../presentational/LoadStatusMessage";
import { useSelector } from "react-redux";
import { loadLandingList } from "../../redux/actions/landingListActions";
import Countdown from 'react-countdown';
import LandingForm from '../presentational/LandingForm'


const LandingPage = () => {
  let [url, setUrl] = useState("");
  let dispatch = useDispatch();
  const loadStatusResponse = useSelector((state) => state.statusReducer.loadStatus);
  const show = useSelector((state) => state.statusReducer.showStatus);
  const rawRows = useSelector((state) => state.landingListReducer.landingList);
  const token = useSelector((state) => state.googleReducer.authResponse?.token);

  let timer = Date.now() + 300000

  useEffect(() => {
    dispatch(loadLandingList(token));
    const interval = setInterval(()=>{
      dispatch(loadLandingList(token));
    },300000)
    
    return()=>clearInterval(interval)
    
  }, [dispatch, token]);

  const onFieldChange = (value, setValue) => {
    dispatch(hideStatus());
    setValue(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch(showStatus());
    dispatch(loadStatus(url, token));
  }
 
  return (
    <section className="center">
    <div className="status__form-container">
      <LandingForm url={url} setUrl={setUrl} onFieldChange={onFieldChange} handleSubmit={handleSubmit}/>
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
