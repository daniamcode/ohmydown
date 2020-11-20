import React, { useState } from "react";
import "./Profile.css";
import EnhancedTableProfile from "./EnhancedTableProfile";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Profile = (props) => {
  let [url, setUrl] = useState("");

  function onFieldChange(value, setValue) {
    setValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
  }
  return (
    <main className="profile">
      
        <h1 className="profile__title">Alex Moleiro's Profile</h1>
      <div className="profile__add-title">
        <h3>Add a url to be followed (up to 5):</h3>
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
              onChange={(event) => onFieldChange(event.target.value, setUrl)}
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
      <EnhancedTableProfile />

      </div>
    </main>
  );
};

export default Profile;
