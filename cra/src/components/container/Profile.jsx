import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import EnhancedTableProfile from "../presentational/ProfileTable";
import { addProfileWeb } from "../../redux/actions/profileActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadProfile } from "../../redux/actions/profileActions";
import ProfileDelayGraph from "../presentational/ProfileDelayGraph";
import ProfileForm from "../presentational/ProfileForm";
import Login from "./Login";
import Spinner from "../presentational/Spinner";
import mapProfileDelayGraph from "../../scripts/mapProfileDelayGraph";
import ownErrorMessage from "../../scripts/ownErrorMessage";

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
    <>
      {!token ? (
        <div className="profile__message__container">
          <p className="profile__message">
            Open the padlock to get access to your profile:
          </p>
          <Login />
        </div>
      ) : isLoading ? (
        <div className="spinner-active">
          <Spinner />
        </div>
      ) : error?.response ? (
        <h1 className="profile__message__error">
          {ownErrorMessage(error.response)}
        </h1>
      ) : (
        <main className="profile">
          <h1 className="profile__title">{name}'s Profile</h1>
          <div id="profile-delay-chart" className="profile__chart">
            <h2 className="profile-delay-chart__title">
              Performance:
            </h2>
            <ProfileDelayGraph
              profileDelayGraphMapped={profileDelayGraphMapped}
            />
          </div>
          <div className="profile__add-title">
            <h3 key={url}>Add a url to be followed (up to 5):</h3>
            <ProfileForm url={url} setUrl={setUrl} handleSubmit={handleSubmit}/>
          </div>
          <div className="profile__table">
            <EnhancedTableProfile rawRows={rawRows} />
          </div>
        </main>
      )}
    </>
  );
};

export default Profile;
