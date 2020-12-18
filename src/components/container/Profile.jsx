import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import EnhancedTableProfile from "../presentational/ProfileTable";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addProfileWeb } from "../../redux/actions/profileActions";
import { useDispatch } from "react-redux";
import basicOnFieldChange from "../../scripts/basicOnFieldChange";
import { useSelector } from "react-redux";
import { loadProfileWebs } from "../../redux/actions/profileActions";
import ProfileDelayGraph from "../presentational/ProfileDelayGraph";
import Login from "./Login";

const Profile = (props) => {
  let [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const addWebsite = (url) => dispatch(addProfileWeb(url));
  const rawRows = useSelector((state) => state.profileReducer.profileUrls);
  const name = useSelector(
    (state) => state.googleReducer.authResponse?.profileObj?.name
  );
  const token = useSelector(
    (state) => state.googleReducer.authResponse?.tokenId
  );
  const testName = useSelector(
    (state) => state.profileReducer?.profileUrls?.response?.data?.name
  );
  console.log(testName)

  useEffect(() => {
    dispatch(loadProfileWebs(token));
  }, [dispatch, token]);

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    addWebsite(url);
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
      ) : (
        <main className="profile">
          <h1 className="profile__title">Profile of {name}</h1>
          <h2 className="profile__title">Profile of {testName}</h2>
          <div className="profile__add-title">
            <h3 key={url}>Add a url to be followed (up to 5):</h3>
            <form className="profile__add" onSubmit={handleSubmit}>
              <div className="status__form-inner-container">
                <TextField
                  id="filled-basic"
                  variant="filled"
                  className="status__form-input"
                  placeholder="Write any url here"
                  name="url"
                  required
                  value={url}
                  onChange={(event) =>
                    basicOnFieldChange(event.target.value, setUrl)
                  }
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="status__form-button"
                  type="submit"
                >
                  Add
                </Button>
              </div>
            </form>
          </div>
          {/* <div className="profile__table">
            <EnhancedTableProfile rawRows={rawRows} />
          </div> */}
          <div id="profile-delay-chart" className="profile__chart">
            <h2 className="profile-delay-chart__title">
              Delay of {name}'s webs over time:
            </h2>
            <ProfileDelayGraph />
          </div>
        </main>
      )}
    </>
  );
};

export default Profile;
