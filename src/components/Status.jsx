import React from "react";


const Status = ({ status }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__back">
          <h1>{status.status}</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Status;
