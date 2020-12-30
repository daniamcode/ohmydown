import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {LANDING_PAGE_TITLE} from '../data/constants'
import {LANDING_PAGE_SUBTITLE} from '../data/constants'
import styles from '../styles/LandingForm.module.css'

const LandingForm = ({url, setUrl, onFieldChange, handleSubmit}) => {
  return (
    <form className={styles.status__form} onSubmit={handleSubmit}>
        <label className={styles.status__form_label}>
          {LANDING_PAGE_TITLE}
          <br />
          {LANDING_PAGE_SUBTITLE}
        </label>
        <div className={styles.status__form__inner_container}>
          <TextField
            id="filled-basic"
            variant="filled"
            className={styles.status__form_input}
            placeholder="Write any url here"
            name="url"
            required
            value={url}
            onChange={(event) => onFieldChange(event.target.value, setUrl)}
          />
          <Button
            variant="contained"
            color="primary"
            className={styles.status__form_button}
            type="submit"
          >
            Check
          </Button>
        </div>
      </form>
      );
};

export default LandingForm;
