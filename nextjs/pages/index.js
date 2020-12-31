import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/LandingPage.module.css";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import {
  showStatus,
  hideStatus,
  loadStatus,
} from "../redux/actions/statusActions";
import EnhancedTableLanding from "../components/LandingTable";
import Link from "next/link";
import LoadStatusMessage from "../components/LoadStatusMessage";
import { useSelector } from "react-redux";
import { loadLandingList } from "../redux/actions/landingListActions";
import Countdown from "react-countdown";
import LandingForm from "../components/LandingForm";

const LandingPage = () => {
  let [url, setUrl] = useState("");
  let dispatch = useDispatch();
  const loadStatusResponse = useSelector(
    (state) => state.statusReducer.loadStatus
  );
  const show = useSelector((state) => state.statusReducer.showStatus);
  const rawRows = useSelector((state) => state.landingListReducer.landingList);
  const token = useSelector((state) => state.googleReducer.authResponse?.token);

  let timer = Date.now() + 300000;

  useEffect(() => {
    dispatch(loadLandingList(token));
    const interval = setInterval(() => {
      dispatch(loadLandingList(token));
    }, 300000);

    return () => clearInterval(interval);
  }, [dispatch, token]);

  const onFieldChange = (value, setValue) => {
    dispatch(hideStatus());
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    dispatch(showStatus());
    dispatch(loadStatus(url, token));
  };

  return (
    <Layout>
      <Head>
        <title>Ohmydown!</title>
        <meta description="Sleep without worries! We check the health of your websites and notify issues only in the cases you want to." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.center}>
        <div className={styles.status__form_container}>
          <LandingForm
            url={url}
            setUrl={setUrl}
            onFieldChange={onFieldChange}
            handleSubmit={handleSubmit}
          />
          <section
            id={styles.status__message}
            className={styles.status__result}
          >
            <LoadStatusMessage
              show={show}
              loadStatusResponse={loadStatusResponse}
            />
          </section>
          <p className={styles.link_to_profile}>
            You can go to your <Link href="/profile">Profile</Link> and add up
            to 5 websites to follow their uptimes and delays for free, with
            customized monitoring and notifications.
          </p>
          <h3 className={styles.landingTable__title}>
            Looking after 1000+ website's health:
          </h3>
          <p>
            (New real-time data in <span> </span>
            <Countdown
              className={styles.landingPage__countdown}
              date={timer}
              daysInHours={true}
              overtime={true}
            />
            )
          </p>
          <EnhancedTableLanding rawRows={rawRows} />
          <br></br>
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
