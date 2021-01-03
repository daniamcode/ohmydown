import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import basicOnFieldChange from "../scripts/basicOnFieldChange";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/Profile.module.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  // resize:{
  //   fontSize: 20
  // },
}));

const ProfileForm = ({ url, setUrl, handleSubmit }) => {
  const classes = useStyles();

  return (
    <form className={styles.profile__add} onSubmit={handleSubmit}>
      <div className={styles.profile__form_inner_container}>
        <TextField
          id="filled-basic"
          variant="filled"
          className={classes.textField}
          placeholder="Write any url here"
          name="url"
          required
          value={url}
          onChange={(event) => {basicOnFieldChange(event.target.value, setUrl)}}
          inputProps={{style: {fontSize: 20, marginLeft: 60, marginRight: 60, width: "100%"}}}
        />
        <Button
          variant="contained"
          color="primary"
          className={styles.profile__form_button}
          type="submit"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
