import React from "react";
import "./Profile.css";

const Profile = (props) => {
  return (
    <main className="profile">
      <h1 className="profile__title">Your Profile</h1>
      <div className="profile__insert-poem">
              <p className="profile__insert-poem-title">Insert a url:</p>
              <br></br>
              <form
                className="profile__insert-poem-form"
                
              >
                <div className="profile__insert-poem-inputs">
                  <label className="profile__insert-poem-input">
                    {`Name: `}
                    <input
                      className="profile__insert-poem-input"
                      placeholder="Insert your website"
                      name="title"
                      required
                      
                    />
                  </label>
                  
                </div>
                

                <button className="profile__send-poem" type="submit">
                  Send
                </button>
              </form>
            </div>
    </main>
  );
};

export default Profile;
