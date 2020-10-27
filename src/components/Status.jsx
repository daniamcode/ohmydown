import React, { useState } from "react";
import { loadStatus } from "../actions/statusActions";

const Status = ({ status }) => {
  let [url, setUrl] = useState("");

  function onFieldChange(value, setValue) {
    setValue(value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    loadStatus(url)
  }

  return (
    <div className="status__form-container">
      <form className="status__form" onSubmit={handleSubmit}>
        <label className="status__form-label">Is your site up or down?</label>
        <div className="status__form-inner-container">
        <input
        className="status__form-input"
          placeholder="Write your url here"
          name="url"
          required
          value={url}
          onChange={(event) => onFieldChange(event.target.value, setUrl)}
        />

        <button className="status__form-button" type="submit">
          Check
        </button>
        </div>
      </form>
      <h1>Your website is {status.status}!</h1>
    </div>
  );
};

export default Status;
