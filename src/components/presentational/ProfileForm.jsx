import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import basicOnFieldChange from "../../scripts/basicOnFieldChange";

const ProfileForm = ({url, setUrl, handleSubmit}) => {
  return (
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
  );
};

export default ProfileForm;
