import React, { useState, useEffect } from "react";
import "../styles/Profile.css";
import EnhancedTableProfile from "../presentational/EnhancedTableProfile";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addProfileWeb } from "../../actions/profileActions";
import { useDispatch } from "react-redux";
import basicOnFieldChange from '../../scripts/basicOnFieldChange';
import { useSelector } from "react-redux";
import { loadProfileWebs } from "../../actions/profileActions";

const Profile = (props) => {
  let [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const addWebsite = (url) => dispatch(addProfileWeb(url));
  const rows = useSelector((state) => state.profileReducer.profileUrls);

  useEffect(() => {
    dispatch(loadProfileWebs());
  }, [dispatch]);
 
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    addWebsite(url);
  }
 
  return (
    <main className="profile">
      <h1 className="profile__title">Dani Alcalà's Profile</h1>
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
              onChange={(event) => basicOnFieldChange(event.target.value, setUrl)}
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
      <div className="profile__table">
        <EnhancedTableProfile rows={rows}/>
      </div>
    </main>
  );
};

export default Profile;
