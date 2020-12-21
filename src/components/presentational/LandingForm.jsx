import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {LANDING_PAGE_TITLE} from '../../data/constants'
import {LANDING_PAGE_SUBTITLE} from '../../data/constants'

const LandingForm = ({url, setUrl, onFieldChange, handleSubmit}) => {
  return (
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
      );
};

export default LandingForm;
