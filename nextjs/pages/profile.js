import React, { useState, useEffect } from "react";
import profileStyles from "../styles/Profile.module.css";
import spinnerStyles from "../styles/Spinner.module.css";
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
  const rawRows = useSelector((state) => state.profileReducer.profile?.response);

  let profileDelayGraphMapped = mapProfileDelayGraph(
    rawRows
  );
  const name = useSelector((state) => state.googleReducer.authResponse?.name);
  const token = useSelector((state) => state.googleReducer.authResponse?.token);
  const profileIsLoading = useSelector(
    (state) => state.profileReducer.profile?.isLoading
  );
  const profileError = useSelector((state) => state.profileReducer.profile?.error);
  const addUrlIsLoading = useSelector(
    (state) => state.profileReducer.addUrl?.isLoading
  );
  const addUrlError = useSelector((state) => state.profileReducer.addUrl?.error);

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
    event.preventDefault();
    event.target.reset();
    dispatch(addProfileWeb(url, token));
  }
  
  return (
    <Layout>
      {!token ? (
        <div className={profileStyles.profile__message__container}>
          <p className={profileStyles.profile__message}>
            Open the padlock to get access to your profile:
          </p>
          <Login />
        </div>
      ) : profileIsLoading ? (
        <div className={spinnerStyles.spinner__active}>
          <Spinner />
        </div>
      ) : profileError?.response ? (
        <h1 className={profileStyles.profile__message__error}>
          {ownErrorMessage(profileError.response)}
        </h1>
      ) : (
        <main className={profileStyles.profile}>
          <h1 className={profileStyles.profile__title}>{name}'s Profile</h1>
          {rawRows?.length !== 0 && <div id={profileStyles.profile_delay_chart} className={profileStyles.profile__chart}>
            <h2 className={profileStyles.profile_delay_chart__title}>
              Performance:
            </h2>
            <ProfileDelayGraph
              profileDelayGraphMapped={profileDelayGraphMapped}
            />
          </div>}
          {addUrlIsLoading ? (
            <div className={spinnerStyles.spinner__active}>
            <Spinner />
          </div>
          ) : addUrlError?.response ? (
            <h1 className={profileStyles.profile__message__error}>
          {ownErrorMessage(addUrlError.response)}
            </h1>
          ) : (
          <div className={profileStyles.profile__add_title}>
            <h3 key={url}>Add a url to be followed (up to 5):</h3>
            <ProfileForm url={url} setUrl={setUrl} handleSubmit={handleSubmit}/>
          </div>
          )}
          {rawRows?.length !== 0 && <div className={profileStyles.profile__table}>
            <EnhancedTableProfile rawRows={rawRows} />
          </div>}
        </main>
      )}
    </Layout>
  );
};

export default Profile;
