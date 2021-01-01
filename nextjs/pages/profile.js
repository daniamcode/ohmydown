import React, { useState, useEffect } from "react";
import styles from "../styles/Profile.module.css";
import EnhancedTableProfile from "../components/ProfileTable";
import { addProfileWeb } from "../redux/actions/profileActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadProfile } from "../redux/actions/profileActions";
import ProfileDelayGraph from "../components/ProfileDelayGraph";
import ProfileForm from "../components/ProfileForm";
import Login from "../components/Login";
import Spinner from "../components/Spinner";
import mapProfileDelayGraph from "../scripts/mapProfileDelayGraph";
import ownErrorMessage from "../scripts/ownErrorMessage";
import Layout from "../components/Layout";

const Profile = (props) => {
  let [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const rawRows = useSelector((state) => state.profileReducer.profile);

  let profileDelayGraphMapped = mapProfileDelayGraph(
    rawRows?.response?.data?.responses
  );
  const name = useSelector((state) => state.googleReducer.authResponse?.name);
  const token = useSelector((state) => state.googleReducer.authResponse?.token);
  const isLoading = useSelector(
    (state) => state.profileReducer.profile?.isLoading
  );
  const error = useSelector((state) => state.profileReducer.profile?.error);

  useEffect(() => {
    if (token) {
      dispatch(loadProfile(token));
      const interval = setInterval(() => {
        dispatch(loadProfile(token));
      }, 60000);
  
      return () => clearInterval(interval);
    }
  }, [dispatch, token]);

  function handleSubmit(event) {
    console.log(url)
    event.preventDefault();
    event.target.reset();
    dispatch(addProfileWeb(url, token));
  }
  return (
    <Layout>
      {!token ? (
        <div className={styles.profile__message__container}>
          <p className={styles.profile__message}>
            Open the padlock to get access to your profile:
          </p>
          <Login />
        </div>
      ) : isLoading ? (
        <div className={styles.spinner_active}>
          <Spinner />
        </div>
      ) : error?.response ? (
        <h1 >
          {ownErrorMessage(error.response)}
        </h1>
      ) : (
        <main className={styles.profile}>
          <h1 className={styles.profile__title}>{name}'s Profile</h1>
          <div id={styles.profile_delay_chart} className={styles.profile__chart}>
            <h2 className={styles.profile_delay_chart__title}>
              Performance:
            </h2>
            <ProfileDelayGraph
              profileDelayGraphMapped={profileDelayGraphMapped}
            />
          </div>
          <div className={styles.profile__add_title}>
            <h3 key={url}>Add a url to be followed (up to 5):</h3>
            <ProfileForm url={url} setUrl={setUrl} handleSubmit={handleSubmit}/>
          </div>
          <div className={styles.profile__table}>
            <EnhancedTableProfile rawRows={rawRows} />
          </div>
        </main>
      )}
    </Layout>
  );
};

export default Profile;
