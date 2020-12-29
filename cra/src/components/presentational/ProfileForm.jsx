import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import basicOnFieldChange from "../../scripts/basicOnFieldChange";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "80%",
  },
  // resize:{
  //   fontSize: 20
  // },
}));

const ProfileForm = ({ url, setUrl, handleSubmit }) => {
  const classes = useStyles();

  return (
    <form className="profile__add" onSubmit={handleSubmit}>
      <div className="status__form-inner-container">
        <TextField
          id="filled-basic"
          variant="filled"
          className={classes.textField}
          placeholder="Write any url here (start with http:// or https://)"
          name="url"
          required
          value={url}
          onChange={(event) => {basicOnFieldChange(event.target.value, setUrl)}}
          // inputProps={{ pattern: "^https?://", classes: {
          //   input: classes.resize }}}
          // inputProps={{style: {fontSize: 20, marginLeft: 20, marginRight: 20, width: "100%"}, pattern: "^https?://"}}
          inputProps={{style: {fontSize: 20, marginLeft: 20, marginRight: 20, width: "100%"}}}
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
